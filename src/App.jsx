import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a FABRICA" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
