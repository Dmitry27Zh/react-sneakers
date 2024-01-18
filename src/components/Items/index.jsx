import Card from '../../components/Card'

const Items = ({
  items,
  cartItems,
  favoriteItems,
  handleCartAdd,
  handleCartRemove,
  handleFavoriteAdd,
  handleFavoriteRemove,
}) => {
  return items.map((item) => {
    const isCart = cartItems.some((cartItem) => cartItem._id === item._id)
    const isFavorite = favoriteItems?.some((favoriteItem) => favoriteItem._id === item._id)

    return (
      <Card
        key={item._id}
        {...item}
        isFavorite={isFavorite}
        isAdded={isCart}
        onCartAdd={() => handleCartAdd(item)}
        onCartRemove={() => handleCartRemove(item)}
        onFavoriteAdd={() => handleFavoriteAdd(item)}
        onFavoriteRemove={() => handleFavoriteRemove(item)}
      />
    )
  })
}

export default Items
