// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ACHAPI from './ach';
import { ACH, ACHCreateParams, ACHCreateResponse } from './ach';
import * as RtpAPI from './rtp';
import { Rtp, RtpCreateParams, RtpCreateResponse } from './rtp';
import * as SepaAPI from './sepa';
import { Sepa, SepaCreateParams, SepaCreateResponse } from './sepa';
import * as SwiftAPI from './swift';
import { Swift, SwiftCreateParams, SwiftCreateResponse } from './swift';

export class Transfer extends APIResource {
  sepa: SepaAPI.Sepa = new SepaAPI.Sepa(this._client);
  rtp: RtpAPI.Rtp = new RtpAPI.Rtp(this._client);
  swift: SwiftAPI.Swift = new SwiftAPI.Swift(this._client);
  ach: ACHAPI.ACH = new ACHAPI.ACH(this._client);
}

Transfer.Sepa = Sepa;
Transfer.Rtp = Rtp;
Transfer.Swift = Swift;
Transfer.ACH = ACH;

export declare namespace Transfer {
  export {
    Sepa as Sepa,
    type SepaCreateResponse as SepaCreateResponse,
    type SepaCreateParams as SepaCreateParams,
  };

  export { Rtp as Rtp, type RtpCreateResponse as RtpCreateResponse, type RtpCreateParams as RtpCreateParams };

  export {
    Swift as Swift,
    type SwiftCreateResponse as SwiftCreateResponse,
    type SwiftCreateParams as SwiftCreateParams,
  };

  export { ACH as ACH, type ACHCreateResponse as ACHCreateResponse, type ACHCreateParams as ACHCreateParams };
}
