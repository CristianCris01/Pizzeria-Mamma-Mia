import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/context";
import { UserContext } from "../context/authContext";

function Cart() {
  const { token, user } = useContext(UserContext);
  const { cart, total, updatePizzaCount } = useContext(GlobalContext);

  const formatPrice = (price) => price.toLocaleString("es-CL");

  const handleCheckout = async () => {
    if (!user?.token) {
      alert("Debes iniciar sesion para pagar");
      return;
    }

    if (cart.length === 0) {
      alert("El carrito esta vacio");
      return;
    }

    try {
      const respuesta = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await respuesta.json();

      if (!respuesta.ok) {
        alert(data.error || "No se pudo realizar el pedido");
        return;
      }

      alert(data.message || "Pedido realizado correctamente");
    } catch {
      alert("Error al conectar con el servidor");
    }
  };

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
        <Button
          variant="dark"
          disabled={!token || cart.length === 0}
          onClick={handleCheckout}
        >
          Pagar
        </Button>
      </section>
    </main>
  );
}

export default Cart;
