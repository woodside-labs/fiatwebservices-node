// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class PaymentTransfers extends APIResource {
  save(body: PaymentTransferSaveParams, options?: RequestOptions): APIPromise<PaymentTransferSaveResponse> {
    return this._client.post('/payment-transfers', { body, ...options });
  }
}

/**
 * The response from the payment transfers endpoint.
 */
export interface PaymentTransferSaveResponse {
  id: string;

  /**
   * The date and time when the payment transfer was created
   */
  creationDate: string;

  messageId: string;

  type: 'rtp' | 'sepa';
}

export interface PaymentTransferSaveParams {
  message: string;

  type: string;
}

export declare namespace PaymentTransfers {
  export {
    type PaymentTransferSaveResponse as PaymentTransferSaveResponse,
    type PaymentTransferSaveParams as PaymentTransferSaveParams,
  };
}
