import { z } from 'zod';
export declare const SubscriptionReoccuringValueSchema: z.ZodEnum<["every", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]>;
export declare const SubscriptionReoccuringTimeSchema: z.ZodEnum<["day", "week", "month", "year"]>;
export declare const BaseSubscriptionSchema: z.ZodObject<z.extendShape<{
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
    type: "subscription";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
    subscriptionTime: "day" | "month" | "year" | "week";
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
    type: "subscription";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
    subscriptionTime: "day" | "month" | "year" | "week";
}>;
export declare const BaseGenericProductSchema: z.ZodObject<z.extendShape<{
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
    type: "generic";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
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
    type: "generic";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
}>;
export declare const BaseProductSchema: z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<z.extendShape<{
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
    type: "subscription";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
    subscriptionTime: "day" | "month" | "year" | "week";
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
    type: "subscription";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
    subscriptionTime: "day" | "month" | "year" | "week";
}> | z.ZodObject<z.extendShape<{
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
    type: "generic";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
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
    type: "generic";
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
}>>;
export declare const ProductSchema: z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<z.extendShape<z.extendShape<{
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
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodEffects<z.ZodDate, Date, Date>;
    updatedAt: z.ZodEffects<z.ZodDate, Date, Date>;
}>, "strip", z.ZodTypeAny, {
    id?: string | undefined;
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
    type: "generic";
    createdAt: Date;
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    updatedAt: Date;
}, {
    id?: string | undefined;
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
    type: "generic";
    createdAt: Date;
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    updatedAt: Date;
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
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodEffects<z.ZodDate, Date, Date>;
    updatedAt: z.ZodEffects<z.ZodDate, Date, Date>;
}>, "strip", z.ZodTypeAny, {
    id?: string | undefined;
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
    type: "subscription";
    createdAt: Date;
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
    subscriptionTime: "day" | "month" | "year" | "week";
    updatedAt: Date;
}, {
    id?: string | undefined;
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
    type: "subscription";
    createdAt: Date;
    title: string;
    stockStatus: string;
    price: number;
    taxRate: number;
    subscriptionReoccurring: "second" | "every" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth" | "ninth" | "tenth" | "eleventh" | "twelfth";
    subscriptionTime: "day" | "month" | "year" | "week";
    updatedAt: Date;
}>>;
export declare const OrderProductSchema: z.ZodDiscriminatedUnion<"type", z.Primitive, z.ZodObject<z.extendShape<z.extendShape<{
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
}>>;
