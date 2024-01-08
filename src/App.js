function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <a className="logo" href="/">
          <svg />
          <div className="logo__info">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </a>
        <ul className="navigation">
          <li className="navigation__item">
            <svg />
            <span>1205 руб.</span>
          </li>
        </ul>
      </header>
      <main className="content">
        <h1>Все кроссовки</h1>
      </main>
    </div>
  )
}

export default App
