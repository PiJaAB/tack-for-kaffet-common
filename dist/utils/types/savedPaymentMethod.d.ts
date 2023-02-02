import { z } from 'zod';
import SavedPaymentMethodSchema, { SavedPaymentMethodSwedbankPayCCSchema } from '../schemas/savedPaymentMethod';
export declare type SavedPaymentMethodSwedbankPayCC = z.infer<typeof SavedPaymentMethodSwedbankPayCCSchema>;
export declare type SavedPaymentMethod = z.infer<typeof SavedPaymentMethodSchema>;
