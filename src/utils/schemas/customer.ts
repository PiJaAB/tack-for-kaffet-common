import { z } from 'zod';
import AddressSchema from './address';

const CustomerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  ssn: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  emailSubscription: z.boolean(),
  address: AddressSchema,
});

export default CustomerSchema;
