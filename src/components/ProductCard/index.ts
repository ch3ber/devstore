import { ComponentView } from '@models/component.model'
import { BUTTONS_IDS } from '@models/elementsID.model'
import { Product } from '@models/product.model'

export const ProductCard = (product: Product): ComponentView => {
  const view = `
    <article class="border w-60 rounded-md" data-id=${product.id} >
      <img src="${product.preview}" alt="description" class="w-full max-h-60 object-cover" />
      <div class="p-5">
        <h2 class="font-bold text-lg">${product.name}</h2>
        <p class="h-28">${product.description}</p>
        <p class="text-zinc-600 text-sm">$${product.price} USD</p>
        <footer class="flex gap-3 mt-3">
          <a class="px-4 py-2 border border-sky-200 rounded text-sky-900 transition hover:bg-sky-50" href="/#/products/product/${product.id}">Detail</a>
          <button class="${BUTTONS_IDS.ADD_TO_CART} px-4 py-2 bg-sky-200 rounded text-sky-900 transition hover:bg-sky-300">Add to cart</button>
        </footer>
      </div>
    </article>
  `
  return view
}
