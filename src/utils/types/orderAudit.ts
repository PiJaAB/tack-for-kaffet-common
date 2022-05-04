import { z } from 'zod';

import OrderAuditSchema from '../schemas/orderAudit';

export type OrderAudit = z.infer<typeof OrderAuditSchema>;
