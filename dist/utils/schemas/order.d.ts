import { z } from 'zod';
declare const OrderSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    products: z.ZodArray<z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<z.extendShape<z.extendShape<{
        type: z.ZodString;
        weight: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        stockStatus: z.ZodString;
        enabledPaymentMethods: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        price: z.ZodNumber;
        taxRate: z.ZodNumber;
        fileUpload: z.ZodOptional<z.ZodString>;
        shortDescription: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        productAllowReviews: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productReviewNotification: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productNotificationOnPurchase: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productNoPushNotifications: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productCustomerMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        quantity: z.ZodOptional<z.ZodNumber>;
        specialOffer: z.ZodNullable<z.ZodOptional<z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<{
            type: z.ZodLiteral<"trial">;
            trialPeriod: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                unit: z.ZodEnum<["day", "week", "month", "year"]>;
            }, "strip", z.ZodTypeAny, {
                unit: "day" | "month" | "year" | "week";
                value: number;
            }, {
                unit: "day" | "month" | "year" | "week";
                value: number;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        }, {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        }> | z.ZodObject<{
            type: z.ZodLiteral<"firstSubscriberDiscount">;
        }, "strip", z.ZodTypeAny, {
            type: "firstSubscriberDiscount";
        }, {
            type: "firstSubscriberDiscount";
        }>>>>;
    }, {
        type: z.ZodLiteral<"generic">;
    }>, {
        id: z.ZodString;
        variant: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        ordinaryPrice: z.ZodNumber;
        quantity: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "generic";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        ordinaryPrice: number;
    }, {
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "generic";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        ordinaryPrice: number;
    }> | z.ZodObject<z.extendShape<z.extendShape<{
        type: z.ZodString;
        weight: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        stockStatus: z.ZodString;
        enabledPaymentMethods: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        price: z.ZodNumber;
        taxRate: z.ZodNumber;
        fileUpload: z.ZodOptional<z.ZodString>;
        shortDescription: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        productAllowReviews: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productReviewNotification: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productNotificationOnPurchase: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productNoPushNotifications: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        productCustomerMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        quantity: z.ZodOptional<z.ZodNumber>;
        specialOffer: z.ZodNullable<z.ZodOptional<z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<{
            type: z.ZodLiteral<"trial">;
            trialPeriod: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                unit: z.ZodEnum<["day", "week", "month", "year"]>;
            }, "strip", z.ZodTypeAny, {
                unit: "day" | "month" | "year" | "week";
                value: number;
            }, {
                unit: "day" | "month" | "year" | "week";
                value: number;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        }, {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        }> | z.ZodObject<{
            type: z.ZodLiteral<"firstSubscriberDiscount">;
        }, "strip", z.ZodTypeAny, {
            type: "firstSubscriberDiscount";
        }, {
            type: "firstSubscriberDiscount";
        }>>>>;
    }, {
        type: z.ZodLiteral<"subscription">;
        subscriptionReoccurring: z.ZodEnum<["every", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]>;
        subscriptionTime: z.ZodEnum<["day", "week", "month", "year"]>;
    }>, {
        trialPeriod: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            unit: z.ZodEnum<["day", "week", "month", "year"]>;
        }, "strip", z.ZodTypeAny, {
            unit: "day" | "month" | "year" | "week";
            value: number;
        }, {
            unit: "day" | "month" | "year" | "week";
            value: number;
        }>>>;
        id: z.ZodString;
        variant: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        ordinaryPrice: z.ZodNumber;
        quantity: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        trialPeriod?: {
            unit: "day" | "month" | "year" | "week";
            value: number;
        } | null | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "subscription";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
        subscriptionTime: "day" | "month" | "year" | "week";
        ordinaryPrice: number;
    }, {
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        trialPeriod?: {
            unit: "day" | "month" | "year" | "week";
            value: number;
        } | null | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "subscription";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
        subscriptionTime: "day" | "month" | "year" | "week";
        ordinaryPrice: number;
    }>>, "many">;
    customer: z.ZodOptional<z.ZodObject<z.extendShape<{
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
    }, {
        id: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        email?: string | undefined;
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
        id: string;
    }, {
        email?: string | undefined;
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
        id: string;
    }>>;
    orderStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
    orderPaidBy: z.ZodOptional<z.ZodString>;
    orderNotes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        orderId: z.ZodString;
        content: z.ZodString;
        username: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        orderId: string;
        content: string;
        username: string;
    }, {
        id: string;
        orderId: string;
        content: string;
        username: string;
    }>, "many">>;
    createdAt: z.ZodEffects<z.ZodDate, Date, Date>;
    updatedAt: z.ZodEffects<z.ZodDate, Date, Date>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    customer?: {
        email?: string | undefined;
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
        id: string;
    } | undefined;
    orderPaidBy?: string | undefined;
    orderNotes?: {
        id: string;
        orderId: string;
        content: string;
        username: string;
    }[] | undefined;
    createdAt: Date;
    updatedAt: Date;
    products: ({
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "generic";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        ordinaryPrice: number;
    } | {
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        trialPeriod?: {
            unit: "day" | "month" | "year" | "week";
            value: number;
        } | null | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "subscription";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
        subscriptionTime: "day" | "month" | "year" | "week";
        ordinaryPrice: number;
    })[];
    orderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
}, {
    id?: string | undefined;
    customer?: {
        email?: string | undefined;
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
        id: string;
    } | undefined;
    orderPaidBy?: string | undefined;
    orderNotes?: {
        id: string;
        orderId: string;
        content: string;
        username: string;
    }[] | undefined;
    createdAt: Date;
    updatedAt: Date;
    products: ({
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "generic";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        ordinaryPrice: number;
    } | {
        imageUrl?: string | undefined;
        weight?: number | undefined;
        enabledPaymentMethods?: string[] | undefined;
        fileUpload?: string | undefined;
        shortDescription?: string | undefined;
        category?: string | undefined;
        productAllowReviews?: boolean | null | undefined;
        productReviewNotification?: boolean | null | undefined;
        productNotificationOnPurchase?: boolean | null | undefined;
        productNoPushNotifications?: boolean | null | undefined;
        productCustomerMessage?: string | null | undefined;
        quantity?: number | undefined;
        trialPeriod?: {
            unit: "day" | "month" | "year" | "week";
            value: number;
        } | null | undefined;
        specialOffer?: {
            trialPeriod?: {
                unit: "day" | "month" | "year" | "week";
                value: number;
            } | null | undefined;
            type: "trial";
        } | {
            type: "firstSubscriberDiscount";
        } | null | undefined;
        variant?: string | null | undefined;
        type: "subscription";
        id: string;
        title: string;
        stockStatus: string;
        price: number;
        taxRate: number;
        subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
        subscriptionTime: "day" | "month" | "year" | "week";
        ordinaryPrice: number;
    })[];
    orderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
}>;
export default OrderSchema;
