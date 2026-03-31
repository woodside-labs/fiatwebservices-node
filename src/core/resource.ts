// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Fiatwebservices } from '../client';

export abstract class APIResource {
  protected _client: Fiatwebservices;

  constructor(client: Fiatwebservices) {
    this._client = client;
  }
}
