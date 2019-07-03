import {
    ContentItem,
    Fields,
} from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Mon Jul 01 2019 14:28:20 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class.
 * Generator doesn't have this information available and so its up to you to define relationship between models.
 */
export class ZapiCategory extends ContentItem {
    public description: Fields.RichTextField;
    public url: Fields.UrlSlugField;
    public apiReference: Fields.TaxonomyField;
    public name: Fields.TextField;

    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'api_reference') {
                    return 'apiReference';
                }
                return fieldName;
            }),
        });
    }
}
