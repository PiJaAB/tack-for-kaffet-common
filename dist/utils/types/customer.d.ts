import { z } from 'zod';
import CustomerSchema from '../schemas/customer';
export declare type Customer = z.infer<typeof CustomerSchema>;
