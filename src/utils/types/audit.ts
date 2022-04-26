import { z } from 'zod';

import AuditSchema from '../schemas/audit';

export type Audit = z.infer<typeof AuditSchema>;

