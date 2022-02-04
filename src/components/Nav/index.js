export const Nav = () => {
  console.log('render nav')
  const view = `
    <nav class="nav">
      <a href="/" class="nav__link">
        <h2 nav__logo>EIAO Pet Store</h2>
      </a>
      <ul class="nav__list">
        <li>
          <button class="nav__link nav__link--button" id="loginButton">Login</button>
        </li>
      </ul>
    </nav>
  `
  return view
}

// <li>
// <a href="/#/login" class="nav__link nav__link--button">Login</a>
// </li>
