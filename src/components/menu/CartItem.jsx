import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import './CartItem.css';

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />

      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <strong>{formatCurrency(item.price)}</strong>
      </div>

      <div className="cart-item__actions">
        <div className="cart-item__quantity">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>

        <div className="cart-item__bottom">
          <span>{formatCurrency(item.price * item.quantity)}</span>
          <button
            className="cart-item__remove"
            onClick={() => removeFromCart(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;