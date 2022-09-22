import { z } from 'zod';

import UserSchema, {
  PublicUserSchema,
  PrivateUserSchema,
} from '../schemas/user';

export type User = z.infer<typeof UserSchema>;
export type PublicUser = z.infer<typeof PublicUserSchema>;
export type PrivateUser = z.infer<typeof PrivateUserSchema>;
