# Fiatwebservices

Types:

- <code><a href="./src/resources/top-level.ts">PingResponse</a></code>

Methods:

- <code title="get /ping">client.<a href="./src/index.ts">ping</a>() -> PingResponse</code>

# PaymentTransfer

Types:

- <code><a href="./src/resources/payment-transfer.ts">PaymentTransferCreateResponse</a></code>
- <code><a href="./src/resources/payment-transfer.ts">PaymentTransferRetrieveResponse</a></code>

Methods:

- <code title="post /payment-transfers">client.paymentTransfer.<a href="./src/resources/payment-transfer.ts">create</a>({ ...params }) -> PaymentTransferCreateResponse</code>
- <code title="get /payment-transfers/{id}">client.paymentTransfer.<a href="./src/resources/payment-transfer.ts">retrieve</a>(id) -> PaymentTransferRetrieveResponse</code>
