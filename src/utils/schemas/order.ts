import { z } from 'zod';
import ProductSchema from './product';
import CustomerSchema from './customer';
import TransactionSchema from './transaction';

const OrderSchema = z.object({
  cancelled: z.boolean(),
  products: z.array(ProductSchema),
  productRowIds: z.array(z.union([z.string(), z.number()])).optional(),

  customerId: z.string().optional(),
  customerRef: z.string().optional(),
  customer: CustomerSchema.optional(),

  transactions: z.array(TransactionSchema).optional(),

  // shoppingCartId: z
  //   .string({
  //     required_error: 'ShoppingCartId is required',
  //     invalid_type_error: 'shoppingCartId must be a string',
  //   })
  //   .min(1, { message: 'Must be at least 1 characters long' }),

  // createdAt: z.preprocess((arg) => {
  //   if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
  //   return arg;
  // }, z.date()),

  // updatedAt: z.preprocess((arg) => {
  //   if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
  //   return arg;
  // }, z.date()),
});

export default OrderSchema;
