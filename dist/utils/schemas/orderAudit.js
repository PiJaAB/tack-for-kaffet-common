"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const order_1 = __importDefault(require("./order"));
const audit_1 = __importDefault(require("../enums/audit"));
const user_1 = require("./user");
const OrderAuditSchema = zod_1.z.object({
    user: user_1.PublicUserSchema.nullish(),
    before: order_1.default.optional().nullish(),
    after: order_1.default.optional().nullish(),
    orderID: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    documentPath: zod_1.z.string().optional(),
    type: audit_1.default,
});
exports.default = OrderAuditSchema;
