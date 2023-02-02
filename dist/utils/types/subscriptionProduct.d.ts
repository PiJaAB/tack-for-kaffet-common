import { z } from 'zod';
import SubscriptionProductSchema from '../schemas/subscriptionProduct';
export declare type SubscriptionProduct = z.infer<typeof SubscriptionProductSchema>;
