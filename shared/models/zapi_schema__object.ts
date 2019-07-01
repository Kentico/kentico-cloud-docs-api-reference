import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Mon Jul 01 2019 14:28:20 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class.
 * Generator doesn't have this information available and so its up to you to define relationship between models.
 */
export class ZapiSchemaObject extends ContentItem {
    public required: Fields.TextField;
    public additionalProperties: ContentItem[];
    public apiReference: Fields.TaxonomyField;
    public commonSchemaElementsExample: Fields.TextField;
    public commonSchemaElementsDescription: Fields.RichTextField;
    public commonSchemaElementsName: Fields.TextField;
    public properties: Fields.RichTextField;

    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'additional_properties') {
                    return 'additionalProperties';
                }
                if (fieldName === 'api_reference') {
                    return 'apiReference';
                }
                if (fieldName === 'common_schema_elements__example') {
                    return 'commonSchemaElementsExample';
                }
                if (fieldName === 'common_schema_elements__description') {
                    return 'commonSchemaElementsDescription';
                }
                if (fieldName === 'common_schema_elements__name') {
                    return 'commonSchemaElementsName';
                }
                return fieldName;
            }),
        });
    }
}