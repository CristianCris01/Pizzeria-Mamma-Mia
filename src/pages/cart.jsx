import { useState } from "react";
import Button from "react-bootstrap/Button";

export const pizzaCart = [
  {
    id: "P001",
    name: "Napolitana",
    price: 5950,
    count: 1,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    id: "P002",
    name: "Española",
    price: 7250,
    count: 1,
    img: "https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "P003",
    name: "Salame",
    price: 5990,
    count: 1,
    img: "https://images.unsplash.com/photo-1655673653787-b659d6a0165b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const formatPrice = (price) => price.toLocaleString("es-CL");

  const updatePizzaCount = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: Math.max(pizza.count + amount, 0) }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.count,
    0
  );

  return (
    <main className="cart-container">
      <section className="cart-content">
        <h4>Detalles del pedido:</h4>

        <div className="cart-list">
          {cart.map((pizza) => (
            <div className="cart-item" key={pizza.id}>
              <img src={pizza.img} alt={pizza.name} className="cart-img" />
              <span className="cart-name">{pizza.name}</span>
              <span className="cart-price">${formatPrice(pizza.price)}</span>
              <Button
                variant="outline-danger"
                className="cart-button"
                onClick={() => updatePizzaCount(pizza.id, -1)}
              >
                -
              </Button>
              <span className="cart-count">{pizza.count}</span>
              <Button
                variant="outline-primary"
                className="cart-button"
                onClick={() => updatePizzaCount(pizza.id, 1)}
              >
                +
              </Button>
            </div>
          ))}
        </div>

        <h2 className="cart-total">Total: ${formatPrice(total)}</h2>
        <Button variant="dark">Pagar</Button>
      </section>
    </main>
  );
}

export default Cart;
