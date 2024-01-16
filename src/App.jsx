import { ReactComponent as SearchIcon } from '../src/assets/icons/search.svg'
import sneakers1 from './assets/imgs/sneakers-1.jpg'
import sneakers2 from './assets/imgs/sneakers-2.jpg'
import sneakers3 from './assets/imgs/sneakers-3.jpg'
import sneakers4 from './assets/imgs/sneakers-4.jpg'
import sneakers5 from './assets/imgs/sneakers-5.jpg'
import sneakers6 from './assets/imgs/sneakers-6.jpg'
import sneakers7 from './assets/imgs/sneakers-7.jpg'
import sneakers8 from './assets/imgs/sneakers-8.jpg'
import sneakers9 from './assets/imgs/sneakers-9.jpg'
import sneakers10 from './assets/imgs/sneakers-10.jpg'
import Card from './components/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import { useState } from 'react'

const items = [
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgSrc: sneakers1 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgSrc: sneakers2 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgSrc: sneakers3 },
  { _id: crypto.randomUUID(), title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgSrc: sneakers4 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imgSrc: sneakers5 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imgSrc: sneakers6 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imgSrc: sneakers7 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imgSrc: sneakers8 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imgSrc: sneakers9 },
  { _id: crypto.randomUUID(), title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imgSrc: sneakers10 },
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
