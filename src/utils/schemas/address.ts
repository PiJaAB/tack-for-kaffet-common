import { z } from 'zod';

const AddressSchema = z.object({
  streetAddress: z.string(),
  zipCode: z.string(),
  city: z.string(),
  country: z.string().default('Sweden'),
  countryCode: z.enum(['SE', 'NO', 'FI']).default('SE'),
});

export default AddressSchema;
