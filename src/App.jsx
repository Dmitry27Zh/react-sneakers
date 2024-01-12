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
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Drawer from './components/Drawer/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer isShown={true}>
        <Cart />
      </Drawer>
      <Header />
      <main className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <SearchIcon className="search__icon" width={15} height={16} />
            <input className="search__input" type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products d-flex flex-wrap justify-center">
          <Card imgSrc={sneakers1} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers2} isFavorite={true} isAdded={false} />
          <Card imgSrc={sneakers3} isFavorite={false} isAdded={true} />
          <Card imgSrc={sneakers4} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers5} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers6} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers7} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers8} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers9} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers1} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers4} isFavorite={false} isAdded={false} />
          <Card imgSrc={sneakers10} isFavorite={false} isAdded={false} />
        </div>
      </main>
    </div>
  )
}

export default App
