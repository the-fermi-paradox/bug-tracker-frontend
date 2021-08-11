import "./App.css";
import NavPanel from "./components/nav/nav_panel.js";
import ProductPanel from "./components/product_nav/product_panel.js";

function App() {
  return (
    <div className="App">
      <NavPanel />
      <ProductPanel />
    </div>
  );
}

export default App;
