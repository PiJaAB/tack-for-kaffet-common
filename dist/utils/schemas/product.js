"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductSchema = exports.ProductSchema = exports.BaseProductSchema = exports.BaseGenericProductSchema = exports.BaseSubscriptionSchema = exports.SubscriptionReoccuringTimeSchema = exports.SubscriptionReoccuringValueSchema = void 0;
const zod_1 = require("zod");
exports.SubscriptionReoccuringValueSchema = zod_1.z.enum([
    'every',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
]);
exports.SubscriptionReoccuringTimeSchema = zod_1.z.enum([
    'day',
    'week',
    'month',
    'year',
]);
// type: z.enum(['subscription', 'one-time']),
// subscriptionReoccurring: SubscriptionReoccuringValueSchema,
// subscriptionTime: SubscriptionReoccuringTimeSchema,
const IProductSchema = zod_1.z.object({
    type: zod_1.z.string(),
    weight: zod_1.z.number().optional(),
    title: zod_1.z
        .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
    })
        .min(1, { message: 'Must be at least 1 characters long' }),
    stockStatus: zod_1.z.string().min(1),
    enabledPaymentMethods: zod_1.z.array(zod_1.z.string()).optional(),
    price: zod_1.z.number().nonnegative(),
    taxRate: zod_1.z.number().gte(0).lte(1),
    fileUpload: zod_1.z.string().optional(),
    shortDescription: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    productAllowReviews: zod_1.z.boolean().nullish(),
    productReviewNotification: zod_1.z.boolean().nullish(),
    productNotificationOnPurchase: zod_1.z.boolean().nullish(),
    productNoPushNotifications: zod_1.z.boolean().nullish(),
    productCustomerMessage: zod_1.z.string().nullish(),
    quantity: zod_1.z.number().optional(),
    specialOffer: zod_1.z
        .discriminatedUnion('type', [
        zod_1.z.object({
            type: zod_1.z.literal('trial'),
            trialPeriod: zod_1.z
                .object({
                value: zod_1.z.number(),
                unit: zod_1.z.enum(['day', 'week', 'month', 'year']),
            })
                .nullish(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal('firstSubscriberDiscount'),
        }),
    ])
        .nullish(),
});
exports.BaseSubscriptionSchema = IProductSchema.extend({
    type: zod_1.z.literal('subscription'),
    subscriptionReoccurring: exports.SubscriptionReoccuringValueSchema,
    subscriptionTime: exports.SubscriptionReoccuringTimeSchema,
});
exports.BaseGenericProductSchema = IProductSchema.extend({
    type: zod_1.z.literal('generic'),
});
exports.BaseProductSchema = zod_1.z.discriminatedUnion('type', [
    exports.BaseGenericProductSchema,
    exports.BaseSubscriptionSchema,
]);
const ProductExtension = {
    id: zod_1.z.string().optional(),
    createdAt: zod_1.z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date)
            return new Date(arg);
        return arg;
    }, zod_1.z.date()),
    updatedAt: zod_1.z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date)
            return new Date(arg);
        return arg;
    }, zod_1.z.date()),
};
exports.ProductSchema = zod_1.z.discriminatedUnion('type', [
    exports.BaseGenericProductSchema.extend(ProductExtension),
    exports.BaseSubscriptionSchema.extend(ProductExtension),
]);
const OrderProductExtension = {
    id: zod_1.z.string(),
    variant: zod_1.z.string().nullish(),
    ordinaryPrice: zod_1.z.number(),
    quantity: zod_1.z.number().optional(),
};
exports.OrderProductSchema = zod_1.z.discriminatedUnion('type', [
    exports.BaseGenericProductSchema.extend(OrderProductExtension),
    exports.BaseSubscriptionSchema.extend({
        ...OrderProductExtension,
        trialPeriod: zod_1.z
            .object({
            value: zod_1.z.number(),
            unit: zod_1.z.enum(['day', 'week', 'month', 'year']),
        })
            .nullish(),
    }),
]);
