// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentTransfers extends APIResource {
  create(
    body: PaymentTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentTransferCreateResponse> {
    return this._client.post('/payment-transfers', { body, ...options });
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentTransferRetrieveResponse> {
    return this._client.get(path`/payment-transfers/${id}`, options);
  }
}

/**
 * The payment transfer object.
 */
export interface PaymentTransferCreateResponse {
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
  type: 'swift' | 'sepa';

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

/**
 * The payment transfer object.
 */
export interface PaymentTransferRetrieveResponse {
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
   * The party object.
   */
  initiatingParty: PaymentTransferRetrieveResponse.InitiatingParty;

  /**
   * The internal ID of the organization.
   */
  organizationId: string;

  /**
   * The payment rail type of the transfer.
   */
  type: 'swift' | 'sepa';

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

  /**
   * The payment instructions of the payment transfer.
   */
  paymentInstructions?: Array<PaymentTransferRetrieveResponse.PaymentInstruction> | null;
}

export namespace PaymentTransferRetrieveResponse {
  /**
   * The party object.
   */
  export interface InitiatingParty {
    /**
     * The internal ID of the party.
     */
    id: string;

    /**
     * The date and time when the party was created
     */
    createdAt: string;

    /**
     * The internal ID of the organization.
     */
    organizationId: string;

    /**
     * The type of the party.
     */
    partyType: 'external' | 'internal';

    /**
     * The internal ID of the account associated with this party.
     */
    accountId?: string | null;

    /**
     * The internal ID of the address associated with this party.
     */
    addressId?: string | null;

    /**
     * The internal ID of the agent associated with this party.
     */
    agentId?: string | null;

    /**
     * The name of the party.
     */
    name?: string | null;

    /**
     * The external identifier of the party.
     */
    partyId?: string | null;
  }

  /**
   * The payment instruction object.
   */
  export interface PaymentInstruction {
    /**
     * The internal ID of the payment instruction.
     */
    id: string;

    /**
     * The amount of the payment instruction.
     */
    amount: number;

    /**
     * The date and time when the payment instruction was created
     */
    createdAt: string;

    /**
     * The currency of the payment instruction.
     */
    currency: string;

    /**
     * The direction of the payment instruction.
     */
    direction: 'debit' | 'credit';

    /**
     * The internal ID of the organization.
     */
    organizationId: string;

    /**
     * The internal ID of the payment transfer this instruction belongs to.
     */
    paymentTransferId: string;

    /**
     * The payment rail type of the instruction.
     */
    type: 'swift' | 'sepa';

    /**
     * The party object.
     */
    creditor?: PaymentInstruction.Creditor | null;

    /**
     * The party object.
     */
    debtor?: PaymentInstruction.Debtor | null;

    /**
     * The end-to-end ID of the payment instruction.
     */
    endToEndId?: string | null;

    /**
     * The instruction ID of the payment instruction.
     */
    instructionId?: string | null;

    /**
     * The remittance information of the payment instruction.
     */
    remittanceInformation?: string | null;
  }

  export namespace PaymentInstruction {
    /**
     * The party object.
     */
    export interface Creditor {
      /**
       * The internal ID of the party.
       */
      id: string;

      /**
       * The date and time when the party was created
       */
      createdAt: string;

      /**
       * The internal ID of the organization.
       */
      organizationId: string;

      /**
       * The type of the party.
       */
      partyType: 'external' | 'internal';

      /**
       * The internal ID of the account associated with this party.
       */
      accountId?: string | null;

      /**
       * The internal ID of the address associated with this party.
       */
      addressId?: string | null;

      /**
       * The internal ID of the agent associated with this party.
       */
      agentId?: string | null;

      /**
       * The name of the party.
       */
      name?: string | null;

      /**
       * The external identifier of the party.
       */
      partyId?: string | null;
    }

    /**
     * The party object.
     */
    export interface Debtor {
      /**
       * The internal ID of the party.
       */
      id: string;

      /**
       * The date and time when the party was created
       */
      createdAt: string;

      /**
       * The internal ID of the organization.
       */
      organizationId: string;

      /**
       * The type of the party.
       */
      partyType: 'external' | 'internal';

      /**
       * The internal ID of the account associated with this party.
       */
      accountId?: string | null;

      /**
       * The internal ID of the address associated with this party.
       */
      addressId?: string | null;

      /**
       * The internal ID of the agent associated with this party.
       */
      agentId?: string | null;

      /**
       * The name of the party.
       */
      name?: string | null;

      /**
       * The external identifier of the party.
       */
      partyId?: string | null;
    }
  }
}

export interface PaymentTransferCreateParams {
  /**
   * The XML message of the transfer.
   */
  message: string;

  /**
   * The payment rail type of the transfer.
   */
  type: 'swift' | 'sepa';
}

export declare namespace PaymentTransfers {
  export {
    type PaymentTransferCreateResponse as PaymentTransferCreateResponse,
    type PaymentTransferRetrieveResponse as PaymentTransferRetrieveResponse,
    type PaymentTransferCreateParams as PaymentTransferCreateParams,
  };
}
