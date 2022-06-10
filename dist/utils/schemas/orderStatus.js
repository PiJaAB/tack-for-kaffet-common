"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const OrderStatusSchema = zod_1.z.union([
    zod_1.z.literal('aborted'),
    zod_1.z.literal('cancelled'),
    zod_1.z.literal('failed'),
    zod_1.z.literal('initialized'),
    zod_1.z.literal('paid'), // Betalad
    // z.literal('pending'), // Inväntar betalning
    // z.literal('manual-processing'), // Manuell behandling
    // z.literal('processing'), // Behandlas
    // z.literal('on-hold'), // Pausad
    // z.literal('completed'), // Färdigbehandlad
    // z.literal('cancelled'), // Avbruten
    // z.literal('refunded'), // Återbetald
    // z.literal('failed'), // Misslyckad
    // z.literal('unknown'), // Okänt fel
]);
exports.default = OrderStatusSchema;
