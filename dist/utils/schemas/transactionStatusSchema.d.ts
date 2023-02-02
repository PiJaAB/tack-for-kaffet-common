declare const TransactionStatusSchema: import("zod").ZodEnum<["Aborted", "Cancelled", "Failed", "Initialized", "Paid", "Ready", "Pending", "Refunded"]>;
export default TransactionStatusSchema;
