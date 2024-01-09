import logo from '../src/assets/icons/logo.png'
import { ReactComponent as CartIcon } from '../src/assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../src/assets/icons/favorite.svg'
import { ReactComponent as ProfileIcon } from '../src/assets/icons/profile.svg'
import { ReactComponent as PlusIcon } from '../src/assets/icons/plus.svg'
import { ReactComponent as TickIcon } from '../src/assets/icons/tick.svg'
import { ReactComponent as HeartActiveIcon } from '../src/assets/icons/heart-active.svg'
import { ReactComponent as HeartInactiveIcon } from '../src/assets/icons/heart-inactive.svg'
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

function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <a className="logo d-flex align-center" href="/">
          <img className="logo__icon" width={40} height={40} src={logo} alt="Logo" />
          <div className="logo__info">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </a>
        <ul className="navigation d-flex flex-wrap justify-end">
          <li className="navigation-item d-flex align-center">
            <CartIcon className="navigation-item__icon" width={20} height={20} />
            <span>1205 руб.</span>
          </li>
          <li className="navigation-item d-flex align-center">
            <FavoriteIcon className="navigation-item__icon" width={19} height={17} />
            <span>Закладки</span>
          </li>
          <li className="navigation-item d-flex align-center">
            <ProfileIcon className="navigation-item__icon" width={18} height={18} />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <main className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <SearchIcon className="search__icon" width={15} height={16} />
            <input className="search__input" type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products d-flex flex-wrap justify-center">
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers1} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartInactiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers2} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Air Max 270</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <TickIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers3} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers4} alt="Product" />
            <h3 className="card__title">Кроссовки Puma X Aka Boku Future Rider</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers5} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Under Armour Curry 8</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>15 199 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers6} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Kyrie 7</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers7} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Jordan Air Jordan 11</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>10 799 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers8} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike LeBron XVIII</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>16 499 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers9} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Lebron XVIII Low</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>13 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers1} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers4} alt="Product" />
            <h3 className="card__title">Кроссовки Puma X Aka Boku Future Rider</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
          <article className="card p-20">
            <button className="button card__favorite-btn">
              <HeartActiveIcon className="button__icon" width={32} height={32} />
            </button>
            <img width={113} height={112} src={sneakers10} alt="Product" />
            <h3 className="card__title">Мужские Кроссовки Nike Kyrie Flytrap IV</h3>
            <footer className="d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <PlusIcon className="button__icon" width={32} height={32} />
              </button>
            </footer>
          </article>
        </div>
      </main>
    </div>
  )
}

export default App
