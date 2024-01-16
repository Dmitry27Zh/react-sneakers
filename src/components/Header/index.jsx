import logo from '../../assets/icons/logo.png'
import Navigation from '../Navigation'

const Header = () => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <a className="logo d-flex align-center" href="/">
        <img className="logo__icon" width={40} height={40} src={logo} alt="Logo" />
        <div className="logo__info">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </a>
      <Navigation />
    </header>
  )
}

export default Header
