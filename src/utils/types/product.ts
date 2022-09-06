import { z } from 'zod';

import {
  BaseProductSchema,
  OrderProductSchema,
  ProductSchema,
} from '../schemas/product';

export type BaseProduct = z.infer<typeof BaseProductSchema>;
export type OrderProduct = z.infer<typeof OrderProductSchema>;
export type Product = z.infer<typeof ProductSchema>;
