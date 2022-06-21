import { z } from 'zod';

const AddressSchema = z.object({
  streetAddress: z.string(),
  zipCode: z.string(),
  city: z.string(),
  country: z.string(),
  countryCode: z.union([
    z.literal('SE'),
    z.literal('NO'),
    z.literal('FI')
  ]).nullish(),
});

export default AddressSchema;
