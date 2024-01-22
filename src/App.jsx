import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AppContext from './contexts/AppContext'
import Orders from './pages/Orders'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const [responseItems, responseCart, responseFavorites] = await Promise.all([
          axios.get('https://65a61ad374cf4207b4ef4757.mockapi.io/items'),
          axios.get('https://65a61ad374cf4207b4ef4757.mockapi.io/cart'),
          axios.get('https://65a7e40e94c2c5762da7d713.mockapi.io/favorites'),
        ])
        setCartItems(responseCart.data)
        setFavoriteItems(responseFavorites.data)
        setItems(responseItems.data)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
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
        .catch((e) => alert(e))
    }
  }
  const handleCartRemove = (item) => {
    const isAdded = cartItems.some((cartItem) => cartItem._id === item._id)

    if (isAdded) {
      const cartItem = cartItems.find((currentItem) => currentItem._id === item._id)
      axios
        .delete(`https://65a61ad374cf4207b4ef4757.mockapi.io/cart/${cartItem.id}`)
        .then(() => {
          setCartItems((prevState) => prevState.filter((currentItem) => currentItem._id !== item._id))
        })
        .catch((e) => alert(e))
    }
  }
  const handleFavoriteAdd = (item) => {
    const isAdded = favoriteItems.some((favoriteItem) => favoriteItem._id === item._id)

    if (!isAdded) {
      axios
        .post('https://65a7e40e94c2c5762da7d713.mockapi.io/favorites', item)
        .then((res) => setFavoriteItems((prevState) => [...prevState, res.data]))
        .catch((e) => alert(e))
    }
  }
  const handleFavoriteRemove = (item) => {
    const isAdded = favoriteItems.some((favoriteItem) => favoriteItem._id === item._id)

    if (isAdded) {
      const favoriteItem = favoriteItems.find((favoriteItem) => favoriteItem._id === item._id)
      axios
        .delete(`https://65a7e40e94c2c5762da7d713.mockapi.io/favorites/${favoriteItem.id}`)
        .then(() => {
          setFavoriteItems((prevState) => prevState.filter((currentItem) => currentItem._id !== item._id))
        })
        .catch((e) => alert(e))
    }
  }

  return (
    <AppContext.Provider
      value={{ items, cartItems, setCartItems, favoriteItems, isCartOpen, handleCartOpen, handleCartClose }}
    >
      <div className="wrapper clear">
        <CartDrawer onClose={handleCartClose} items={cartItems} onItemRemove={handleCartRemove} />
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
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  cartItems={cartItems}
                  handleCartAdd={handleCartAdd}
                  handleCartRemove={handleCartRemove}
                  handleFavoriteAdd={handleFavoriteAdd}
                  handleFavoriteRemove={handleFavoriteRemove}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </AppContext.Provider>
  )
}

export default App
