import { z } from 'zod';
import { SWEDBANK_PAY_PAYMENT_METHOD } from '../constants';
import ActionDefinitionSchema from './actionDefinition';
import TransactionStatusSchema from './transactionStatusSchema';

const TransactionSchema = z.object({
  customerID: z.string(),
  date: z.date().optional(),
  orderID: z.string(),
  paymentMethod: z.string(),
  transactionStatus: TransactionStatusSchema,
  actions: z.array(ActionDefinitionSchema).optional(),
});

export const TransactionSwedbankPayCCSchema = TransactionSchema.extend({
  paymentOrderID: z.string(),
  paymentOrderStatus: TransactionStatusSchema,
  paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.CC),
});

export default TransactionSchema;
