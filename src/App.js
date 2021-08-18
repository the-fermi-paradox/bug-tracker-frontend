import "./App.css";
import React, { useState } from "react";
import NavPanel from "./components/nav/nav_panel.js";
import ProductPanel from "./components/product_nav/product_panel.js";
import Main from "./components/main/main.js";

const App = () => {
  const [view, setView] = useState(0);
  const SwitchViewByProduct = (event) => {
    const productId = parseInt(
      event.target.closest(".product").dataset.product,
      10
    );
    console.log(productId);
    setView(productId);
    console.log("clicked");
  };

  return (
    <div className="App">
      <NavPanel />
      <ProductPanel callback={SwitchViewByProduct} />
      <Main view={view} />
    </div>
  );
};

export default App;
