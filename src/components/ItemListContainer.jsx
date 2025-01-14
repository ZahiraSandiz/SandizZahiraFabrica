const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1 className="item-list-container__title">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
