import { z } from 'zod';

export const orderStatuses = [
  'Aborted',
  'Cancelled',
  'Failed',
  'Initialized',
  'Paid',
  'Ready',
  'Pending',
  'Refunded',
] as const;

const OrderStatusSchema = z.enum(orderStatuses);

export default OrderStatusSchema;
