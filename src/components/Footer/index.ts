export const Footer = () => {
  const view = `
    <footer class="mt-12 p-10 bg-zinc-100 w-full">
      <div class="mx-auto flex flex-col md:flex-row gap-7 justify-between max-w-5xl">
        <section>
          <h2 class="text-zinc-600 text-xl">Developer</h2>
          <p class="text-lg text-zinc-500">Eber Alejo - Web Dev</p>
        </section>

        <section>
          <h2 class="text-zinc-600 text-xl">Credits</h2>
          <p class="text-zinc-500">Product images are from the official <a class="underline hover:text-zinc-400" href="https://thegithubshop.com" target="_blank">GitHub Shop</a></p>
        </section>
    
        <section>
          <h2 class="text-zinc-600 text-xl">Links</h2>
          <ul class="text-zinc-500 flex gap-5">
            <li>
              <a class="hover:text-zinc-400 hover:underline" href="https://github.com/ch3ber" target="_blank"><span class="mr-2"><i class="fa-brands fa-github"></i></span>GitHub</a>
            </li>
            <li>
              <a class="hover:text-zinc-400 hover:underline" href="https://twitter.com/ch3ber_dev" target="_blank"><span class="mr-2"><i class="fa-brands fa-twitter"></i></span>Twitter</a>
            </li>
            <li>
              <a class="hover:text-zinc-400 hover:underline" href="https://ch3ber.github.io" target="_blank"><span class="mr-2"><i class="fa-solid fa-globe"></i></span>Web</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  `
  return view
}
