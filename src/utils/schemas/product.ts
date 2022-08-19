import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string().optional(),
  activeSubscription: z.boolean().nullish(),
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1, { message: 'Must be at least 1 characters long' }),
  stockStatus: z.string().min(1),
  price: z.number().nonnegative(), // >= 0
  type: z.union([z.literal('subscription'), z.literal('one-time')]),
  subscriptionReoccurring: z
    .union([
      z.literal('every'),
      z.literal('second'),
      z.literal('third'),
      z.literal('fourth'),
      z.literal('fifth'),
      z.literal('sixth'),
    ])
    .nullable(),
  subscriptionTime: z
    .union([
      z.literal('day'),
      z.literal('week'),
      z.literal('month'),
      z.literal('year'),
    ])
    .nullable(),
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

  specialOffer: z
    .object({
      type: z
        .union([z.literal('trial'), z.literal('firstSubscriberDiscount')])
        .nullish(),
    })
    .nullish(),
  trialEndDate: z
    .preprocess((arg) => {
      if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
      return arg;
    }, z.date())
    .nullish(),

  overrides: z
    .object({
      trialEndDate: z.date().optional(),
      price: z.number().optional(),
    })
    .nullish(),

  // TODO: replace with `overrides`
  trialPeriod: z
    .object({
      hasTrial: z.boolean(),
      period: z.number(),
    })
    .nullish(),

  createdAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),

  updatedAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),
});

export default ProductSchema;
