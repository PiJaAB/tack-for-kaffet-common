import { z } from 'zod';

const SubscriptionProduct = z.object({
  continuouslySince: z.date().optional(),
  createdAt: z.date().optional(),
  endDate: z.date().optional(),
  firstStart: z.date().optional(),
  orderRefs: z.array(z.string()),
  paymentOrderID: z.string().optional(),
  recurrenceToken: z.object({
    type: z.string(),
    token: z.string(),
    name: z.string(),
    expiryDate: z.string(),
  }),
  updatedAt: z.date(),
});

export default SubscriptionProduct;
