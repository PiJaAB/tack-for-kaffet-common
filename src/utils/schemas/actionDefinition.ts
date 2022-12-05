import { z } from 'zod';

const ActionDefinitionSchema = z.object({
  access: z.array(z.enum(['admin', 'user'])),
  actionName: z.string(),
  params: z.any().optional(),
});

export const PerformedActionSchema = z.object({
  actionName: z.string(),
  paymentMethod: z.string(),
  params: z.any().optional(),
});

export default ActionDefinitionSchema;
