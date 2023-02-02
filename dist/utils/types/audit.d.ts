import { z } from 'zod';
import AuditSchema from '../schemas/audit';
export declare type Audit = z.infer<typeof AuditSchema>;
