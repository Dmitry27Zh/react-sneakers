import { useState, useContext } from 'react'
import Items from '../../components/Items'
import AppContext from '../../contexts/AppContext'

const Favorites = ({
  cartItems,
  handleCartAdd,
  handleCartRemove,
  handleFavoriteAdd,
  handleFavoriteRemove,
  isLoading,
}) => {
  const { favoriteItems } = useContext(AppContext)
  const [itemsToRender] = useState(favoriteItems)

  return (
    <>
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои покупки</h1>
      </div>
      <Items
        items={itemsToRender}
        cartItems={cartItems}
        favoriteItems={favoriteItems}
        handleCartAdd={handleCartAdd}
        handleCartRemove={handleCartRemove}
        handleFavoriteAdd={handleFavoriteAdd}
        handleFavoriteRemove={handleFavoriteRemove}
        isLoading={isLoading}
      />
    </>
  )
}

export default Favorites
