"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateUserSchema = exports.PublicUserSchema = void 0;
const zod_1 = require("zod");
exports.PublicUserSchema = zod_1.z.object({
    username: zod_1.z.string().optional(),
    role: zod_1.z.string().optional(),
    private: zod_1.z.never(),
});
exports.PrivateUserSchema = exports.PublicUserSchema.extend({
    private: zod_1.z.object({
        email: zod_1.z.string().optional(),
        emailVerified: zod_1.z.boolean(),
        phoneNumber: zod_1.z.string().optional(),
        accessFlags: zod_1.z.record(zod_1.z.boolean()).nullable(),
        tempPassword: zod_1.z.boolean().optional(),
        disabled: zod_1.z.boolean(),
        deviceTokens: zod_1.z.array(zod_1.z.string()).optional(),
        subscribedTopics: zod_1.z.array(zod_1.z.string()).optional(),
        notificationKey: zod_1.z.string().nullish(),
    }),
});
