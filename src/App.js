import "./App.css";
import React, { useState } from "react";
import NavPanel from "./components/nav/nav_panel.js";
import ProductPanel from "./components/product_nav/product_panel.js";
import Main from "./components/main/main.js";
import MainTicket from "./components/main/ticket_details/main_ticket.js";

const App = () => {
  const [view, setView] = useState("productList");
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentTicket, setCurrentTicket] = useState(0);
  const SwitchViewByProduct = (event) => {
    const productId = parseInt(
      event.target.closest(".product").dataset.product,
      10
    );
    setView("productList");
    setCurrentProduct(productId);
  };

  const SwitchViewByTicket = (event) => {
    const ticketId = parseInt(
      event.target.closest(".ticket").dataset.ticket,
      10
    );
    setView("ticketDetails");
    setCurrentTicket(ticketId);
    console.log(currentTicket);
  };

  return (
    <div className="App">
      <NavPanel />
      {view === "productList" && (
        <>
          <ProductPanel callback={SwitchViewByProduct} />
          <Main
            view={view}
            ticket={currentProduct}
            callback={SwitchViewByTicket}
          />
        </>
      )}
      {view === "ticketDetails" && (
        <>
          <MainTicket id={currentTicket} />
        </>
      )}
    </div>
  );
};

export default App;
