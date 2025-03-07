// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class PaymentTransfers extends APIResource {
  create(
    body: PaymentTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentTransferCreateResponse> {
    return this._client.post('/payment-transfers', { body, ...options });
  }
}

/**
 * The response from the payment transfers endpoint.
 */
export interface PaymentTransferCreateResponse {
  id: string;

  /**
   * The date and time when the payment transfer was created
   */
  creationDate: string;

  messageId: string;

  type: 'rtp' | 'sepa';
}

export interface PaymentTransferCreateParams {
  message: string;

  type: string;
}

export declare namespace PaymentTransfers {
  export {
    type PaymentTransferCreateResponse as PaymentTransferCreateResponse,
    type PaymentTransferCreateParams as PaymentTransferCreateParams,
  };
}
