import "./App.css";
import NavPanel from "./components/nav/nav_panel.js";
import ProductPanel from "./components/product_nav/product_panel.js";
import Main from "./components/main/main.js";

function App() {
  return (
    <div className="App">
      <NavPanel />
      <ProductPanel />
      <Main />
    </div>
  );
}

export default App;
