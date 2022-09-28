import { z } from 'zod';

export const orderStatuses = [
  'Aborted',
  'Cancelled',
  'Failed',
  'Initialized',
  'Paid',
  'Ready',
  'Pending',
] as const;

const OrderStatusSchema = z.enum(orderStatuses);

export default OrderStatusSchema;
