import { formatCurrency } from './formatCurrency';

export function buildWhatsAppMessage(cartItems, totalPrice) {
  const lines = cartItems.map(
    (item) =>
      `• ${item.name} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`
  );

  return `Hola, quiero hacer este pedido:%0A%0A${lines.join(
    '%0A'
  )}%0A%0ATotal: ${formatCurrency(
    totalPrice
  )}%0A%0ANombre:%0ADirección:%0AForma de pago:`;
}