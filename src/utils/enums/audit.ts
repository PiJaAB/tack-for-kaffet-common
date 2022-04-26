import { z } from 'zod';

const AuditTypeEnum = z.enum([
  'UserAction',
  'CustomerUpdate',
  'CustomerCreate',
]);

export default AuditTypeEnum;
