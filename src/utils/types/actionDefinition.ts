import { z } from 'zod';

import ActionDefinitionSchema, {
  PerformedActionSchema,
} from '../schemas/actionDefinition';

export type PerformedAction = z.infer<typeof PerformedActionSchema>;

export type ActionDefinition = z.infer<typeof ActionDefinitionSchema>;
