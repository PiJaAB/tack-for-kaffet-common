"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedPaymentMethodSwedbankPayCCSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../constants");
const SavedPaymentMethodSchema = zod_1.z.object({
    paymentMethod: zod_1.z.string(),
    name: zod_1.z.string(),
    expiryDate: zod_1.z.string(),
});
exports.SavedPaymentMethodSwedbankPayCCSchema = SavedPaymentMethodSchema.extend({
    paymentMethod: zod_1.z.literal(constants_1.SWEDBANK_PAY_PAYMENT_METHOD.CC),
    type: zod_1.z.enum(['payment', 'recurrence', 'transactionOnfile', 'unscheduled']),
    token: zod_1.z.string(),
});
exports.default = SavedPaymentMethodSchema;
