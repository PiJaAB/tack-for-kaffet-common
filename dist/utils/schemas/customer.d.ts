import { z } from 'zod';
declare const CustomerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    externalID: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    ssn: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    emailSubscription: z.ZodOptional<z.ZodBoolean>;
    about: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    profileImageHash: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    billingAddress: z.ZodOptional<z.ZodObject<{
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
    }>>;
    subscriberAndCanPayInAdvance: z.ZodOptional<z.ZodBoolean>;
    updatedBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    /**
     * Duplicated data from other parts of the database.
     * This is to make it easier to query for customers.
     * This data is not guaranteed to be up to date,
     * and should not be used for anything critical.
     */
    convenientListData_uncertain: z.ZodOptional<z.ZodObject<{
        subscriptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodObject<{
            status: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: string;
        }, {
            status: string;
        }>>>>;
    }, "strip", z.ZodTypeAny, {
        subscriptions?: Record<string, {
            status: string;
        } | undefined> | undefined;
    }, {
        subscriptions?: Record<string, {
            status: string;
        } | undefined> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    id?: string | undefined;
    externalID?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    ssn?: string | undefined;
    phoneNumber?: string | undefined;
    emailSubscription?: boolean | undefined;
    about?: string | undefined;
    website?: string | undefined;
    imageUrl?: string | undefined;
    profileImageHash?: string | undefined;
    address?: {
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
        countryCode: "SE" | "NO" | "FI";
    } | undefined;
    billingAddress?: {
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
        countryCode: "SE" | "NO" | "FI";
    } | undefined;
    subscriberAndCanPayInAdvance?: boolean | undefined;
    updatedBy?: string | undefined;
    createdAt?: Date | null | undefined;
    convenientListData_uncertain?: {
        subscriptions?: Record<string, {
            status: string;
        } | undefined> | undefined;
    } | undefined;
}, {
    email?: string | undefined;
    id?: string | undefined;
    externalID?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    ssn?: string | undefined;
    phoneNumber?: string | undefined;
    emailSubscription?: boolean | undefined;
    about?: string | undefined;
    website?: string | undefined;
    imageUrl?: string | undefined;
    profileImageHash?: string | undefined;
    address?: {
        country?: string | undefined;
        countryCode?: "SE" | "NO" | "FI" | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
    } | undefined;
    billingAddress?: {
        country?: string | undefined;
        countryCode?: "SE" | "NO" | "FI" | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
    } | undefined;
    subscriberAndCanPayInAdvance?: boolean | undefined;
    updatedBy?: string | undefined;
    createdAt?: Date | null | undefined;
    convenientListData_uncertain?: {
        subscriptions?: Record<string, {
            status: string;
        } | undefined> | undefined;
    } | undefined;
}>;
export default CustomerSchema;