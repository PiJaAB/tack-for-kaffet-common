"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const address_1 = __importDefault(require("./address"));
const CustomerSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    externalID: zod_1.z.string().optional(),
    firstName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
    ssn: zod_1.z.string().optional(),
    phoneNumber: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    emailSubscription: zod_1.z.boolean().optional(),
    about: zod_1.z.string().optional(),
    website: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    profileImageHash: zod_1.z.string().optional(),
    address: address_1.default.optional(),
    billingAddress: address_1.default.optional(),
    // - flag that customer is already a subscriber but is allowed to pay early (beforehand).
    subscriberAndCanPayInAdvance: zod_1.z.boolean().optional(),
    updatedBy: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().nullish(),
    /**
     * Duplicated data from other parts of the database.
     * This is to make it easier to query for customers.
     * This data is not guaranteed to be up to date,
     * and should not be used for anything critical.
     */
    convenientListData_uncertain: zod_1.z
        .object({
        subscriptions: zod_1.z
            .record(zod_1.z
            .object({
            status: zod_1.z.string(),
        })
            .optional())
            .optional(),
    })
        .optional(),
});
exports.default = CustomerSchema;
