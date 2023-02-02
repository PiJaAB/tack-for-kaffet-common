import { z } from 'zod';
import OrderNoteSchema from '../schemas/orderNote';
export declare type OrderNote = z.infer<typeof OrderNoteSchema>;
