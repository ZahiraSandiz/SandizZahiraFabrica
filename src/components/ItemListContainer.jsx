import imagen from "../assets/fondos/videos/5.mp4";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => {
    alert(`agregaste ${cantidad} a tu carrito`);
  };
  return (
    <>
      <div className="item-list-container">
        <video
          autoPlay
          muted
          loop
          aria-hidden="true"
          className="item-list-container__video"
        >
          <source src={imagen} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <h1 className="item-list-container__title">{greeting}</h1>
      </div>
      <ItemCount stock={9} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
