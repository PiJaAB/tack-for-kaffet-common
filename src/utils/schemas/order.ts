import { z } from 'zod';
import ProductSchema from './product';
import CustomerSchema from './customer';
import StatusSchema from './orderStatus';

const OrderSchema = z.object({
  id: z.string().optional(),
  products: z.array(ProductSchema),
  customer: CustomerSchema.optional(),

  orderStatus: StatusSchema,
  orderPaidBy: z.string().optional(),

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
