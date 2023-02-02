import { z } from 'zod';
declare const OrderNoteSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    orderId: z.ZodString;
    content: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    orderId: string;
    content: string;
    username: string;
}, {
    id?: string | undefined;
    orderId: string;
    content: string;
    username: string;
}>;
export default OrderNoteSchema;
