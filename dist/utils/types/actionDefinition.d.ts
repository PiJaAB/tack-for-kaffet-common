import { z } from 'zod';
import ActionDefinitionSchema, { PerformedActionSchema } from '../schemas/actionDefinition';
export declare type PerformedAction = z.infer<typeof PerformedActionSchema>;
export declare type ActionDefinition = z.infer<typeof ActionDefinitionSchema>;
