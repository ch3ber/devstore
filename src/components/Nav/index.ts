export const Nav = (): string => {
  const view = `
    <nav class="p-5 flex gap-5 items-center justify-center flex-col">
      <h2 class="text-violet-800 text-2xl font-bold">EIAO Pet Store</h2>
      <ul class="flex gap-7 items-center justify-center">
        <li>
          <a href="/" class="px-4 py-2 bg-amber-200 rounded text-amber-900 transition hover:bg-amber-300">Home</a>
        </li>
        <li>
          <button id="logInButton" class="px-4 py-2 bg-amber-200 rounded text-amber-900 transition hover:bg-amber-300" >LogIn</button>
        </li>
      </ul>
    </nav>
  `
  return view
}

// <li>
// <a href="/#/login" class="nav__link nav__link--button">Login</a>
// </li>
