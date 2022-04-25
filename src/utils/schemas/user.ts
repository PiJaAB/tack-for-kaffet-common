import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().optional(),
  role: z.string().optional(),
  name: z.string().optional(),
  private: z.never().optional(),
});

export default UserSchema;
