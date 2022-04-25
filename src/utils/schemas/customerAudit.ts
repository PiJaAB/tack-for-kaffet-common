import { z } from 'zod';
import CustomerSchema from './customer';
import UserSchema from './user';

const CustomerAuditSchema = z.object({
  id: z.string(),
  before: CustomerSchema,
  after: CustomerSchema,
  customerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.string().optional(),
  user: UserSchema,
});

export default CustomerAuditSchema;
