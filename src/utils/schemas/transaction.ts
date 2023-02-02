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

export const TransactionSwedbankPaySchema = TransactionSchema.extend({
  paymentOrderID: z.string(),
  paymentOrderStatus: z.enum([
    'Aborted',
    'Cancelled',
    'Failed',
    'Initialized',
    'Paid',
    'Ready',
    'Pending',
  ]),
  paymentMethod: z.union([
    z.string().startsWith(`${SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-`) as ZodType<
      `${typeof SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-${string}`,
      ZodStringDef
    >,
    z.literal(SWEDBANK_PAY_PAYMENT_METHOD_PREFIX),
  ]),
  isAuthorized: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  isCaptured: z.boolean().optional(),
  isReversed: z.boolean().optional(),
});

export const TransactionSwedbankPayCCSchema =
  TransactionSwedbankPaySchema.extend({
    paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.CC),
  });

export const TransactionSwedbankPaySwishSchema =
  TransactionSwedbankPaySchema.extend({
    paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.Swish),
  });

export default TransactionSchema;
