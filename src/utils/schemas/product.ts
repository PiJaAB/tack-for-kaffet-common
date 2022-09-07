import { z } from 'zod';

export const SubscriptionReoccuringValueSchema = z.enum([
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

export const SubscriptionReoccuringTimeSchema = z.enum([
  'day',
  'week',
  'month',
  'year',
]);

// type: z.union([z.literal('subscription'), z.literal('one-time')]),
// subscriptionReoccurring: SubscriptionReoccuringValueSchema,
// subscriptionTime: SubscriptionReoccuringTimeSchema,

const IProductSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1, { message: 'Must be at least 1 characters long' }),
  stockStatus: z.string().min(1),
  price: z.number().nonnegative(), // 0 <= x
  taxRate: z.number().gte(0).lte(1), // 0 <= x <= 1
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
    .union([
      z.object({
        type: z.literal('trial'),
        trialPeriod: z
          .object({
            value: z.number(),
            unit: z.union([
              z.literal('day'),
              z.literal('week'),
              z.literal('month'),
              z.literal('year'),
            ]),
          })
          .nullish(),
      }),
      z.object({
        type: z.literal('firstSubscriberDiscount'),
      }),
    ])
    .nullish()
    .optional(),
});

export const BaseSubscriptionSchema = IProductSchema.extend({
  type: z.literal('subscription'),
  subscriptionReoccurring: SubscriptionReoccuringValueSchema,
  subscriptionTime: SubscriptionReoccuringTimeSchema,
});

export const BaseGenericProductSchema = IProductSchema.extend({
  type: z.literal('generic'),
});

export const BaseProductSchema = z.union([
  BaseGenericProductSchema,
  BaseSubscriptionSchema,
]);

const ProductExtension = {
  id: z.string().optional(),
  createdAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),
  updatedAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),
};

export const ProductSchema = z.union([
  BaseGenericProductSchema.extend({
    ...ProductExtension,
    overrides: BaseGenericProductSchema.partial().optional().nullable(),
  }),
  BaseSubscriptionSchema.extend({
    ...ProductExtension,
    overrides: BaseSubscriptionSchema.partial().optional().nullable(),
  }),
]);

const OrderProductExtension = {
  id: z.string(),
  ordinaryPrice: z.number(),
  quantity: z.number().optional(),
};

export const OrderProductSchema = z.union([
  BaseGenericProductSchema.extend(OrderProductExtension),
  BaseSubscriptionSchema.extend({
    ...OrderProductExtension,
    trialPeriod: z
      .object({
        value: z.number(),
        unit: z.union([
          z.literal('day'),
          z.literal('week'),
          z.literal('month'),
          z.literal('year'),
        ]),
      })
      .nullish(),
  }),
]);
