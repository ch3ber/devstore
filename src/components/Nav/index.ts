export const Nav = (): string => {
  const LINK_STYLES =
    'flex flex-col gap-1 items-center border border-zinc-200 px-4 py-2 rounded text-zinc-700 transition hover:bg-zinc-100 hover:-translate-y-2'

  const view = `
    <nav class="p-5 flex gap-5 items-center justify-center flex-col">
      <h2 class="text-zinc-900 text-4xl font-bold">DevStore</h2>
      <ul class="flex gap-7 items-center justify-center flex-wrap sm:flex-nowrap">
        <li>
          <a href="/#/" class="${LINK_STYLES}"><span><i class="fa-solid fa-house"></i></span>Home</a>
        </li>
        <li>
          <a href="/#/" class="${LINK_STYLES}"><span><i class="fa-solid fa-shirt"></i></span>Shirts</a>
        </li>
        <li>
          <a href="/#/" class="${LINK_STYLES}"><span><i class="fa-regular fa-note-sticky"></i></span>Stickers</a>
        </li>
        <li>
          <a href="/#/" class="${LINK_STYLES}"><span><i class="fa-solid fa-tags"></i></span>All Products</a>
        </li>
        <li>
          <button id="logInButton" class="${LINK_STYLES}" ><span><i class="fa-solid fa-right-to-bracket"></i></span>LogIn</button>
        </li>
      </ul>
    </nav>
  `
  return view
}

// <li>
// <a href="/#/login" class="nav__link nav__link--button">Login</a>
// </li>
