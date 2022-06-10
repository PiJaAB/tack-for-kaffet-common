"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ProductSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    activeSubscription: zod_1.z.boolean().nullish(),
    title: zod_1.z
        .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
    })
        .min(1, { message: 'Must be at least 1 characters long' }),
    stockStatus: zod_1.z.string().min(1),
    price: zod_1.z.number().nonnegative(),
    type: zod_1.z.union([zod_1.z.literal('subscription'), zod_1.z.literal('one-time')]),
    subscriptionReoccurring: zod_1.z.string().nullable(),
    subscriptionTime: zod_1.z.string().nullable(),
    fileUpload: zod_1.z.string().optional(),
    shortDescription: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    productAllowReviews: zod_1.z.boolean().nullable(),
    productReviewNotification: zod_1.z.boolean().nullable(),
    productNotificationOnPurchase: zod_1.z.boolean().nullable(),
    productNoPushNotifications: zod_1.z.boolean().nullable(),
    productCustomerMessage: zod_1.z.string().nullish(),
    quantity: zod_1.z.number().optional(),
    // createdAt: z.preprocess((arg) => {
    //   if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    //   return arg;
    // }, z.date()),
    // updatedAt: z.preprocess((arg) => {
    //   if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    //   return arg;
    // }, z.date()),
    // currency: z.string(),
    // sold: z.number(),
    // balance: z.number(),
    // category: z.string(),
    // tags: z.array(z.string()), // === z.string().array()
    // description: z.string().optional(),
    // imageUrl: z.string().optional(),
    // location: z.string(),
    // lastOrdered: z.date(), // accepts a date, not a string date
    // createdAt: z.date(),
    // updatedAt: z.date(),
    // vatRate: z.number(),
    // unitsSoldByPricePoint: z.array(z.object({
    //   price: z.number(),
    //   units: z.number(),
    //   orders: z.number(),
    //   firstDate: z.date(),
    //   lastDate: z.date(),
    // })),
    // stockStatus: z.array(z.string()),
});
exports.default = ProductSchema;
