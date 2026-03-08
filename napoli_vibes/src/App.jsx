import { useState } from "react"
import Hero from "./components/Hero/Hero"
import Menu from "./components/Menu/Menu"
import Cart from "./components/Cart/Cart"
import "./App.css"

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addProduct(product) {
    const productExists = cart.find((item) => item.id === product.id)

    if (productExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })

      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function removeProduct(id) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      .filter((item) => item.quantity > 0)

    setCart(updatedCart)
  }

  function sendOrder() {
    let message = "Hola! Este es mi pedido:%0A%0A"

    cart.forEach((item) => {
      message += `${item.name} x${item.quantity} - $${item.price * item.quantity}%0A`
    })

    let total = 0

    cart.forEach((item) => {
      total += item.price * item.quantity
    })

    message += `%0ATotal: $${total}`

    const phone = "5493510000000"
    const url = `https://wa.me/${phone}?text=${message}`

    window.open(url, "_blank")
  }

  function toggleCart() {
    setCartOpen(!cartOpen)
  }

  return (
    <>
      <Hero />
      <Menu addProduct={addProduct} />
      <Cart
        cart={cart}
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        addProduct={addProduct}
        removeProduct={removeProduct}
        sendOrder={sendOrder}
      />
    </>
  )
}