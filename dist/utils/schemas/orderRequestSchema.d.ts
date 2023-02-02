import { z } from 'zod';
declare const OrderRequestSchema: z.ZodObject<{
    customerID: z.ZodString;
    billingAddress: z.ZodObject<{
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
    paymentMethod: z.ZodString;
    productRows: z.ZodArray<z.ZodObject<{
        productID: z.ZodString;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        productID: string;
    }, {
        quantity: number;
        productID: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    billingAddress: {
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
        countryCode: "SE" | "NO" | "FI";
    };
    paymentMethod: string;
    customerID: string;
    productRows: {
        quantity: number;
        productID: string;
    }[];
}, {
    billingAddress: {
        country?: string | undefined;
        countryCode?: "SE" | "NO" | "FI" | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
    };
    paymentMethod: string;
    customerID: string;
    productRows: {
        quantity: number;
        productID: string;
    }[];
}>;
export default OrderRequestSchema;
