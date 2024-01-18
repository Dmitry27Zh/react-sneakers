import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    async function fetchData() {
      const responseItems = await axios.get('https://65a61ad374cf4207b4ef4757.mockapi.io/items')
      const responseCart = await axios.get('https://65a61ad374cf4207b4ef4757.mockapi.io/cart')
      const responseFavorites = await axios.get('https://65a7e40e94c2c5762da7d713.mockapi.io/favorites')
      setCartItems(responseCart.data)
      setFavoriteItems(responseFavorites.data)
      setItems(responseItems.data)
    }
    fetchData()
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
  const handleFavoriteAdd = (item) => {
    const isAdded = favoriteItems.some((favoriteItem) => favoriteItem._id === item._id)

    if (!isAdded) {
      axios
        .post('https://65a7e40e94c2c5762da7d713.mockapi.io/favorites', item)
        .then((res) => setFavoriteItems((prevState) => [...prevState, res.data]))
    }
  }
  const handleFavoriteRemove = (item) => {
    const isAdded = favoriteItems.some((favoriteItem) => favoriteItem._id === item._id)

    if (isAdded) {
      const favoriteItem = favoriteItems.find((favoriteItem) => favoriteItem._id === item._id)
      axios.delete(`https://65a7e40e94c2c5762da7d713.mockapi.io/favorites/${favoriteItem.id}`).then(() => {
        setFavoriteItems((prevState) => prevState.filter((currentItem) => currentItem._id !== item._id))
      })
    }
  }

  return (
    <div className="wrapper clear">
      <CartDrawer isCartOpen={isCartOpen} onClose={handleCartClose} items={cartItems} onItemRemove={handleCartRemove} />
      <Header onCartOpen={handleCartOpen} />
      <main className="content p-40">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                items={items}
                cartItems={cartItems}
                favoriteItems={favoriteItems}
                handleCartAdd={handleCartAdd}
                handleCartRemove={handleCartRemove}
                handleFavoriteAdd={handleFavoriteAdd}
                handleFavoriteRemove={handleFavoriteRemove}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                items={favoriteItems}
                cartItems={cartItems}
                favoriteItems={favoriteItems}
                handleCartAdd={handleCartAdd}
                handleCartRemove={handleCartRemove}
                handleFavoriteAdd={handleFavoriteAdd}
                handleFavoriteRemove={handleFavoriteRemove}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
