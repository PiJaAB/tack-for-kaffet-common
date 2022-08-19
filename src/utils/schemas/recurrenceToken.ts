import { z } from 'zod';

const RecurrenceTokenSchema = z.object({
  type: z.string(),
  token: z.string(),
  name: z.string(),
  expiryDate: z.string(),
});

export default RecurrenceTokenSchema;
