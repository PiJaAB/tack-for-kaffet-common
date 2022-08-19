import { z } from 'zod';

const SubscriptionProduct = z.object({
  continuouslySince: z.date().nullable(),
  createdAt: z.date().optional(),
  endDate: z.date().optional(),
  firstStart: z.date().optional(),
  trialEndDate: z.date().optional(),
  orderRefs: z.array(
    z.object({
      data: z.date(),
      orderDocRef: z.string(),
    }),
  ),
  paymentOrderID: z.string().optional(),
  recurrenceTokenRef: z.string(),
  updatedAt: z.date(),
  failedAttempts: z.number(),
});

export default SubscriptionProduct;
