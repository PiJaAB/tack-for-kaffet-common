import { z } from 'zod';
import ProductSchema from './product';

const OrderSchema = z.object({
  customerId: z.string(),
  cancelled: z.boolean(),
  products: z.array(ProductSchema),
  productRowIds: z.array(z.union([z.string(), z.number()])),
  createdAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),

  updatedAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),

  shoppingCartId: z
    .string({
      required_error: 'ShoppingCartId is required',
      invalid_type_error: 'shoppingCartId must be a string',
    })
    .min(1, { message: 'Must be at least 1 characters long' }),
});

export default OrderSchema;
