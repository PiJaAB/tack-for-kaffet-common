import { z } from 'zod';
declare const SavedPaymentMethodSchema: z.ZodObject<{
    paymentMethod: z.ZodString;
    name: z.ZodString;
    expiryDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    paymentMethod: string;
    expiryDate: string;
}, {
    name: string;
    paymentMethod: string;
    expiryDate: string;
}>;
export declare const SavedPaymentMethodSwedbankPayCCSchema: z.ZodObject<z.extendShape<{
    paymentMethod: z.ZodString;
    name: z.ZodString;
    expiryDate: z.ZodString;
}, {
    paymentMethod: z.ZodLiteral<"swedbank-pay-cc">;
    type: z.ZodEnum<["payment", "recurrence", "transactionOnfile", "unscheduled"]>;
    token: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "payment" | "recurrence" | "transactionOnfile" | "unscheduled";
    paymentMethod: "swedbank-pay-cc";
    expiryDate: string;
    token: string;
}, {
    name: string;
    type: "payment" | "recurrence" | "transactionOnfile" | "unscheduled";
    paymentMethod: "swedbank-pay-cc";
    expiryDate: string;
    token: string;
}>;
export default SavedPaymentMethodSchema;
