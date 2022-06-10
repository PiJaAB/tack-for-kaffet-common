"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const TransactionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    customerID: zod_1.z.string(),
    date: zod_1.z.date().optional(),
    paymentOrderID: zod_1.z.string(),
    orderID: zod_1.z.string(),
    transactionType: zod_1.z.string(),
});
exports.default = TransactionSchema;
