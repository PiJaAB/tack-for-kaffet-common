import { z } from 'zod';
import ProductSchema from './product';
import CustomerSchema from './customer';
import TransactionSchema from './transaction';

const StatusSchema = z.union([
  z.literal('pending'),               // Inväntar betalning
  z.literal('manual-processing'),     // Manuell behandling
  z.literal('processing'),            // Behandlas
  z.literal('on-hold'),               // Pausad
  z.literal('completed'),             // Färdigbehandlad
  z.literal('cancelled'),             // Avbruten
  z.literal('refunded'),              // Återbetald
  z.literal('failed'),                // Misslyckad
  z.literal('unknown'),               // Okänt fel
]);

const OrderSchema = z.object({
  id: z.string().optional(),
  cancelled: z.boolean(),
  products: z.array(ProductSchema),
  productRowIds: z.array(z.union([z.string(), z.number()])).optional(),

  customerId: z.string().optional(),
  customerRef: z.string().optional(),
  customer: CustomerSchema.optional(),

  transactions: z.array(TransactionSchema).optional(),

  orderStatus: StatusSchema,
  paymentStatus: StatusSchema.optional(),   // optional being temporary(!)

  orderNotes: z.array(z.object({
    id: z.string(),
    orderId: z.string(),
    content: z.string(),
    username: z.string(),
  })).optional(),













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
