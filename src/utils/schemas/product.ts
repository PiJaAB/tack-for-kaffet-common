import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string().optional(),
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1, { message: 'Must be at least 1 characters long' }),
  stockStatus: z.string().min(1),
  price: z.number().nonnegative(), // >= 0
  type: z.union([z.literal('subscription'), z.literal('one-time')]),
  subscriptionReoccurring: z.string().nullable(), // string | null
  subscriptionTime: z.string().nullable(), // string | null
  fileUpload: z.string().optional(),
  shortDescription: z.string().optional(), // string | undefined
  imageUrl: z.string().optional(),
  category: z.string().optional(),

  productAllowReviews: z.boolean().nullable(),
  productReviewNotification: z.boolean().nullable(),
  productNotificationOnPurchase: z.boolean().nullable(),
  productNoPushNotifications: z.boolean().nullable(), // boolean | null
  productCustomerMessage: z.string().nullish(), // string | null | undefined

  quantity: z.number().optional(),












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

export default ProductSchema;
