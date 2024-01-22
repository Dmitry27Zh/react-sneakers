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
  isInteractive = true,
}) => {
  const itemsToRender = isLoading ? Array.from({ length: 10 }, (_, index) => ({ _id: index })) : items

  return itemsToRender.map((item) => {
    const props = isInteractive
      ? {
          isFavorite: favoriteItems.some((favoriteItem) => favoriteItem._id === item._id),
          isAdded: cartItems.some((cartItem) => cartItem._id === item._id),
          onCartAdd: () => handleCartAdd(item),
          onCartRemove: () => handleCartRemove(item),
          onFavoriteAdd: () => handleFavoriteAdd(item),
          onFavoriteRemove: () => handleFavoriteRemove(item),
        }
      : {}

    return <Card key={item._id} isLoading={isLoading} isInteractive={isInteractive} {...item} {...props} />
  })
}

export default Items
