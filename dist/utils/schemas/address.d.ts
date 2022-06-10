import { z } from 'zod';
declare const AddressSchema: z.ZodObject<{
    streetAddress: z.ZodString;
    zipCode: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    countryCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    countryCode?: string | undefined;
    streetAddress: string;
    zipCode: string;
    city: string;
    country: string;
}, {
    countryCode?: string | undefined;
    streetAddress: string;
    zipCode: string;
    city: string;
    country: string;
}>;
export default AddressSchema;
