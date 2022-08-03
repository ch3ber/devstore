export const LoggedNav = (): string => {
  const LOG_OUT_BUTTON_ID = 'logOutButton'

  const view = `
    <nav class="p-5 flex gap-5 items-center justify-center flex-col">
      <h2 class="text-violet-800 text-2xl font-bold">EIAO Pet Store</h2>
      <ul class="flex gap-7 items-center justify-center flex-wrap md:flex-nowrap">
        <li>
          <a href="/" class="px-4 py-2 bg-amber-200 rounded text-amber-900 transition hover:bg-amber-300">Home</a>
        </li>
        <li>
          <a href="/#/Cart" class="px-4 py-2 bg-amber-200 rounded text-amber-900 transition hover:bg-amber-300" >View Cart</a>
        </li>
        <li>
          <button id="${LOG_OUT_BUTTON_ID}" class="px-4 py-2 bg-amber-200 rounded text-amber-900 transition hover:bg-amber-300" >LogOut</button>
        </li>
      </ul>
    </nav>
  `
  return view
}
