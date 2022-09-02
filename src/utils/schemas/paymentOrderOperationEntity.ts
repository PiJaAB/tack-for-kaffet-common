import { z } from 'zod';

const PaymentOrderOperationEntity = z.object({
  method: z.union([z.literal('GET'), z.literal('PATCH'), z.literal('POST')]),
  href: z.string(),
  rel: z.union([
    z.literal('update-order'),
    z.literal('abort'),
    z.literal('cancel'),
    z.literal('capture'),
    z.literal('reversal'),
    z.literal('redirect-checkout'),
    z.literal('view-checkout'),
  ]),
  contentType: z.string(),
});

export default PaymentOrderOperationEntity;
