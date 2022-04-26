import { z } from 'zod';

import AuditTypeEnum from '../enums/audit';

import CustomerSchema from './customer';
import OrderSchema from './order';
import OrderNoteSchema from './orderNote';
import ProductSchema from './product';
import TransactionSchema from './transaction';

import UserSchema from './user';

const Paylod = z.union([
  CustomerSchema,
  OrderSchema,
  OrderNoteSchema,
  ProductSchema,
  TransactionSchema,
]);

const AuditSchema = z.object({
  id: z.string(),
  user: UserSchema.nullish(),
  before: Paylod,
  after: Paylod,
  customerId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  documentPath: z.string(),
  type: AuditTypeEnum,
});

export default AuditSchema;
