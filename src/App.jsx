import Header from "./components/Header";
import Meals from "./components/Meals";
import React from "react";
import { CartContextProvider } from "./components/store/CartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
