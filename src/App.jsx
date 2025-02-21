import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextileCare from "./components/TextileCare";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a FABRICA" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cuidadotextil" element={<TextileCare />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
