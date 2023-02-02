import { z } from 'zod';
export declare const orderStatuses: readonly ["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"];
declare const OrderStatusSchema: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
export default OrderStatusSchema;
