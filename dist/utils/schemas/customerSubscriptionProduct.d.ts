import { z } from 'zod';
declare const CustomerSubscriptionProduct: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    continuousSince: z.ZodDate;
    endDate: z.ZodDate;
    productID: z.ZodString;
    firstStart: z.ZodDate;
    recurrenceToken: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        expiryDate: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        type?: string | undefined;
        expiryDate?: string | undefined;
        token?: string | undefined;
    }, {
        name?: string | undefined;
        type?: string | undefined;
        expiryDate?: string | undefined;
        token?: string | undefined;
    }>, "many">>;
    active: z.ZodBoolean;
    status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: string | undefined;
    id?: string | undefined;
    recurrenceToken?: {
        name?: string | undefined;
        type?: string | undefined;
        expiryDate?: string | undefined;
        token?: string | undefined;
    }[] | undefined;
    endDate: Date;
    firstStart: Date;
    continuousSince: Date;
    productID: string;
    active: boolean;
}, {
    status?: string | undefined;
    id?: string | undefined;
    recurrenceToken?: {
        name?: string | undefined;
        type?: string | undefined;
        expiryDate?: string | undefined;
        token?: string | undefined;
    }[] | undefined;
    endDate: Date;
    firstStart: Date;
    continuousSince: Date;
    productID: string;
    active: boolean;
}>;
export default CustomerSubscriptionProduct;
