import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/context";

function Cart() {
  const { cart, total, updatePizzaCount } = useContext(GlobalContext);

  const formatPrice = (price) => price.toLocaleString("es-CL");

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
