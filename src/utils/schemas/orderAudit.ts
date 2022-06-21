import { z } from 'zod';
import OrderSchema from './order';

import AuditTypeEnum from '../enums/audit';

import UserSchema from './user';

const OrderAuditSchema = z.object({
  user: UserSchema.nullish(),
  before: OrderSchema.optional().nullish(),
  after: OrderSchema.optional().nullish(),
  orderID: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  documentPath: z.string().optional(),
  type: AuditTypeEnum,
});

export default OrderAuditSchema;
