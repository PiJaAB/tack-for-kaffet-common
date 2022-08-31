import { z } from 'zod';
import ProductSchema from './product';
import CustomerSchema from './customer';
import StatusSchema from './orderStatus';

const OrderSchema = z.object({
  id: z.string().optional(),
  products: z.array(ProductSchema),
  customer: CustomerSchema.optional(),

  orderStatus: StatusSchema.optional(),
  paymentStatus: StatusSchema.optional(), // optional being temporary(!?)

  orderNotes: z
    .array(
      z.object({
        id: z.string(),
        orderId: z.string(),
        content: z.string(),
        username: z.string(),
      }),
    )
    .optional(),

  createdAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),

  updatedAt: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    return arg;
  }, z.date()),
});

export default OrderSchema;

/**
 *
 * tfk-React=frontend typings for Order
 *
 * export type OrderStatuses =
 *   | 'pending'
 *   | 'processing'
 *   | 'manual-processing'
 *   | 'on-hold'
 *   | 'completed'
 *   | 'cancelled'
 *   | 'refunded'
 *   | 'failed';
 *
 * interface HasPaymentMethod {
 *   paymentMethod: {
 *     id: string;
 *     title: string;
 *   } | null;
 * }
 *
 * export interface OrderSchema extends HasPaymentMethod {
 *   id: number;
 *   total: string;
 *   completed: number | null;
 *   paid: number | null;
 *   status: OrderStatuses;
 *   humanStatus: string;
 * }
 *
 * {
    "type": "order",
    "data": {
      "id": 314803,
      "total": "39",
      "completed": null,
      "paid": null,
      "payment_method": {
        "id": "payex_psp_cc",
        "title": "Credit Card"
      },
      "status": "pending"
    },
    "subscription": {
        "id": 314804,
        "dates": {
            "start": "2022-08-31T13:57:47+0000",
            "next_payment": null,
            "end": "2022-08-31T13:58:08+0000",
            "trial_end": null
        },
        "status": "cancelled",
        "price": "39",
        "period": "month",
        "interval": 1,
        "payment_method": {
            "id": "payex_psp_cc",
            "title": "Credit Card"
        },
        "needs_payment": false,
        "auto_renewal": false,
        "can_cancel": false,
        "can_reactivate": false,
        "can_resubscribe": true,
        "can_change_payment_method": false,
        "can_add_payment": false,
        "last_payment": {
            "id": 314803,
            "total": "39",
            "completed": null,
            "paid": null,
            "payment_method": {
                "id": "payex_psp_cc",
                "title": "Credit Card"
            },
            "status": "pending",
            "needs_payment": true
        }
    }
}
 * */
