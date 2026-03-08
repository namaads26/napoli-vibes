import "./Menu.css"
import { menu } from "../../data/menu"

export default function Menu({ addProduct }) {
  const popularPizzas = menu.filter((pizza) => pizza.popular)

  return (
    <section className="menu">
      <div className="menu-title">
        <span>NUESTRAS PIZZAS</span>
        <h2>Elegí tu favorita</h2>
      </div>

      <div className="popular-section">
        <h3>Las más pedidas</h3>

        <div className="menu-grid">
          {popularPizzas.map((pizza) => (
            <div className="card" key={pizza.id}>
              <div className="card-image-box">
                <img src={pizza.img} alt={pizza.name} />
                <span className="card-badge">TOP</span>
              </div>

              <div className="card-body">
                <h3>{pizza.name}</h3>
                <p>{pizza.desc}</p>

                <div className="card-bottom">
                  <span>${pizza.price}</span>
                  <button onClick={() => addProduct(pizza)}>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="all-menu-section">
        <h3>Menú completo</h3>

        <div className="menu-grid">
          {menu.map((pizza) => (
            <div className="card" key={pizza.id}>
              <div className="card-image-box">
                <img src={pizza.img} alt={pizza.name} />
              </div>

              <div className="card-body">
                <h3>{pizza.name}</h3>
                <p>{pizza.desc}</p>

                <div className="card-bottom">
                  <span>${pizza.price}</span>
                  <button onClick={() => addProduct(pizza)}>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}