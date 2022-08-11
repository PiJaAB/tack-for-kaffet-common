import { z } from 'zod';
import PaymentOrderOperationEntity from './paymentOrderOperationEntity';
import TransactionStatusSchema from './transactionStatusSchema';

const TransactionSchema = z.object({
  customerID: z.string(),
  date: z.date().optional(),
  paymentOrderID: z.string(),
  orderID: z.string(),
  paymentMethod: z.string(),
  paymentOrderStatus: TransactionStatusSchema,
  checkoutURL: PaymentOrderOperationEntity.optional(),
});

export default TransactionSchema;
