import { useState } from "react";
import { GlobalContext } from "./context";

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.count,
    0
  );

  const addToCart = (pizza) => {
    setCart((currentCart) => {
      const pizzaExists = currentCart.find((item) => item.id === pizza.id);

      if (pizzaExists) {
        return currentCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...currentCart, { ...pizza, count: 1 }];
    });
  };

  const updatePizzaCount = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count + amount }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  return (
    <GlobalContext.Provider value={{ cart, total, addToCart, updatePizzaCount }}>
      {children}
    </GlobalContext.Provider>
  );
};
