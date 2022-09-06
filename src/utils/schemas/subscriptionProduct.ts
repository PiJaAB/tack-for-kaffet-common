import { z } from 'zod';

const SubscriptionProduct = z.object({
  status: z.union([
    z.literal('Active'),
    z.literal('Cancelled'),
    z.literal('On-Hold'),
    z.literal('Expired'),
    z.literal('Pending-Cancel'),
  ]),
  continuouslySince: z.date().nullable(),
  createdAt: z.date().optional(),
  endDate: z.date().optional(),
  firstStart: z.date().optional(),
  trialEndDate: z.date().optional(),
  orderRefs: z.array(z.string()),
  nextRenewalAttempt: z.date().nullable(),
  renewalAttempts: z.number(),
  savedPaymentMethod: z
    .object({
      docRef: z.string(),
      date: z.date(),
    })
    .optional()
    .nullable(),
  failedAttempts: z.number(),
  updatedAt: z.date(),
});

export default SubscriptionProduct;
