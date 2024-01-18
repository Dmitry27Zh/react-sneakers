import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import Items from '../../components/Items'

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
        <Items
          cartItems={cartItems}
          favoriteItems={favoriteItems}
          items={itemsToRender}
          handleCartAdd={handleCartAdd}
          handleCartRemove={handleCartRemove}
          handleFavoriteAdd={handleFavoriteAdd}
          handleFavoriteRemove={handleFavoriteRemove}
        />
      </div>
    </>
  )
}

export default Home
