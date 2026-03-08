import muzza from "../assets/images/muzza.jpg"
import napolitana from "../assets/images/napolitana.jpg"
import fugazzeta from "../assets/images/fugazzeta.jpg"

export const menu = [
  {
    id: 1,
    name: "Muzzarella",
    desc: "Salsa casera, mozzarella y orégano.",
    price: 8000,
    img: muzza,
    popular: true
  },
  {
    id: 2,
    name: "Napolitana",
    desc: "Mozzarella, tomate fresco, ajo y albahaca.",
    price: 9200,
    img: napolitana,
    popular: true
  },
  {
    id: 3,
    name: "Fugazzeta",
    desc: "Mozzarella, cebolla caramelizada.",
    price: 9800,
    img: fugazzeta,
    popular: false
  }
]