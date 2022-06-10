import { z } from 'zod';
import TransactionSchema from '../schemas/transaction';
export declare type Transaction = z.infer<typeof TransactionSchema>;
