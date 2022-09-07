import { z } from 'zod';

import {
  BaseProductSchema,
  OrderProductSchema,
  ProductSchema,
  SubscriptionReoccuringTimeSchema,
  SubscriptionReoccuringValueSchema,
} from '../schemas/product';

export type BaseProduct = z.infer<typeof BaseProductSchema>;
export type OrderProduct = z.infer<typeof OrderProductSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type SubscriptionReoccuringTime = z.infer<
  typeof SubscriptionReoccuringTimeSchema
>;
export type SubscriptionReoccuringValue = z.infer<
  typeof SubscriptionReoccuringValueSchema
>;
