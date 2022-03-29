import { z } from 'zod';

const AddressSchema = z.object({
  streetAddress: z.string(),
  zipCode: z.string(),
  city: z.string(),
  country: z.string(),
  countryCode: z.string().optional(),
});

export default AddressSchema;
