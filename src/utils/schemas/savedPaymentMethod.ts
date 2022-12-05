import { z } from 'zod';
import { SWEDBANK_PAY_PAYMENT_METHOD } from '../constants';

const SavedPaymentMethodSchema = z.object({
  paymentMethod: z.string(),
  name: z.string(),
  expiryDate: z.string(),
});

export const SavedPaymentMethodSwedbankPayCCSchema =
  SavedPaymentMethodSchema.extend({
    paymentMethod: z.literal(SWEDBANK_PAY_PAYMENT_METHOD.CC),
    type: z.enum(['payment', 'recurrence', 'transactionOnfile', 'unscheduled']),
    token: z.string(),
  });

export default SavedPaymentMethodSchema;
