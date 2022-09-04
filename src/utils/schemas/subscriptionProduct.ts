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
  recurrenceTokenRef: z.string(),
  failedAttempts: z.number(),
  status: z.union([
    z.literal('cancelled'),
    z.literal('pending-cancel'),
    z.literal('active'),
  ]),
  updatedAt: z.date(),
});

export default SubscriptionProduct;
