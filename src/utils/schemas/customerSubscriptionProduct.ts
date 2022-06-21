import { z } from 'zod';

const CustomerSubscriptionProduct = z.object({
  id: z.string().optional(),
  continuousSince: z.date(),
  endDate: z.date(),
  productID: z.string(),
  startDate: z.date(),
  recurrenceToken: z.array(
    z.object({
      type: z.string().optional(),
      token: z.string().optional(),
      name: z.string().optional(),
      expiryDate: z.string().optional(),
    }),
  ).optional(),
  active: z.boolean(),
  status: z.string().optional(),
});

export default CustomerSubscriptionProduct;

