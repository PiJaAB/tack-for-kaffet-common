import { z } from 'zod';

const RecurrenceTokenSchema = z.object({
  type: z.union([
    z.literal('payment'),
    z.literal('recurrence'),
    z.literal('transactionOnfile'),
    z.literal('unscheduled'),
  ]),
  token: z.string(),
  name: z.string(),
  expiryDate: z.string(),
});

export default RecurrenceTokenSchema;
