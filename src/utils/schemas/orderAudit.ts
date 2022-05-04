import { z } from 'zod';
import OrderSchema from './order';

import AuditTypeEnum from '../enums/audit';

import UserSchema from './user';

const OrderAuditSchema = z.object({
  id: z.string().optional(),
  user: UserSchema.nullish(),
  before: OrderSchema.optional(),
  after: OrderSchema.optional(),
  orderId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  documentPath: z.string().optional(),
  type: AuditTypeEnum,
});

export default OrderAuditSchema;
