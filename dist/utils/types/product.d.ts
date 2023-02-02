import { z } from 'zod';
import { BaseProductSchema, OrderProductSchema, ProductSchema, SubscriptionReoccuringTimeSchema, SubscriptionReoccuringValueSchema } from '../schemas/product';
export declare type BaseProduct = z.infer<typeof BaseProductSchema>;
export declare type OrderProduct = z.infer<typeof OrderProductSchema>;
export declare type Product = z.infer<typeof ProductSchema>;
export declare type SubscriptionReoccuringTime = z.infer<typeof SubscriptionReoccuringTimeSchema>;
export declare type SubscriptionReoccuringValue = z.infer<typeof SubscriptionReoccuringValueSchema>;
