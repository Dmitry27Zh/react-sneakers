import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import Navigation from '../Navigation'

const Header = ({ onCartOpen }) => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <Link className="logo d-flex align-center" to="/">
        <img className="logo__icon" width={40} height={40} src={logo} alt="Logo" />
        <div className="logo__info">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </Link>
      <Navigation onCartOpen={onCartOpen} />
    </header>
  )
}

export default Header
