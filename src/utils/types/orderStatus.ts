import { z } from 'zod';

import OrderStatusSchema from '../schemas/orderStatus';

export type OrderStatus = z.infer<typeof OrderStatusSchema>;
