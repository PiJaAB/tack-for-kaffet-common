import { z } from 'zod';

import TransactionSchema, {
  TransactionSwedbankPaySchema,
  TransactionSwedbankPayCCSchema,
  TransactionSwedbankPaySwishSchema,
} from '../schemas/transaction';

export type TransactionSwedbankPay = z.infer<
  typeof TransactionSwedbankPaySchema
>;

export type TransactionSwedbankPayCC = z.infer<
  typeof TransactionSwedbankPayCCSchema
>;

export type TransactionSwedbankPaySwish = z.infer<
  typeof TransactionSwedbankPaySwishSchema
>;

export type Transaction = z.infer<typeof TransactionSchema>;
