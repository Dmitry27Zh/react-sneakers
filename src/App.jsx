import { ReactComponent as SearchIcon } from '../src/assets/icons/search.svg'
import Card from './components/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import { useState } from 'react'

const items = [
  { _id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgSrc: '/imgs/sneakers-1.jpg' },
  { _id: 2, title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgSrc: '/imgs/sneakers-2.jpg' },
  { _id: 3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgSrc: '/imgs/sneakers-3.jpg' },
  { _id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgSrc: '/imgs/sneakers-4.jpg' },
  { _id: 5, title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imgSrc: '/imgs/sneakers-5.jpg' },
  { _id: 6, title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imgSrc: '/imgs/sneakers-6.jpg' },
  { _id: 7, title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imgSrc: '/imgs/sneakers-7.jpg' },
  { _id: 8, title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imgSrc: '/imgs/sneakers-8.jpg' },
  { _id: 9, title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imgSrc: '/imgs/sneakers-9.jpg' },
  { _id: 10, title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imgSrc: '/imgs/sneakers-10.jpg' },
]

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
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
