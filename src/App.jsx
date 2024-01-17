import { useEffect, useState } from 'react'
import axios from 'axios'
import { ReactComponent as SearchIcon } from '../src/assets/icons/search.svg'
import Card from './components/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://65a61ad374cf4207b4ef4757.mockapi.io/items').then((res) => setItems(res.data))
    axios.get('https://65a61ad374cf4207b4ef4757.mockapi.io/cart').then((res) => setCartItems(res.data))
  }, [])
  const handleCartOpen = () => {
    setIsCartOpen(true)
  }
  const handleCartClose = () => {
    setIsCartOpen(false)
  }
  const handleCartAdd = (item) => {
    const isAdded = cartItems.some((cartItem) => cartItem._id === item._id)

    if (!isAdded) {
      axios
        .post('https://65a61ad374cf4207b4ef4757.mockapi.io/cart', item)
        .then((res) => setCartItems((prevState) => [...prevState, res.data]))
    }
  }
  const handleCartRemove = (item) => {
    const isAdded = cartItems.some((cartItem) => cartItem._id === item._id)

    if (isAdded) {
      const cartItem = cartItems.find((currentItem) => currentItem._id === item._id)
      axios.delete(`https://65a61ad374cf4207b4ef4757.mockapi.io/cart/${cartItem.id}`).then(() => {
        setCartItems((prevState) => prevState.filter((currentItem) => currentItem._id !== item._id))
      })
    }
  }
  const searchValue = search.trim()
  const title = !!searchValue ? `Поиск по запросу: "${search.trim()}"` : 'Все кроссовки'
  const itemsToRender = items.filter((item) => item.title.trim().toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="wrapper clear">
      <CartDrawer isCartOpen={isCartOpen} onClose={handleCartClose} items={cartItems} onItemRemove={handleCartRemove} />
      <Header onCartOpen={handleCartOpen} />
      <main className="content p-40">
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
            const isAdded = cartItems.some((cartItem) => cartItem._id === item._id)

            return (
              <Card
                key={item._id}
                {...item}
                isFavorite={false}
                isAdded={isAdded}
                onCartAdd={() => handleCartAdd(item)}
                onCartRemove={() => handleCartRemove(item)}
                onFavorite={() => console.log('Favorite')}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
