import { z } from 'zod';
declare const CustomerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
        country: z.ZodString;
        countryCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    }, {
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    }>>;
    billingAddress: z.ZodOptional<z.ZodObject<{
        streetAddress: z.ZodString;
        zipCode: z.ZodString;
        city: z.ZodString;
        country: z.ZodString;
        countryCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    }, {
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    }>>;
    legacyId: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    id?: string | undefined;
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
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    } | undefined;
    billingAddress?: {
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    } | undefined;
    legacyId?: string | undefined;
    updatedBy?: string | undefined;
}, {
    email?: string | undefined;
    id?: string | undefined;
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
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    } | undefined;
    billingAddress?: {
        countryCode?: string | undefined;
        streetAddress: string;
        zipCode: string;
        city: string;
        country: string;
    } | undefined;
    legacyId?: string | undefined;
    updatedBy?: string | undefined;
}>;
export default CustomerSchema;
