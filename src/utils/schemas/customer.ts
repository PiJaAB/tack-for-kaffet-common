import { z } from 'zod';
import AddressSchema from './address';

const CustomerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  ssn: z.number(),
  phoneNumber: z.string(),
  email: z.string(),
  emailSubscription: z.boolean(),
  address: AddressSchema,
  billingAddress: AddressSchema,
});

export default CustomerSchema;
