import { z } from 'zod';
declare const ActionDefinitionSchema: z.ZodObject<{
    access: z.ZodArray<z.ZodEnum<["admin", "user"]>, "many">;
    actionName: z.ZodString;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    access: ("admin" | "user")[];
    actionName: string;
}, {
    params?: any;
    access: ("admin" | "user")[];
    actionName: string;
}>;
export declare const PerformedActionSchema: z.ZodObject<{
    actionName: z.ZodString;
    paymentMethod: z.ZodString;
    params: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    params?: any;
    actionName: string;
    paymentMethod: string;
}, {
    params?: any;
    actionName: string;
    paymentMethod: string;
}>;
export default ActionDefinitionSchema;
