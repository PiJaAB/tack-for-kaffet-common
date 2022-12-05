import { z } from 'zod';

export const subscriptionStatuses = [
  'Active',
  'Cancelled',
  'On-Hold',
  'Expired',
  'Pending-Cancel',
] as const;

const SubscriptionProduct = z.object({
  status: z.enum(subscriptionStatuses),
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
    .nullish(),
  failedAttempts: z.number(),
  updatedAt: z.date(),
});

export default SubscriptionProduct;
