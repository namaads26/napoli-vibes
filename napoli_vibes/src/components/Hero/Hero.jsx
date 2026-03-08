import "./Hero.css"
import hero from "../../assets/images/hero.jpg"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()

  function goToMenu() {
    navigate("/menu")
  }

  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="overlay"></div>

      <div className="hero-content">
        <span className="tag">NAPOLI VIBES</span>

        <h1>El antojo empieza acá.</h1>

        <p>
          Pizzas irresistibles, bien cargadas y listas para pedir desde tu celu.
        </p>

        <button onClick={goToMenu}>Ver menú</button>
      </div>
    </section>
  )
}