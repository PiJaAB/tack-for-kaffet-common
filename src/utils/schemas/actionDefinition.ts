import { z } from 'zod';

const ActionDefinitionSchema = z.object({
  access: z.array(z.union([z.literal('admin'), z.literal('user')])),
  actionName: z.string(),
  params: z.unknown().optional(),
});

export const PerformedActionSchema = z.object({
  actionName: z.string(),
  paymentMethod: z.string(),
  params: z.unknown().optional(),
});

export default ActionDefinitionSchema;