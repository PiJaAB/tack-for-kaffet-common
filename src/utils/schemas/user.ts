import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.boolean(),
  phoneNumber: z.string().nullish(),
  accessFlags: z.record(z.boolean()).nullable(),
  tempPassword: z.boolean().optional(),
  disabled: z.boolean(),
  deviceTokens: z.array(z.string()).optional(),
  subscribedTopics: z.array(z.string()).optional(),
  notificationKey: z.string().nullish(),
  role: z.string().optional(),
  username: z.string().optional(),
  displayName: z.string().optional(),
  private: z.never().optional(),
});

export const PublicUserSchema = z.object({
  username: z.string().optional(),
  role: z.string().optional(),
  private: z.never(),
});

export const PrivateUserSchema = PublicUserSchema.extend({
  private: z.object({
    email: z.string().optional(),
    emailVerified: z.boolean(),
    phoneNumber: z.string().optional(),
    accessFlags: z.record(z.boolean()).nullable(),
    tempPassword: z.boolean().optional(),
    disabled: z.boolean(),
    deviceTokens: z.array(z.string()).optional(),
    subscribedTopics: z.array(z.string()).optional(),
    notificationKey: z.string().nullish(),
  }),
});

export default UserSchema;
