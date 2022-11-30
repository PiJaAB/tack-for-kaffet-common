import { z, ZodStringDef, ZodType } from 'zod';
import {
  SWEDBANK_PAY_PAYMENT_METHOD,
  SWEDBANK_PAY_PAYMENT_METHOD_PREFIX,
} from '../constants';
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

export const TransactionSwedbankSchema = TransactionSchema.extend({
  paymentOrderID: z.string(),
  paymentOrderStatus: TransactionStatusSchema,
  paymentMethod: z.union([
    z.string().startsWith(`${SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-`) as ZodType<
      `${typeof SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-`,
      ZodStringDef
    >,
    z.literal(SWEDBANK_PAY_PAYMENT_METHOD_PREFIX),
  ]),
});

export const TransactionSwedbankPayCCSchema = TransactionSchema.extend({
  paymentOrderID: z.string(),
  paymentOrderStatus: TransactionStatusSchema,
  paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.CC),
});

export const TransactionSwedbankPaySwishSchema = TransactionSchema.extend({
  paymentOrderID: z.string(),
  paymentOrderStatus: TransactionStatusSchema,
  paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.Swish),
});

export default TransactionSchema;
