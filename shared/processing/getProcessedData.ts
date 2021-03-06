import { ContentItem } from 'kentico-cloud-delivery';
import {
    IPreprocessedData,
    Operation,
} from 'kontent-docs-shared-code/reference/preprocessedModels';
import { ZapiSpecification } from '../models/zapi_specification';
import { processApiSpecification } from './apiSpecification';

export const getProcessedData = (
    specification: ZapiSpecification,
    linkedItems: ContentItem[],
    operation: Operation,
): IPreprocessedData => {
    const dataBlob = getDataObject(specification, operation);
    processApiSpecification([specification], dataBlob, linkedItems);

    return dataBlob;
};

const getDataObject = (item: ZapiSpecification, operation: Operation): IPreprocessedData => ({
    items: {},
    operation,
    zapiSpecificationCodename: item.system.codename,
    zapiSpecificationId: item.system.id,
});
