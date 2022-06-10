import { z } from 'zod';
declare const OrderAuditSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    user: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
        private: z.ZodOptional<z.ZodNever>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        username?: string | undefined;
        role?: string | undefined;
        private?: undefined;
    }, {
        id?: string | undefined;
        username?: string | undefined;
        role?: string | undefined;
        private?: undefined;
    }>>>;
    before: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        cancelled: z.ZodOptional<z.ZodBoolean>;
        products: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            activeSubscription: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            title: z.ZodString;
            stockStatus: z.ZodString;
            price: z.ZodNumber;
            type: z.ZodUnion<[z.ZodLiteral<"subscription">, z.ZodLiteral<"one-time">]>;
            subscriptionReoccurring: z.ZodNullable<z.ZodString>;
            subscriptionTime: z.ZodNullable<z.ZodString>;
            fileUpload: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            productAllowReviews: z.ZodNullable<z.ZodBoolean>;
            productReviewNotification: z.ZodNullable<z.ZodBoolean>;
            productNotificationOnPurchase: z.ZodNullable<z.ZodBoolean>;
            productNoPushNotifications: z.ZodNullable<z.ZodBoolean>;
            productCustomerMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            quantity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }, {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }>, "many">>;
        productRowIds: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">>;
        customerId: z.ZodOptional<z.ZodString>;
        customerRef: z.ZodOptional<z.ZodString>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodOptional<z.ZodString>;
            ssn: z.ZodOptional<z.ZodString>;
            phoneNumber: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            emailSubscription: z.ZodOptional<z.ZodBoolean>;
            about: z.ZodOptional<z.ZodString>;
            website: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            profileImageHash: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodObject<{
                streetAddress: z.ZodString;
                zipCode: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                countryCode: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }>>;
            billingAddress: z.ZodOptional<z.ZodObject<{
                streetAddress: z.ZodString;
                zipCode: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                countryCode: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }>>;
            legacyId: z.ZodOptional<z.ZodString>;
            updatedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        }, {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        }>>;
        transactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            customerID: z.ZodString;
            date: z.ZodOptional<z.ZodDate>;
            paymentOrderID: z.ZodString;
            orderID: z.ZodString;
            transactionType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }, {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }>, "many">>;
        paymentOrderID: z.ZodOptional<z.ZodString>;
        orderStatus: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"aborted">, z.ZodLiteral<"cancelled">, z.ZodLiteral<"failed">, z.ZodLiteral<"initialized">, z.ZodLiteral<"paid">]>>;
        paymentStatus: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"aborted">, z.ZodLiteral<"cancelled">, z.ZodLiteral<"failed">, z.ZodLiteral<"initialized">, z.ZodLiteral<"paid">]>>;
        orderNotes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            orderId: z.ZodString;
            content: z.ZodString;
            username: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }, {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    }, {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    }>>;
    after: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        cancelled: z.ZodOptional<z.ZodBoolean>;
        products: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            activeSubscription: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            title: z.ZodString;
            stockStatus: z.ZodString;
            price: z.ZodNumber;
            type: z.ZodUnion<[z.ZodLiteral<"subscription">, z.ZodLiteral<"one-time">]>;
            subscriptionReoccurring: z.ZodNullable<z.ZodString>;
            subscriptionTime: z.ZodNullable<z.ZodString>;
            fileUpload: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            productAllowReviews: z.ZodNullable<z.ZodBoolean>;
            productReviewNotification: z.ZodNullable<z.ZodBoolean>;
            productNotificationOnPurchase: z.ZodNullable<z.ZodBoolean>;
            productNoPushNotifications: z.ZodNullable<z.ZodBoolean>;
            productCustomerMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            quantity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }, {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }>, "many">>;
        productRowIds: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">>;
        customerId: z.ZodOptional<z.ZodString>;
        customerRef: z.ZodOptional<z.ZodString>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodOptional<z.ZodString>;
            ssn: z.ZodOptional<z.ZodString>;
            phoneNumber: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            emailSubscription: z.ZodOptional<z.ZodBoolean>;
            about: z.ZodOptional<z.ZodString>;
            website: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            profileImageHash: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodObject<{
                streetAddress: z.ZodString;
                zipCode: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                countryCode: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }>>;
            billingAddress: z.ZodOptional<z.ZodObject<{
                streetAddress: z.ZodString;
                zipCode: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                countryCode: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }, {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            }>>;
            legacyId: z.ZodOptional<z.ZodString>;
            updatedBy: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        }, {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        }>>;
        transactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            customerID: z.ZodString;
            date: z.ZodOptional<z.ZodDate>;
            paymentOrderID: z.ZodString;
            orderID: z.ZodString;
            transactionType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }, {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }>, "many">>;
        paymentOrderID: z.ZodOptional<z.ZodString>;
        orderStatus: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"aborted">, z.ZodLiteral<"cancelled">, z.ZodLiteral<"failed">, z.ZodLiteral<"initialized">, z.ZodLiteral<"paid">]>>;
        paymentStatus: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"aborted">, z.ZodLiteral<"cancelled">, z.ZodLiteral<"failed">, z.ZodLiteral<"initialized">, z.ZodLiteral<"paid">]>>;
        orderNotes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            orderId: z.ZodString;
            content: z.ZodString;
            username: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }, {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    }, {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    }>>;
    orderId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    documentPath: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["UserAction", "CustomerUpdate", "CustomerCreate", "OrderUpdate", "OrderCreate"]>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    orderId?: string | undefined;
    user?: {
        id?: string | undefined;
        username?: string | undefined;
        role?: string | undefined;
        private?: undefined;
    } | null | undefined;
    before?: {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    } | undefined;
    after?: {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    } | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    documentPath?: string | undefined;
    type: "UserAction" | "CustomerUpdate" | "CustomerCreate" | "OrderUpdate" | "OrderCreate";
}, {
    id?: string | undefined;
    orderId?: string | undefined;
    user?: {
        id?: string | undefined;
        username?: string | undefined;
        role?: string | undefined;
        private?: undefined;
    } | null | undefined;
    before?: {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    } | undefined;
    after?: {
        id?: string | undefined;
        paymentOrderID?: string | undefined;
        cancelled?: boolean | undefined;
        products?: {
            id?: string | undefined;
            imageUrl?: string | undefined;
            activeSubscription?: boolean | null | undefined;
            fileUpload?: string | undefined;
            shortDescription?: string | undefined;
            category?: string | undefined;
            productCustomerMessage?: string | null | undefined;
            quantity?: number | undefined;
            type: "subscription" | "one-time";
            title: string;
            stockStatus: string;
            price: number;
            subscriptionReoccurring: string | null;
            subscriptionTime: string | null;
            productAllowReviews: boolean | null;
            productReviewNotification: boolean | null;
            productNotificationOnPurchase: boolean | null;
            productNoPushNotifications: boolean | null;
        }[] | undefined;
        productRowIds?: (string | number)[] | undefined;
        customerId?: string | undefined;
        customerRef?: string | undefined;
        customer?: {
            email?: string | undefined;
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            ssn?: string | undefined;
            phoneNumber?: string | undefined;
            emailSubscription?: boolean | undefined;
            about?: string | undefined;
            website?: string | undefined;
            imageUrl?: string | undefined;
            profileImageHash?: string | undefined;
            address?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            billingAddress?: {
                countryCode?: string | undefined;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
            } | undefined;
            legacyId?: string | undefined;
            updatedBy?: string | undefined;
        } | undefined;
        transactions?: {
            date?: Date | undefined;
            id: string;
            customerID: string;
            paymentOrderID: string;
            orderID: string;
            transactionType: string;
        }[] | undefined;
        orderStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        paymentStatus?: "aborted" | "cancelled" | "failed" | "initialized" | "paid" | undefined;
        orderNotes?: {
            id: string;
            orderId: string;
            content: string;
            username: string;
        }[] | undefined;
    } | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    documentPath?: string | undefined;
    type: "UserAction" | "CustomerUpdate" | "CustomerCreate" | "OrderUpdate" | "OrderCreate";
}>;
export default OrderAuditSchema;
