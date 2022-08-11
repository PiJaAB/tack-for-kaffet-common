import { z } from 'zod';

const OrderStatusSchema = z.union([
  // z.literal('ready'),
  z.literal('Aborted'), // Avbruten https://developer.swedbankpay.com/checkout-v3/enterprise/features/technical-reference/status-models
  z.literal('Cancelled'), // Avbruten (not yet converted to Swedbank Checkout v3)
  z.literal('Failed'), // Misslyckad
  z.literal('Initialized'), // Initerad
  z.literal('Paid'), // Betalad
  z.literal('Ready'), // Redo
  z.literal('Pending'), // Pendlande

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

export default OrderStatusSchema;
