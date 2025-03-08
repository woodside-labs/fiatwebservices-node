// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ping extends APIResource {
  ping(options?: RequestOptions): APIPromise<PingPingResponse> {
    return this._client.get('/ping', options);
  }
}

export interface PingPingResponse {
  /**
   * A ping response.
   */
  message: string;
}

export declare namespace Ping {
  export { type PingPingResponse as PingPingResponse };
}
