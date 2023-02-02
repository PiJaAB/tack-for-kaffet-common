"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const audit_1 = __importDefault(require("../enums/audit"));
const customer_1 = __importDefault(require("./customer"));
const user_1 = require("./user");
const CustomerAuditSchema = zod_1.z.object({
    id: zod_1.z.string(),
    user: user_1.PublicUserSchema.nullish(),
    before: customer_1.default,
    after: customer_1.default,
    customerId: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date().optional(),
    documentPath: zod_1.z.string(),
    type: audit_1.default,
});
exports.default = CustomerAuditSchema;
