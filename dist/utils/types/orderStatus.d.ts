import { z } from 'zod';
import OrderStatusSchema from '../schemas/orderStatus';
export declare type OrderStatus = z.infer<typeof OrderStatusSchema>;
