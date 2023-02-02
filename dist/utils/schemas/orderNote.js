"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const OrderNoteSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    orderId: zod_1.z.string(),
    content: zod_1.z.string(),
    username: zod_1.z.string(),
});
exports.default = OrderNoteSchema;
