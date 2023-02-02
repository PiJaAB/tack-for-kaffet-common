"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const address_1 = __importDefault(require("./address"));
const OrderRequestSchema = zod_1.z.object({
    customerID: zod_1.z.string(),
    billingAddress: address_1.default,
    paymentMethod: zod_1.z.string(),
    productRows: zod_1.z.array(zod_1.z.object({
        productID: zod_1.z.string(),
        quantity: zod_1.z.number().int(),
    })),
});
exports.default = OrderRequestSchema;
