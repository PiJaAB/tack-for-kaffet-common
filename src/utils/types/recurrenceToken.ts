import { z } from 'zod';

import RecurrenceTokenSchema from '../schemas/recurrenceToken';

export type RecurrenceToken = z.infer<typeof RecurrenceTokenSchema>;
