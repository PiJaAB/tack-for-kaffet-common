"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AddressSchema = zod_1.z.object({
    streetAddress: zod_1.z.string(),
    zipCode: zod_1.z.string(),
    city: zod_1.z.string(),
    country: zod_1.z.string().default('Sweden'),
    countryCode: zod_1.z.enum(['SE', 'NO', 'FI']).default('SE'),
});
exports.default = AddressSchema;
