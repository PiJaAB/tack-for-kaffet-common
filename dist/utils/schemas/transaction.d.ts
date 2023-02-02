import { z } from 'zod';
declare const TransactionSchema: z.ZodObject<{
    customerID: z.ZodString;
    date: z.ZodOptional<z.ZodDate>;
    orderID: z.ZodString;
    paymentMethod: z.ZodString;
    transactionStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        access: z.ZodArray<z.ZodEnum<["admin", "user"]>, "many">;
        actionName: z.ZodString;
        params: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    paymentMethod: string;
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
}, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    paymentMethod: string;
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
}>;
export declare const TransactionSwedbankPaySchema: z.ZodObject<z.extendShape<{
    customerID: z.ZodString;
    date: z.ZodOptional<z.ZodDate>;
    orderID: z.ZodString;
    paymentMethod: z.ZodString;
    transactionStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        access: z.ZodArray<z.ZodEnum<["admin", "user"]>, "many">;
        actionName: z.ZodString;
        params: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }>, "many">>;
}, {
    paymentOrderID: z.ZodString;
    paymentOrderStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending"]>;
    paymentMethod: z.ZodUnion<[z.ZodType<`swedbank-pay-${string}`, z.ZodStringDef, `swedbank-pay-${string}`>, z.ZodLiteral<"swedbank-pay">]>;
    isAuthorized: z.ZodOptional<z.ZodBoolean>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    isCaptured: z.ZodOptional<z.ZodBoolean>;
    isReversed: z.ZodOptional<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    isAuthorized?: boolean | undefined;
    isVerified?: boolean | undefined;
    isCaptured?: boolean | undefined;
    isReversed?: boolean | undefined;
    paymentMethod: "swedbank-pay" | `swedbank-pay-${string}`;
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
    paymentOrderID: string;
    paymentOrderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending";
}, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    isAuthorized?: boolean | undefined;
    isVerified?: boolean | undefined;
    isCaptured?: boolean | undefined;
    isReversed?: boolean | undefined;
    paymentMethod: "swedbank-pay" | `swedbank-pay-${string}`;
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
    paymentOrderID: string;
    paymentOrderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending";
}>;
export declare const TransactionSwedbankPayCCSchema: z.ZodObject<z.extendShape<z.extendShape<{
    customerID: z.ZodString;
    date: z.ZodOptional<z.ZodDate>;
    orderID: z.ZodString;
    paymentMethod: z.ZodString;
    transactionStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        access: z.ZodArray<z.ZodEnum<["admin", "user"]>, "many">;
        actionName: z.ZodString;
        params: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }>, "many">>;
}, {
    paymentOrderID: z.ZodString;
    paymentOrderStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending"]>;
    paymentMethod: z.ZodUnion<[z.ZodType<`swedbank-pay-${string}`, z.ZodStringDef, `swedbank-pay-${string}`>, z.ZodLiteral<"swedbank-pay">]>;
    isAuthorized: z.ZodOptional<z.ZodBoolean>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    isCaptured: z.ZodOptional<z.ZodBoolean>;
    isReversed: z.ZodOptional<z.ZodBoolean>;
}>, {
    paymentMethod: z.ZodLiteral<"swedbank-pay-cc">;
}>, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    isAuthorized?: boolean | undefined;
    isVerified?: boolean | undefined;
    isCaptured?: boolean | undefined;
    isReversed?: boolean | undefined;
    paymentMethod: "swedbank-pay-cc";
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
    paymentOrderID: string;
    paymentOrderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending";
}, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    isAuthorized?: boolean | undefined;
    isVerified?: boolean | undefined;
    isCaptured?: boolean | undefined;
    isReversed?: boolean | undefined;
    paymentMethod: "swedbank-pay-cc";
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
    paymentOrderID: string;
    paymentOrderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending";
}>;
export declare const TransactionSwedbankPaySwishSchema: z.ZodObject<z.extendShape<z.extendShape<{
    customerID: z.ZodString;
    date: z.ZodOptional<z.ZodDate>;
    orderID: z.ZodString;
    paymentMethod: z.ZodString;
    transactionStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        access: z.ZodArray<z.ZodEnum<["admin", "user"]>, "many">;
        actionName: z.ZodString;
        params: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }, {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }>, "many">>;
}, {
    paymentOrderID: z.ZodString;
    paymentOrderStatus: z.ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending"]>;
    paymentMethod: z.ZodUnion<[z.ZodType<`swedbank-pay-${string}`, z.ZodStringDef, `swedbank-pay-${string}`>, z.ZodLiteral<"swedbank-pay">]>;
    isAuthorized: z.ZodOptional<z.ZodBoolean>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    isCaptured: z.ZodOptional<z.ZodBoolean>;
    isReversed: z.ZodOptional<z.ZodBoolean>;
}>, {
    paymentMethod: z.ZodLiteral<"swedbank-pay-swish">;
}>, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    isAuthorized?: boolean | undefined;
    isVerified?: boolean | undefined;
    isCaptured?: boolean | undefined;
    isReversed?: boolean | undefined;
    paymentMethod: "swedbank-pay-swish";
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
    paymentOrderID: string;
    paymentOrderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending";
}, {
    date?: Date | undefined;
    actions?: {
        params?: any;
        access: ("admin" | "user")[];
        actionName: string;
    }[] | undefined;
    isAuthorized?: boolean | undefined;
    isVerified?: boolean | undefined;
    isCaptured?: boolean | undefined;
    isReversed?: boolean | undefined;
    paymentMethod: "swedbank-pay-swish";
    customerID: string;
    orderID: string;
    transactionStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending" | "Refunded";
    paymentOrderID: string;
    paymentOrderStatus: "Aborted" | "Cancelled" | "Failed" | "Initialized" | "Paid" | "Ready" | "Pending";
}>;
export default TransactionSchema;
