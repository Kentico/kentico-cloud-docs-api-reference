import { ContentItem, Elements } from 'kentico-cloud-delivery';

/**
 * Generated by 'kentico-cloud-model-generator-utility@2.1.0'
 * Timestamp: Thu Sep 05 2019 13:36:04 GMT+0200 (GMT+02:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiSchemaOneof extends ContentItem {
  public discriminator: Elements.RichTextElement;
  public schemas: Elements.RichTextElement;
  public apiReference: Elements.TaxonomyElement;
  public commonSchemaElementsExample: Elements.TextElement;
  public commonSchemaElementsDescription: Elements.RichTextElement;
  public commonSchemaElementsName: Elements.TextElement;

  constructor() {
    super({
      propertyResolver: ((elementName: string) => {
        if (elementName === 'api_reference') {
          return 'apiReference';
        }
        if (elementName === 'common_schema_elements__example') {
          return 'commonSchemaElementsExample';
        }
        if (elementName === 'common_schema_elements__description') {
          return 'commonSchemaElementsDescription';
        }
        if (elementName === 'common_schema_elements__name') {
          return 'commonSchemaElementsName';
        }
        return elementName;
      })
    });
  }
}
