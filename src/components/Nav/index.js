export const Nav = () => {
  const view = `
    <nav class="nav">
      <a href="/" class="nav__link">
        <h2 nav__logo>EIAO Pet Store</h2>
      </a>
      <ul class="nav__list">
        <li>
          <a href="/" class="nav__link">Home</a>
        </li>
        <li>
          <a href="/#/requirements" class="nav__link" >Requirements</a>
        </li>
        <li>
          <button class="nav__link nav__link--button logInButton" >Login</button>
        </li>
      </ul>
    </nav>
  `
  return view
}

// <li>
// <a href="/#/login" class="nav__link nav__link--button">Login</a>
// </li>
