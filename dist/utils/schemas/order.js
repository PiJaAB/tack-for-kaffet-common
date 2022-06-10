"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const product_1 = __importDefault(require("./product"));
const customer_1 = __importDefault(require("./customer"));
const transaction_1 = __importDefault(require("./transaction"));
const orderStatus_1 = __importDefault(require("./orderStatus"));
const OrderSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    cancelled: zod_1.z.boolean().optional(),
    products: zod_1.z.array(product_1.default).optional(),
    productRowIds: zod_1.z.array(zod_1.z.union([zod_1.z.string(), zod_1.z.number()])).optional(),
    customerId: zod_1.z.string().optional(),
    customerRef: zod_1.z.string().optional(),
    customer: customer_1.default.optional(),
    transactions: zod_1.z.array(transaction_1.default).optional(),
    paymentOrderID: zod_1.z.string().optional(),
    orderStatus: orderStatus_1.default.optional(),
    paymentStatus: orderStatus_1.default.optional(),
    orderNotes: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        orderId: zod_1.z.string(),
        content: zod_1.z.string(),
        username: zod_1.z.string(),
    }))
        .optional(),
    // shoppingCartId: z
    //   .string({
    //     required_error: 'ShoppingCartId is required',
    //     invalid_type_error: 'shoppingCartId must be a string',
    //   })
    //   .min(1, { message: 'Must be at least 1 characters long' }),
    // createdAt: z.preprocess((arg) => {
    //   if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    //   return arg;
    // }, z.date()),
    // updatedAt: z.preprocess((arg) => {
    //   if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    //   return arg;
    // }, z.date()),
});
exports.default = OrderSchema;
