import { z } from 'zod';
declare const TransactionSchema: z.ZodObject<{
    id: z.ZodString;
    customerID: z.ZodString;
    date: z.ZodOptional<z.ZodDate>;
    paymentOrderID: z.ZodString;
    orderID: z.ZodString;
    transactionType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    id: string;
    customerID: string;
    paymentOrderID: string;
    orderID: string;
    transactionType: string;
}, {
    date?: Date | undefined;
    id: string;
    customerID: string;
    paymentOrderID: string;
    orderID: string;
    transactionType: string;
}>;
export default TransactionSchema;
