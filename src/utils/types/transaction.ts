import { z } from 'zod';

import TransactionSchema from '../schemas/transaction';

export type Transaction = z.infer<typeof TransactionSchema>;

