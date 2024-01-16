import { ReactComponent as SearchIcon } from '../src/assets/icons/search.svg'
import Card from './components/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  useEffect(() => {
    fetch('https://65a61ad374cf4207b4ef4757.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])
  const handleCartOpen = () => {
    setIsCartOpen(true)
  }
  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (
    <div className="wrapper clear">
      <CartDrawer isCartOpen={isCartOpen} onClose={handleCartClose} />
      <Header onCartOpen={handleCartOpen} />
      <main className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <SearchIcon className="search__icon" width={15} height={16} />
            <input className="search__input" type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item._id}
              {...item}
              isFavorite={false}
              isAdded={false}
              onCart={() => console.log('Cart')}
              onFavorite={() => console.log('Favorite')}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
