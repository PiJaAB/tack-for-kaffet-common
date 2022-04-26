import { z } from 'zod';

import CustomerAuditSchema from '../schemas/customerAudit';

export type CustomerAudit = z.infer<typeof CustomerAuditSchema>;
