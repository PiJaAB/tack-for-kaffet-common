import { z } from 'zod';
import AddressSchema from './address';

const CustomerSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  ssn: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  emailSubscription: z.boolean().optional(),
  address: AddressSchema,
  billingAddress: AddressSchema,
});

export default CustomerSchema;
