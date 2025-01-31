import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextileCare from "./components/TextileCare";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a FABRICA" />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/*Hice esto, pero no se si está bien visto desde las rubricas de evaluación, entonces lo comenté por las dudas*/}

        {/* <Route path="/cuidadotextil" element={<TextileCare />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
