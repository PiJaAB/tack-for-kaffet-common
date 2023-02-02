import { z } from 'zod';
import { PublicUserSchema, PrivateUserSchema } from '../schemas/user';
export declare type PublicUser = z.infer<typeof PublicUserSchema>;
export declare type PrivateUser = z.infer<typeof PrivateUserSchema>;
