import { z } from 'zod';

const OrderNoteSchema = z.object({
  id: z.string(),
  orderId: z.string(),
  content: z.string(),
  username: z.string(),
});

export default OrderNoteSchema;
