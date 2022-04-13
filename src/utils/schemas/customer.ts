import { z } from 'zod';
import AddressSchema from './address';

const CustomerSchema = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  ssn: z.string().optional(),
  phoneNumber: z.string(),
  email: z.string().optional(),
  emailSubscription: z.string().optional(),
  address: AddressSchema.optional(),
  billingAddress: AddressSchema.optional(),
});

export default CustomerSchema;
