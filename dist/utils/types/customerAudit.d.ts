import { z } from 'zod';
import CustomerAuditSchema from '../schemas/customerAudit';
export declare type CustomerAudit = z.infer<typeof CustomerAuditSchema>;
