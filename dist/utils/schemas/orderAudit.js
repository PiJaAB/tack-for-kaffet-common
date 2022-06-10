"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const order_1 = __importDefault(require("./order"));
const audit_1 = __importDefault(require("../enums/audit"));
const user_1 = __importDefault(require("./user"));
const OrderAuditSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    user: user_1.default.nullish(),
    before: order_1.default.optional(),
    after: order_1.default.optional(),
    orderId: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    documentPath: zod_1.z.string().optional(),
    type: audit_1.default,
});
exports.default = OrderAuditSchema;
