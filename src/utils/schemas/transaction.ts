import { z } from 'zod';
import { SWEDBANK_PAY_PAYMENT_METHOD } from '../constants';
import TransactionStatusSchema from './transactionStatusSchema';

const TransactionSchema = z.object({
  customerID: z.string(),
  date: z.date().optional(),
  paymentOrderID: z.string(),
  orderID: z.string(),
  paymentMethod: z.string(),
  paymentOrderStatus: TransactionStatusSchema,
});

export const TransactionSwedbankPayCCSchema = TransactionSchema.extend({
  paymentOrderID: z.string(),
  paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.CC),
});

export default TransactionSchema;
