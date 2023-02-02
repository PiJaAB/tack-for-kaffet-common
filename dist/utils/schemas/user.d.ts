import { z } from 'zod';
export declare const PublicUserSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    private: z.ZodNever;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    role?: string | undefined;
    private: never;
}, {
    username?: string | undefined;
    role?: string | undefined;
    private: never;
}>;
export declare const PrivateUserSchema: z.ZodObject<z.extendShape<{
    username: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    private: z.ZodNever;
}, {
    private: z.ZodObject<{
        email: z.ZodOptional<z.ZodString>;
        emailVerified: z.ZodBoolean;
        phoneNumber: z.ZodOptional<z.ZodString>;
        accessFlags: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        tempPassword: z.ZodOptional<z.ZodBoolean>;
        disabled: z.ZodBoolean;
        deviceTokens: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        subscribedTopics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        notificationKey: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        email?: string | undefined;
        phoneNumber?: string | undefined;
        tempPassword?: boolean | undefined;
        deviceTokens?: string[] | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        emailVerified: boolean;
        accessFlags: Record<string, boolean> | null;
        disabled: boolean;
    }, {
        email?: string | undefined;
        phoneNumber?: string | undefined;
        tempPassword?: boolean | undefined;
        deviceTokens?: string[] | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        emailVerified: boolean;
        accessFlags: Record<string, boolean> | null;
        disabled: boolean;
    }>;
}>, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    role?: string | undefined;
    private: {
        email?: string | undefined;
        phoneNumber?: string | undefined;
        tempPassword?: boolean | undefined;
        deviceTokens?: string[] | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        emailVerified: boolean;
        accessFlags: Record<string, boolean> | null;
        disabled: boolean;
    };
}, {
    username?: string | undefined;
    role?: string | undefined;
    private: {
        email?: string | undefined;
        phoneNumber?: string | undefined;
        tempPassword?: boolean | undefined;
        deviceTokens?: string[] | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        emailVerified: boolean;
        accessFlags: Record<string, boolean> | null;
        disabled: boolean;
    };
}>;
