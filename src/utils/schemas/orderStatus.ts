import { z } from 'zod';

const OrderStatusSchema = z.union([
  z.literal('pending'),               // Inväntar betalning
  z.literal('manual-processing'),     // Manuell behandling
  z.literal('processing'),            // Behandlas
  z.literal('on-hold'),               // Pausad
  z.literal('completed'),             // Färdigbehandlad
  z.literal('cancelled'),             // Avbruten
  z.literal('refunded'),              // Återbetald
  z.literal('failed'),                // Misslyckad
  z.literal('unknown'),               // Okänt fel
]);

export default OrderStatusSchema;
