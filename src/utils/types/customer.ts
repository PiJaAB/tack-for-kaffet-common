import { z } from 'zod';

import CustomerSchema from '../schemas/customer';

export type Customer = z.infer<typeof CustomerSchema>;
