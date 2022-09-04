import { z } from 'zod';

import SavedPaymentMethodSchema, {
  SavedPaymentMethodSwedbankPayCCSchema,
} from '../schemas/savedPaymentMethod';

export type SavedPaymentMethodSwedbankPayCC = z.infer<
  typeof SavedPaymentMethodSwedbankPayCCSchema
>;

export type SavedPaymentMethod = z.infer<typeof SavedPaymentMethodSchema>;
