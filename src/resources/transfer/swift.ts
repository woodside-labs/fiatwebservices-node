// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Swift extends APIResource {
  create(body: SwiftCreateParams, options?: RequestOptions): APIPromise<SwiftCreateResponse> {
    return this._client.post('/payment-transfers/swift', { body, ...options });
  }
}

/**
 * The payment transfer object.
 */
export interface SwiftCreateResponse {
  /**
   * The internal ID of the payment transfer.
   */
  id: string;

  /**
   * The date and time when the payment transfer was created
   */
  createdAt: string;

  /**
   * The direction of the payment transfer.
   */
  direction: 'debit' | 'credit';

  /**
   * The initiating party of the payment transfer.
   */
  initiatingPartyId: string;

  /**
   * The internal ID of the organization.
   */
  organizationId: string;

  /**
   * The payment rail type of the transfer.
   */
  type: 'swift' | 'sepa' | 'ach' | 'rtp';

  /**
   * The category purpose code of the payment transfer.
   */
  categoryPurposeCode?: string | null;

  /**
   * The date and time when the payment transfer was created
   */
  creationDate?: string | null;

  /**
   * The message ID of the payment transfer. Used to identify the message.
   */
  messageId?: string | null;

  /**
   * The information ID of the payment transfer. Used to identify the entire
   * transfer.
   */
  paymentInformationId?: string | null;
}

export interface SwiftCreateParams {
  /**
   * The XML message of the transfer.
   */
  message: string;
}

export declare namespace Swift {
  export { type SwiftCreateResponse as SwiftCreateResponse, type SwiftCreateParams as SwiftCreateParams };
}
