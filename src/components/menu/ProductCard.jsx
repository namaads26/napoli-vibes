import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-card__footer">
          <strong>{formatCurrency(product.price)}</strong>
          <button onClick={() => addToCart(product)}>Agregar</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;