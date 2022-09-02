import { z } from 'zod';
import AddressSchema from './address';

const OrderRequestSchema = z.object({
  customerID: z.string(),
  billingAddress: AddressSchema,
  paymentMethod: z.string(),

  productRows: z.array(
    z.object({
      productID: z.string(),
      quantity: z.number().int(),
    }),
  ),
});

export default OrderRequestSchema;
