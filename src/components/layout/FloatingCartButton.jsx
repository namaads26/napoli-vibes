import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './FloatingCartButton.css';

function FloatingCartButton() {
  const { totalItems } = useCart();

  return (
    <Link to="/carrito" className="floating-cart">
      <span className="floating-cart__icon">🛒</span>
      {totalItems > 0 && <span className="floating-cart__badge">{totalItems}</span>}
    </Link>
  );
}

export default FloatingCartButton;