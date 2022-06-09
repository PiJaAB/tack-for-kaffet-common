import { z } from 'zod';

const TransactionSchema = z.object({
  id: z.string(),
  customerID: z.string(),
  date: z.date().optional(),
  paymentOrderID: z.string(),
  orderID: z.string(),
  transactionType: z.string(),
});

export default TransactionSchema;
