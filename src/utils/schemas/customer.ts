import { z } from 'zod';
import AddressSchema from './address';

const CustomerSchema = z.object({
  id: z.string().optional(),
  externalID: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  ssn: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  emailSubscription: z.boolean().optional(),
  about: z.string().optional(),
  website: z.string().optional(),
  imageUrl: z.string().optional(),
  profileImageHash: z.string().optional(),
  address: AddressSchema.optional(),
  billingAddress: AddressSchema.optional(),

  // - flag that customer is already a subscriber but is allowed to pay early (beforehand).
  subscriberAndCanPayInAdvance: z.boolean().optional(),
  updatedBy: z.string().optional(),

  /**
   * Duplicated data from other parts of the database.
   * This is to make it easier to query for customers.
   * This data is not guaranteed to be up to date,
   * and should not be used for anything critical.
   */
  convenientListData_uncertain: z
    .object({
      subscriptions: z
        .record(
          z
            .object({
              status: z.string(),
            })
            .optional(),
        )
        .optional(),
    })
    .optional(),
});

export default CustomerSchema;
