"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWEDBANK_PAY_PAYMENT_METHOD = exports.SWEDBANK_PAY_PAYMENT_METHOD_PREFIX = void 0;
/* eslint-disable import/prefer-default-export */
exports.SWEDBANK_PAY_PAYMENT_METHOD_PREFIX = 'swedbank-pay';
const SWEDBANK_PAY_PAYMENT_METHOD_SUFIXES = {
    CC: 'cc',
    Swish: 'swish',
};
exports.SWEDBANK_PAY_PAYMENT_METHOD = Object.fromEntries(Object.entries(SWEDBANK_PAY_PAYMENT_METHOD_SUFIXES).map(([key, val]) => [
    key,
    `${exports.SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-${val}`,
]));
