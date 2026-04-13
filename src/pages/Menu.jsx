import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingCartButton from '../components/layout/FloatingCartButton';
import ProductCard from '../components/menu/ProductCard';
import products from '../data/products';
import './Menu.css';

function Menu() {
  return (
    <>
      <Header />

      <main className="menu-page">
        <section className="menu-page__hero">
          <div className="menu-page__hero-content">
            <span>Menú</span>
            <h1>Elegí tu próxima pizza favorita</h1>
            <p>
              Hechas para tentar, pedir y repetir.
            </p>
          </div>
        </section>

        <section className="menu-page__grid-section">
          <div className="menu-page__grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <FloatingCartButton />
      <Footer />
    </>
  );
}

export default Menu;