import { z } from 'zod';

const TransactionSchema = z.object({
  id: z.string().optional(),
  amount: z.number(),
  date: z.date().optional(),
  customerId: z.string().optional(),
  accountNumber: z.string(),
  accountName: z.string(),
  transactionType: z.string(),
  orderRef: z.string(), // z.instanceof(DocumentReference)
});

export default TransactionSchema;
