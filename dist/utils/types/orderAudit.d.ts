import { z } from 'zod';
import OrderAuditSchema from '../schemas/orderAudit';
export declare type OrderAudit = z.infer<typeof OrderAuditSchema>;
