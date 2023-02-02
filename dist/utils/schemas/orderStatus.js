"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatuses = void 0;
const zod_1 = require("zod");
exports.orderStatuses = [
    'Aborted',
    'Cancelled',
    'Failed',
    'Initialized',
    'Paid',
    'Ready',
    'Pending',
    'Refunded',
];
const OrderStatusSchema = zod_1.z.enum(exports.orderStatuses);
exports.default = OrderStatusSchema;
