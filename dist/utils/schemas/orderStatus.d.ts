import { z } from 'zod';
declare const OrderStatusSchema: z.ZodUnion<[z.ZodLiteral<"aborted">, z.ZodLiteral<"cancelled">, z.ZodLiteral<"failed">, z.ZodLiteral<"initialized">, z.ZodLiteral<"paid">]>;
export default OrderStatusSchema;
