import { ContentItem, Elements } from 'kentico-cloud-delivery';

import { ZapiAllSchemas } from '../processing/schemas';

/**
 * Generated by 'kentico-cloud-model-generator-utility@2.1.0'
 * Timestamp: Thu Sep 05 2019 13:36:04 GMT+0200 (GMT+02:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiPropertyReferencingASchema extends ContentItem {
  public schema: Elements.LinkedItemsElement<ZapiAllSchemas>;
  public name: Elements.TextElement;
}
