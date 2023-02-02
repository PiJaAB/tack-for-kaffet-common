"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionStatuses = void 0;
const zod_1 = require("zod");
exports.subscriptionStatuses = [
    'Active',
    'Cancelled',
    'On-Hold',
    'Expired',
    'Pending-Cancel',
];
const SubscriptionProduct = zod_1.z.object({
    variant: zod_1.z.string().nullish(),
    status: zod_1.z.enum(exports.subscriptionStatuses),
    continuouslySince: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date().nullish(),
    endDate: zod_1.z.date().nullish(),
    firstStart: zod_1.z.date().nullish(),
    trialEndDate: zod_1.z.date().nullish(),
    orderRefs: zod_1.z.array(zod_1.z.string()),
    nextRenewalAttempt: zod_1.z.date().nullable(),
    renewalAttempts: zod_1.z.number(),
    savedPaymentMethod: zod_1.z
        .object({
        docRef: zod_1.z.string(),
        date: zod_1.z.date(),
    })
        .nullish(),
    sentEmails: zod_1.z
        .array(zod_1.z.object({
        date: zod_1.z.date(),
        type: zod_1.z.string(),
    }))
        .nullish(),
    failedAttempts: zod_1.z.number(),
    updatedAt: zod_1.z.date(),
});
exports.default = SubscriptionProduct;
