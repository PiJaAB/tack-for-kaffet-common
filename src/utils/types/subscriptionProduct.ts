import { z } from 'zod';

import SubscriptionProductSchema from '../schemas/subscriptionProduct';

export type SubscriptionProduct = z.infer<typeof SubscriptionProductSchema>;
