"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AuditTypeEnum = zod_1.z.enum([
    'UserAction',
    'CustomerUpdate',
    'CustomerCreate',
    'OrderUpdate',
    'OrderCreate',
]);
exports.default = AuditTypeEnum;
