import { z } from 'zod';

import TransactionSchema, {
  TransactionSwedbankPayCCSchema,
} from '../schemas/transaction';

export type TransactionSwedbankPayCC = z.infer<
  typeof TransactionSwedbankPayCCSchema
>;

export type Transaction = z.infer<typeof TransactionSchema>;
