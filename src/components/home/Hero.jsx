import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <img
          src="/images/logo-napoli.png"
          alt="Napoli Vibes"
          className="hero__logo"
        />

        <span className="hero__eyebrow">Pizzería napolitana</span>

        <h1>
          La pizza que ves.
          <br />
          La querés pedir.
        </h1>

        <p>
          Masa aireada, borde inflado, ingredientes frescos y una pinta que te
          obliga a abrir el menú.
        </p>

        <Link to="/menu" className="hero__button">
          Conocer el menú
        </Link>
      </div>
    </section>
  );
}

export default Hero;