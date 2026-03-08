import "./Cart.css"

export default function Cart({
  cart,
  cartOpen,
  toggleCart,
  addProduct,
  removeProduct,
  sendOrder
}) {
  let total = 0
  let totalProducts = 0

  cart.forEach((item) => {
    total += item.price * item.quantity
    totalProducts += item.quantity
  })

  return (
    <>
      <button className="cart-toggle" onClick={toggleCart}>
        🛒
        {totalProducts > 0 && (
          <span className="cart-count">{totalProducts}</span>
        )}
      </button>

      {cartOpen && (
        <div className="cart-panel">
          <div className="cart-header">
            <h3>Tu pedido</h3>
            <button className="cart-close" onClick={toggleCart}>×</button>
          </div>

          {cart.length === 0 ? (
            <p className="cart-empty">Todavía no agregaste nada 🍕</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-info">
                    <p>{item.name}</p>
                    <small>${item.price} c/u</small>
                  </div>

                  <div className="cart-actions">
                    <button onClick={() => removeProduct(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addProduct(item)}>+</button>
                  </div>
                </div>
              ))}

              <h4>Total: ${total}</h4>

              <button className="cart-order-btn" onClick={sendOrder}>
                Pedir por WhatsApp
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}