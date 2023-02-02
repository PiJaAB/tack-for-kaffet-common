"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSwedbankPaySwishSchema = exports.TransactionSwedbankPayCCSchema = exports.TransactionSwedbankPaySchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../constants");
const actionDefinition_1 = __importDefault(require("./actionDefinition"));
const transactionStatusSchema_1 = __importDefault(require("./transactionStatusSchema"));
const TransactionSchema = zod_1.z.object({
    customerID: zod_1.z.string(),
    date: zod_1.z.date().optional(),
    orderID: zod_1.z.string(),
    paymentMethod: zod_1.z.string(),
    transactionStatus: transactionStatusSchema_1.default,
    actions: zod_1.z.array(actionDefinition_1.default).optional(),
});
exports.TransactionSwedbankPaySchema = TransactionSchema.extend({
    paymentOrderID: zod_1.z.string(),
    paymentOrderStatus: zod_1.z.enum([
        'Aborted',
        'Cancelled',
        'Failed',
        'Initialized',
        'Paid',
        'Ready',
        'Pending',
    ]),
    paymentMethod: zod_1.z.union([
        zod_1.z.string().startsWith(`${constants_1.SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-`),
        zod_1.z.literal(constants_1.SWEDBANK_PAY_PAYMENT_METHOD_PREFIX),
    ]),
    isAuthorized: zod_1.z.boolean().optional(),
    isVerified: zod_1.z.boolean().optional(),
    isCaptured: zod_1.z.boolean().optional(),
    isReversed: zod_1.z.boolean().optional(),
});
exports.TransactionSwedbankPayCCSchema = exports.TransactionSwedbankPaySchema.extend({
    paymentMethod: zod_1.z.literal(constants_1.SWEDBANK_PAY_PAYMENT_METHOD.CC),
});
exports.TransactionSwedbankPaySwishSchema = exports.TransactionSwedbankPaySchema.extend({
    paymentMethod: zod_1.z.literal(constants_1.SWEDBANK_PAY_PAYMENT_METHOD.Swish),
});
exports.default = TransactionSchema;
