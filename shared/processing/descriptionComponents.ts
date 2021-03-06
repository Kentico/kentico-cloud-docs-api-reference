import { ContentItem, Elements } from 'kentico-cloud-delivery';
import {
  ICallout,
  ICodeSample,
  ICodeSamples,
  IImage,
  IPreprocessedData
} from 'kontent-docs-shared-code/reference/preprocessedModels';

import { Callout } from '../models/callout';
import { CodeSample } from '../models/code_sample';
import { CodeSamples } from '../models/code_samples';
import { Image } from '../models/image';
import {
  processLinkedItemsElement,
  processMultipleChoiceElement,
  processTaxonomyElement
} from '../utils/processElements';
import { sortCodeSamples } from '../utils/sortCodeSamples';
import { getItemsDataFromLinkedItems, getItemsDataFromRichText, getSystemProperties, processItems } from './common';
import { AllSchemas, getSchemaData, ZapiAllSchemas } from './schemas';

type ZapiDescriptionComponents = Image | Callout | CodeSample | CodeSamples;
type DescriptionComponents = IImage | ICallout | ICodeSample | ICodeSamples;

type ZapiDescriptionWithSchemasComponents = ZapiDescriptionComponents | ZapiAllSchemas;
type DescriptionWithSchemasComponents = DescriptionComponents | AllSchemas;

export const processCodeSamplesInLinkedItems = (
  items: ContentItem[],
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): void =>
  processItems(
    getItemsDataFromLinkedItems<CodeSamples, ICodeSamples>(getCodeSamplesData)
  )(items, dataBlob, linkedItems);

export const processDescriptionComponents = (
  field: Elements.RichTextElement,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): void =>
  processItems(
    getItemsDataFromRichText<ZapiDescriptionComponents, DescriptionComponents>(getDescriptionComponentData)
  )(field, dataBlob, linkedItems);

export const processDescriptionWithSchemasComponents = (
  field: Elements.RichTextElement,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): void =>
  processItems(
    getItemsDataFromRichText<ZapiDescriptionWithSchemasComponents, DescriptionWithSchemasComponents>(
      getDescriptionWithSchemasComponentData
    )
  )(field, dataBlob, linkedItems);

const getDescriptionWithSchemasComponentData = (
  component: ZapiDescriptionWithSchemasComponents,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): DescriptionWithSchemasComponents => {
  if (component.system.type.includes('schema')) {
    return getSchemaData(component as ZapiAllSchemas, dataBlob, linkedItems);
  } else {
    return getDescriptionComponentData(component as ZapiDescriptionComponents, dataBlob, linkedItems);
  }
};

const getDescriptionComponentData = (
  component: ZapiDescriptionComponents,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): DescriptionComponents => {
  switch (component.system.type) {
    case 'image': {
      return getImageData(component as Image);
    }
    case 'callout': {
      return getCalloutData(component as Callout);
    }
    case 'code_sample': {
      return getCodeSampleData(component as CodeSample);
    }
    case 'code_samples': {
      return getCodeSamplesData(component as CodeSamples, dataBlob, linkedItems);
    }
    default:
      // Content chunk is directly resolved by its richTextResolver
      if (component.system.type !== 'content_chunk') {
        throw Error(`Unsupported content type (${component.system.type}) in a description element`);
      }
  }
};

const processCodeSamples = (items: ContentItem[], dataBlob: IPreprocessedData, linkedItems: ContentItem[]): void =>
  processItems(getItemsDataFromLinkedItems<CodeSample, ICodeSample>(getCodeSampleData))(items, dataBlob, linkedItems);

const getImageData = (image: Image): IImage => {
  if (!image.image || image.image.value.length !== 1) {
    throw Error(`Content type '${image.system.type}' with codename '${image.system.id}'
            needs to have exactly 1 asset as image`);
  }

  const asset = image.image.value[0];

  return {
    ...getSystemProperties(image),
    asset: {
      description: asset.description,
      height: asset.height,
      name: asset.name,
      size: asset.size,
      type: asset.type,
      url: asset.url,
      width: asset.width
    },
    border: processMultipleChoiceElement(image.border),
    description: image.description.resolveHtml(),
    imageWidth: processMultipleChoiceElement(image.imageWidth),
    url: image.url.value,
    zoomable: processMultipleChoiceElement(image.zoomable)
  };
};

export const getCalloutData = (callout: Callout): ICallout => {
  // Necessary for filtering out content chunk items inside rich text elements of schemas
  if (callout.system.type !== 'callout') {
    return undefined;
  }

  return {
    ...getSystemProperties(callout),
    content: callout.content.resolveHtml(),
    type: processMultipleChoiceElement(callout.type)
  };
};

const getCodeSampleData = (codeSample: CodeSample): ICodeSample => ({
  ...getSystemProperties(codeSample),
  code: codeSample.code.value,
  platform: processTaxonomyElement(codeSample.platform),
  programmingLanguage: processTaxonomyElement(codeSample.programmingLanguage)
});

const getCodeSamplesData = (
  item: CodeSamples,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): ICodeSamples => {
  processCodeSamples(item.codeSamples.value, dataBlob, linkedItems);

  return {
    ...getSystemProperties(item),
    codeSamples: sortCodeSamples(processLinkedItemsElement(item.codeSamples))
  };
};
