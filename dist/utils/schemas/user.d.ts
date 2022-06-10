import { z } from 'zod';
declare const UserSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
    private: z.ZodOptional<z.ZodNever>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    username?: string | undefined;
    role?: string | undefined;
    private?: undefined;
}, {
    id?: string | undefined;
    username?: string | undefined;
    role?: string | undefined;
    private?: undefined;
}>;
export default UserSchema;
