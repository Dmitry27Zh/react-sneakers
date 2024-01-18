import Items from '../../components/Items'

const Favorites = ({
  items,
  cartItems,
  favoriteItems,
  handleCartAdd,
  handleCartRemove,
  handleFavoriteAdd,
  handleFavoriteRemove,
}) => {
  return (
    <>
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои покупки</h1>
      </div>
      <div className="products d-flex flex-wrap">
        <Items
          items={items}
          cartItems={cartItems}
          favoriteItems={favoriteItems}
          handleCartAdd={handleCartAdd}
          handleCartRemove={handleCartRemove}
          handleFavoriteAdd={handleFavoriteAdd}
          handleFavoriteRemove={handleFavoriteRemove}
        />
      </div>
    </>
  )
}

export default Favorites
