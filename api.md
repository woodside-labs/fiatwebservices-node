# Fiatwebservices

Types:

- <code><a href="./src/resources/top-level.ts">PingResponse</a></code>

Methods:

- <code title="get /ping">client.<a href="./src/index.ts">ping</a>() -> PingResponse</code>

# Transfer

## Sepa

Types:

- <code><a href="./src/resources/transfer/sepa.ts">SepaCreateResponse</a></code>

Methods:

- <code title="post /payment-transfers/sepa">client.transfer.sepa.<a href="./src/resources/transfer/sepa.ts">create</a>({ ...params }) -> SepaCreateResponse</code>

## Rtp

Types:

- <code><a href="./src/resources/transfer/rtp.ts">RtpCreateResponse</a></code>

Methods:

- <code title="post /payment-transfers/rtp">client.transfer.rtp.<a href="./src/resources/transfer/rtp.ts">create</a>({ ...params }) -> RtpCreateResponse</code>

## Swift

Types:

- <code><a href="./src/resources/transfer/swift.ts">SwiftCreateResponse</a></code>

Methods:

- <code title="post /payment-transfers/swift">client.transfer.swift.<a href="./src/resources/transfer/swift.ts">create</a>({ ...params }) -> SwiftCreateResponse</code>

## ACH

Types:

- <code><a href="./src/resources/transfer/ach.ts">ACHCreateResponse</a></code>

Methods:

- <code title="post /payment-transfers/ach">client.transfer.ach.<a href="./src/resources/transfer/ach.ts">create</a>({ ...params }) -> ACHCreateResponse</code>
