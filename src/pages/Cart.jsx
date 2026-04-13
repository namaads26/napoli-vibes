import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CartItem from '../components/menu/CartItem';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { buildWhatsAppMessage } from '../utils/whatsappMessage';
import './Cart.css';

function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart();

  const whatsappNumber = '5493510000000';

  const handleSendOrder = () => {
    if (!cartItems.length) return;

    const message = buildWhatsAppMessage(cartItems, totalPrice);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />

      <main className="cart-page">
        <section className="cart-page__container">
          <div className="cart-page__top">
            <span>Tu pedido</span>
            <h1>Carrito</h1>
            <p>Revisá todo antes de mandarlo por WhatsApp.</p>
          </div>

          {!cartItems.length ? (
            <div className="cart-page__empty">
              <h2>Tu carrito está vacío</h2>
              <p>Agregá unas pizzas y volvamos a hablar.</p>
            </div>
          ) : (
            <div className="cart-page__content">
              <div className="cart-page__items">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <aside className="cart-page__summary">
                <h2>Resumen</h2>

                <div className="cart-page__summary-row">
                  <span>Total</span>
                  <strong>{formatCurrency(totalPrice)}</strong>
                </div>

                <button
                  className="cart-page__primary-button"
                  onClick={handleSendOrder}
                >
                  Enviar pedido por WhatsApp
                </button>

                <button
                  className="cart-page__secondary-button"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>
              </aside>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Cart;