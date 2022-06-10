import { z } from 'zod';
declare const CustomerAuditSchema: z.ZodObject<{
    id: z.ZodString;
    user: z.ZodNullable<z.ZodOptional<z.ZodObject<{
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
    }>>>;
    before: z.ZodObject<{
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
    after: z.ZodObject<{
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
    customerId: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodOptional<z.ZodDate>;
    documentPath: z.ZodString;
    type: z.ZodEnum<["UserAction", "CustomerUpdate", "CustomerCreate", "OrderUpdate", "OrderCreate"]>;
}, "strip", z.ZodTypeAny, {
    user?: {
        id?: string | undefined;
        username?: string | undefined;
        role?: string | undefined;
        private?: undefined;
    } | null | undefined;
    updatedAt?: Date | undefined;
    type: "UserAction" | "CustomerUpdate" | "CustomerCreate" | "OrderUpdate" | "OrderCreate";
    id: string;
    customerId: string;
    before: {
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
    };
    after: {
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
    };
    createdAt: Date;
    documentPath: string;
}, {
    user?: {
        id?: string | undefined;
        username?: string | undefined;
        role?: string | undefined;
        private?: undefined;
    } | null | undefined;
    updatedAt?: Date | undefined;
    type: "UserAction" | "CustomerUpdate" | "CustomerCreate" | "OrderUpdate" | "OrderCreate";
    id: string;
    customerId: string;
    before: {
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
    };
    after: {
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
    };
    createdAt: Date;
    documentPath: string;
}>;
export default CustomerAuditSchema;
