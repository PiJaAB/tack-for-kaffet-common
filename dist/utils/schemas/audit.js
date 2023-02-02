"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const audit_1 = __importDefault(require("../enums/audit"));
const customer_1 = __importDefault(require("./customer"));
const order_1 = __importDefault(require("./order"));
const orderNote_1 = __importDefault(require("./orderNote"));
const product_1 = require("./product");
const transaction_1 = __importDefault(require("./transaction"));
const user_1 = require("./user");
const Paylod = zod_1.z.union([
    customer_1.default,
    order_1.default,
    orderNote_1.default,
    product_1.BaseProductSchema,
    product_1.ProductSchema,
    product_1.OrderProductSchema,
    transaction_1.default,
]);
const AuditSchema = zod_1.z.object({
    id: zod_1.z.string(),
    user: user_1.PublicUserSchema.nullish(),
    before: Paylod,
    after: Paylod,
    customerId: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    documentPath: zod_1.z.string(),
    type: audit_1.default,
});
exports.default = AuditSchema;
