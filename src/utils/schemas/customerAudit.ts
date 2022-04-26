import { z } from 'zod';

import AuditTypeEnum from '../enums/audit';

import CustomerSchema from './customer';
import UserSchema from './user';

const CustomerAuditSchema = z.object({
  id: z.string(),
  user: UserSchema.nullish(),
  before: CustomerSchema,
  after: CustomerSchema,
  customerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  documentPath: z.string(),
  type: AuditTypeEnum,
});

export default CustomerAuditSchema;
