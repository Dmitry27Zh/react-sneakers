import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import Card from '../../components/Card'

const Home = ({
  items,
  search,
  setSearch,
  cartItems,
  favoriteItems,
  handleCartAdd,
  handleCartRemove,
  handleFavoriteAdd,
  handleFavoriteRemove,
}) => {
  const searchValue = search.trim()
  const title = !!searchValue ? `Поиск по запросу: "${search.trim()}"` : 'Все кроссовки'
  const itemsToRender = items.filter((item) => item.title.trim().toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <div className="d-flex justify-between align-center mb-40">
        <h1>{title}</h1>
        <div className="search d-flex">
          <SearchIcon className="search__icon" width={15} height={16} />
          <input
            className="search__input"
            type="search"
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="products d-flex flex-wrap">
        {itemsToRender.map((item) => {
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
        })}
      </div>
    </>
  )
}

export default Home
