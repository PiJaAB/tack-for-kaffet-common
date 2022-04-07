import { z } from 'zod';

const TransactionSchema = z.object({
  amount: z.number(),
  date: z.date().optional(),
  customerId: z.string().optional(),
  accountNumber: z.string(),
  accountName: z.string(),
  transactionType: z.string(),
  orderRef: z.string(),
});

export default TransactionSchema;
