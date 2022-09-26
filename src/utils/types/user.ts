import { z } from 'zod';

import { PublicUserSchema, PrivateUserSchema } from '../schemas/user';

export type PublicUser = z.infer<typeof PublicUserSchema>;
export type PrivateUser = z.infer<typeof PrivateUserSchema>;
