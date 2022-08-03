export const ProductCard = (
  id: number,
  name: string,
  price: number,
  preview: string,
  description: string
) => {
  const ADD_TO_CART_ID_BUTTON = 'addToCardButton'

  const view = `
    <article class="border w-60 rounded-md" data-id=${id} >
      <img src="${preview}" alt="description" class="w-full max-h-60 object-cover" />
      <div class="p-5">
        <h2 class="font-bold text-lg">${name}</h2>
        <p class="h-28">${description}</p>
        <p class="text-zinc-600 text-sm">$${price} USD</p>
        <footer class="flex gap-3 mt-3">
          <a class="px-4 py-2 border border-sky-200 rounded text-sky-900 transition hover:bg-sky-50" href="/#/detail">Detail</a>
          <button class="${ADD_TO_CART_ID_BUTTON} px-4 py-2 bg-sky-200 rounded text-sky-900 transition hover:bg-sky-300">Add to cart</button>
        </footer>
      </div>
    </article>
  `
  return view
}
