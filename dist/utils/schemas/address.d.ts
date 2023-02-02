import { z } from 'zod';
declare const AddressSchema: z.ZodObject<{
    streetAddress: z.ZodString;
    zipCode: z.ZodString;
    city: z.ZodString;
    country: z.ZodDefault<z.ZodString>;
    countryCode: z.ZodDefault<z.ZodEnum<["SE", "NO", "FI"]>>;
}, "strip", z.ZodTypeAny, {
    streetAddress: string;
    zipCode: string;
    city: string;
    country: string;
    countryCode: "SE" | "NO" | "FI";
}, {
    country?: string | undefined;
    countryCode?: "SE" | "NO" | "FI" | undefined;
    streetAddress: string;
    zipCode: string;
    city: string;
}>;
export default AddressSchema;
