import { z } from 'zod';
import AddressSchema from './address';

const CustomerSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  ssn: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  emailSubscription: z.boolean().optional(),
  about: z.string().optional(),
  website: z.string().optional(),
  imageUrl: z.string().optional(),
  profileImageHash: z.string().optional(),
  address: AddressSchema.optional(),
  billingAddress: AddressSchema.optional(),

  legacyId: z.string().optional(),
  updatedBy: z.string().optional(),
});

export default CustomerSchema;
