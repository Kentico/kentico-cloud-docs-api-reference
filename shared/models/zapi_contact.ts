import { ContentItem, Elements } from 'kentico-cloud-delivery';

/**
 * Generated by 'kentico-cloud-model-generator-utility@2.1.0'
 * Timestamp: Thu Sep 05 2019 13:36:04 GMT+0200 (GMT+02:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiContact extends ContentItem {
  public name: Elements.TextElement;
  public url: Elements.TextElement;
  public email: Elements.TextElement;
  public apiReference: Elements.TaxonomyElement;

  constructor() {
    super({
      propertyResolver: ((elementName: string) => {
        if (elementName === 'api_reference') {
          return 'apiReference';
        }
        return elementName;
      })
    });
  }
}
