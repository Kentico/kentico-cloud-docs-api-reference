import { ContentItem, Elements } from 'kentico-cloud-delivery';

/**
 * Generated by 'kentico-cloud-model-generator-utility@2.1.0'
 * Timestamp: Thu Sep 05 2019 13:36:04 GMT+0200 (GMT+02:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiDiscriminator extends ContentItem {
  public mapping: Elements.RichTextElement;
  public propertyName: Elements.TextElement;

  constructor() {
    super({
      propertyResolver: ((elementName: string) => {
        if (elementName === 'property_name') {
          return 'propertyName';
        }
        return elementName;
      })
    });
  }
}
