import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a FABRICA" />}
        />
        <Route
          path="/category/"
          element={<ItemListContainer greeting="Categoria: " />}
        />
        <Route path="/item/" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
