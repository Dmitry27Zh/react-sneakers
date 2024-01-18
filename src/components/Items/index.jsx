import Card from '../../components/Card'

const Items = ({
  items,
  cartItems,
  favoriteItems,
  handleCartAdd,
  handleCartRemove,
  handleFavoriteAdd,
  handleFavoriteRemove,
  isLoading,
}) => {
  const itemsToRender = isLoading ? Array.from({ length: 10 }, (_, index) => ({ _id: index })) : items

  return itemsToRender.map((item) => {
    const isCart = cartItems.some((cartItem) => cartItem._id === item._id)
    const isFavorite = favoriteItems.some((favoriteItem) => favoriteItem._id === item._id)

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
        isLoading={isLoading}
      />
    )
  })
}

export default Items
