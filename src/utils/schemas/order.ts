import { z } from 'zod';
import ProductSchema from './product';
import CustomerSchema from './customer';
import StatusSchema from './orderStatus';

const OrderSchema = z.object({
  id: z.string().optional(),
  products: z.array(ProductSchema),
  customer: CustomerSchema.optional(),

  paymentOrderID: z.string().optional(),
  orderStatus: StatusSchema.optional(),
  paymentStatus: StatusSchema.optional(), // optional being temporary(!?)

  orderNotes: z
    .array(
      z.object({
        id: z.string(),
        orderId: z.string(),
        content: z.string(),
        username: z.string(),
      }),
    )
    .optional(),

  // shoppingCartId: z
  //   .string({
  //     required_error: 'ShoppingCartId is required',
  //     invalid_type_error: 'shoppingCartId must be a string',
  //   })
  //   .min(1, { message: 'Must be at least 1 characters long' }),

  createdAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),

  updatedAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),
});

export default OrderSchema;
