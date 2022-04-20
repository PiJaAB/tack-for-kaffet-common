import { z } from 'zod';

import OrderNoteSchema from '../schemas/orderNote';

export type OrderNote = z.infer<typeof OrderNoteSchema>;

