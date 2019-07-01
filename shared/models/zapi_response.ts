import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Mon Jul 01 2019 14:28:20 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class.
 * Generator doesn't have this information available and so its up to you to define relationship between models.
 */
export class ZapiResponse extends ContentItem {
    public description: Fields.RichTextField;
    public headers: ContentItem[];
    public schema: Fields.RichTextField;
    public example: Fields.TextField;
    public apiReference: Fields.TaxonomyField;
    public mediaType: Fields.MultipleChoiceField;
    public httpStatus: Fields.MultipleChoiceField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'api_reference') {
                    return 'apiReference';
                }
                if (fieldName === 'media_type') {
                    return 'mediaType';
                }
                if (fieldName === 'http_status') {
                    return 'httpStatus';
                }
                return fieldName;
            })
        });
    }
}