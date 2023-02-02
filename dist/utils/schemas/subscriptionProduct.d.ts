import { z } from 'zod';
export declare const subscriptionStatuses: readonly ["Active", "Cancelled", "On-Hold", "Expired", "Pending-Cancel"];
declare const SubscriptionProduct: z.ZodObject<{
    variant: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    status: z.ZodEnum<["Active", "Cancelled", "On-Hold", "Expired", "Pending-Cancel"]>;
    continuouslySince: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    endDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    firstStart: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    trialEndDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    orderRefs: z.ZodArray<z.ZodString, "many">;
    nextRenewalAttempt: z.ZodNullable<z.ZodDate>;
    renewalAttempts: z.ZodNumber;
    savedPaymentMethod: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        docRef: z.ZodString;
        date: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        date: Date;
        docRef: string;
    }, {
        date: Date;
        docRef: string;
    }>>>;
    sentEmails: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodDate;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: Date;
        type: string;
    }, {
        date: Date;
        type: string;
    }>, "many">>>;
    failedAttempts: z.ZodNumber;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    createdAt?: Date | null | undefined;
    variant?: string | null | undefined;
    endDate?: Date | null | undefined;
    firstStart?: Date | null | undefined;
    trialEndDate?: Date | null | undefined;
    savedPaymentMethod?: {
        date: Date;
        docRef: string;
    } | null | undefined;
    sentEmails?: {
        date: Date;
        type: string;
    }[] | null | undefined;
    status: "Cancelled" | "Active" | "On-Hold" | "Expired" | "Pending-Cancel";
    updatedAt: Date;
    continuouslySince: Date | null;
    orderRefs: string[];
    nextRenewalAttempt: Date | null;
    renewalAttempts: number;
    failedAttempts: number;
}, {
    createdAt?: Date | null | undefined;
    variant?: string | null | undefined;
    endDate?: Date | null | undefined;
    firstStart?: Date | null | undefined;
    trialEndDate?: Date | null | undefined;
    savedPaymentMethod?: {
        date: Date;
        docRef: string;
    } | null | undefined;
    sentEmails?: {
        date: Date;
        type: string;
    }[] | null | undefined;
    status: "Cancelled" | "Active" | "On-Hold" | "Expired" | "Pending-Cancel";
    updatedAt: Date;
    continuouslySince: Date | null;
    orderRefs: string[];
    nextRenewalAttempt: Date | null;
    renewalAttempts: number;
    failedAttempts: number;
}>;
export default SubscriptionProduct;
