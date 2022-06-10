import { z } from 'zod';
import OrderSchema from '../schemas/order';
export declare type Order = z.infer<typeof OrderSchema>;
