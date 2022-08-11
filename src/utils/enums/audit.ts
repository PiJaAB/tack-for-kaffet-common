import { z } from 'zod';

const AuditTypeEnum = z.enum([
  'UserAction',
  'CustomerUpdate',
  'CustomerCreate',
  'OrderUpdate',
  'OrderCreate',
]);

export default AuditTypeEnum;
