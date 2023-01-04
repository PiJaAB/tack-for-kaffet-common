import { z } from 'zod';

export const subscriptionStatuses = [
  'Active',
  'Cancelled',
  'On-Hold',
  'Expired',
  'Pending-Cancel',
] as const;

const SubscriptionProduct = z.object({
  variant: z.string().nullish(),
  status: z.enum(subscriptionStatuses),
  continuouslySince: z.date().nullable(),
  createdAt: z.date().nullish(),
  endDate: z.date().nullish(),
  firstStart: z.date().nullish(),
  trialEndDate: z.date().nullish(),
  orderRefs: z.array(z.string()),
  nextRenewalAttempt: z.date().nullable(),
  renewalAttempts: z.number(),
  savedPaymentMethod: z
    .object({
      docRef: z.string(),
      date: z.date(),
    })
    .nullish(),
  sentEmails: z
    .array(
      z.object({
        date: z.date(),
        type: z.string(),
      }),
    )
    .nullish(),
  failedAttempts: z.number(),
  updatedAt: z.date(),
});

export default SubscriptionProduct;
