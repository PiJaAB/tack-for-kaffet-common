"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformedActionSchema = void 0;
const zod_1 = require("zod");
const ActionDefinitionSchema = zod_1.z.object({
    access: zod_1.z.array(zod_1.z.enum(['admin', 'user'])),
    actionName: zod_1.z.string(),
    params: zod_1.z.any().optional(),
});
exports.PerformedActionSchema = zod_1.z.object({
    actionName: zod_1.z.string(),
    paymentMethod: zod_1.z.string(),
    params: zod_1.z.any().optional(),
});
exports.default = ActionDefinitionSchema;
