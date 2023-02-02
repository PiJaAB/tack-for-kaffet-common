import { z } from 'zod';
import TransactionSchema, { TransactionSwedbankPaySchema, TransactionSwedbankPayCCSchema, TransactionSwedbankPaySwishSchema } from '../schemas/transaction';
export declare type TransactionSwedbankPay = z.infer<typeof TransactionSwedbankPaySchema>;
export declare type TransactionSwedbankPayCC = z.infer<typeof TransactionSwedbankPayCCSchema>;
export declare type TransactionSwedbankPaySwish = z.infer<typeof TransactionSwedbankPaySwishSchema>;
export declare type Transaction = z.infer<typeof TransactionSchema>;
