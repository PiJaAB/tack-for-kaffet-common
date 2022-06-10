import { z } from 'zod';
declare const AuditTypeEnum: z.ZodEnum<["UserAction", "CustomerUpdate", "CustomerCreate", "OrderUpdate", "OrderCreate"]>;
export default AuditTypeEnum;
