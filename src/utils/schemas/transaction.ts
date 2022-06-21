import { z } from 'zod';

const TransactionSchema = z.object({
  customerID: z.string(),
  date: z.date().optional(),
  paymentOrderID: z.string(),
  orderID: z.string(),
  paymentMethod: z.string(),
  paymentOrderStatus: z.string().optional(),
  checkoutURL: z.string().optional(),
});

export default TransactionSchema;
