"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const product_1 = require("./product");
const customer_1 = __importDefault(require("./customer"));
const orderStatus_1 = __importDefault(require("./orderStatus"));
const OrderSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    products: zod_1.z.array(product_1.OrderProductSchema),
    customer: customer_1.default.extend({
        id: zod_1.z.string(),
    }).optional(),
    orderStatus: orderStatus_1.default,
    orderPaidBy: zod_1.z.string().optional(),
    orderNotes: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        orderId: zod_1.z.string(),
        content: zod_1.z.string(),
        username: zod_1.z.string(),
    }))
        .optional(),
    createdAt: zod_1.z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date)
            return new Date(arg);
        return arg;
    }, zod_1.z.date()),
    updatedAt: zod_1.z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date)
            return new Date(arg);
        return arg;
    }, zod_1.z.date()),
});
exports.default = OrderSchema;
