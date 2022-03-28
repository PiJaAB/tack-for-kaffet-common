import { z } from 'zod';

import { OrderSchema } from '../schemas/order';

export type Order = z.infer<typeof OrderSchema>;
