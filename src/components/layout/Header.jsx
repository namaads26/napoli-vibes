import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__brand">
          <img
            src="/images/logo-napoli.png"
            alt="Napoli Vibes"
            className="header__logo"
          />
          <span>Napoli Vibes</span>
        </Link>

        <nav className="header__nav">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Inicio
          </Link>
          <Link
            to="/menu"
            className={location.pathname === '/menu' ? 'active' : ''}
          >
            Menú
          </Link>
          <Link
            to="/carrito"
            className={location.pathname === '/carrito' ? 'active' : ''}
          >
            Carrito
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;