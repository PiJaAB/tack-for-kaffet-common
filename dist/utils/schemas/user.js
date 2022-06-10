"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    role: zod_1.z.string().optional(),
    username: zod_1.z.string().optional(),
    private: zod_1.z.never().optional(),
});
exports.default = UserSchema;
