"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const CustomerSubscriptionProduct = zod_1.z.object({
    id: zod_1.z.string().optional(),
    continuousSince: zod_1.z.date(),
    endDate: zod_1.z.date(),
    productID: zod_1.z.string(),
    firstStart: zod_1.z.date(),
    recurrenceToken: zod_1.z
        .array(zod_1.z.object({
        type: zod_1.z.string().optional(),
        token: zod_1.z.string().optional(),
        name: zod_1.z.string().optional(),
        expiryDate: zod_1.z.string().optional(),
    }))
        .optional(),
    active: zod_1.z.boolean(),
    status: zod_1.z.string().optional(),
});
exports.default = CustomerSubscriptionProduct;
