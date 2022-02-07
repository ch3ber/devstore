export const LoggedNav = () => {
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
          <a href="/#/Cart" class="nav__link">View Cart</a>
        </li>
        <li>
          <button class="nav__link nav__link--gosth-button logOutButton">LogOut</button>
        </li>
      </ul>
    </nav>
  `
  return view
}
