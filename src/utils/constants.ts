/* eslint-disable import/prefer-default-export */
export const SWEDBANK_PAY_PAYMENT_METHOD_PREFIX = 'swedbank-pay';

const SWEDBANK_PAY_PAYMENT_METHOD_SUFIXES = {
  CC: 'cc',
  Swish: 'swish',
} as const;

export const SWEDBANK_PAY_PAYMENT_METHOD = Object.fromEntries(
  Object.entries(SWEDBANK_PAY_PAYMENT_METHOD_SUFIXES).map(([key, val]) => [
    key,
    `${SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-${val}` as const,
  ]),
) as {
  [key in keyof typeof SWEDBANK_PAY_PAYMENT_METHOD_SUFIXES]: `${typeof SWEDBANK_PAY_PAYMENT_METHOD_PREFIX}-${typeof SWEDBANK_PAY_PAYMENT_METHOD_SUFIXES[key]}`;
};
