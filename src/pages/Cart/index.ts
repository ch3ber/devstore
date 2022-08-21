import { appStorage } from '@utils/localstorage'
import { ProductCard } from '@components/ProductCard'
import { getFromDatabase } from '@utils/getFromDababase'
import { Layout } from '@components/Layout'
import { ComponentView } from '@models/component.model'
import { Product, ProductId } from '@models/product.model'
import { BUTTONS_IDS } from '@models/elementsID.model'

export const Cart = async (): Promise<ComponentView> => {
  const userProducts: ProductId[] = await appStorage.getItem('cart')
  const dbProducts = await getFromDatabase('products') as Product[]

  const cart: Product[] = []

  // add the user products to cart
  dbProducts.forEach(product => {
    if (userProducts.includes(product.id)) {
      cart.push(product)
    }
  })

  const view = `
    <div class="mb-10 mt-14">
      <h1 class="text-2xl font-bold text-center text-sky-600"><span class="mr-3"><i class="fa-solid fa-cart-shopping"></i></span>Cart</h1>
      <p class="text-center">The best products for software developers</p>
    </div>
    <main class="flex flex-wrap gap-10 px-10 justify-center">
      ${cart
        .map((product) => {
          return `
          <div>
            ${ProductCard(product)}
            <button class="${BUTTONS_IDS.DELETE_PRODUCT} w-full px-4 py-2 bg-red-200 rounded text-red-900 transition hover:bg-red-300">Delete Product</button>
          </div>
        `
        })
        .join('')}
    </main>
    <div class="flex justify-center items-center mt-10">
      <button id="${BUTTONS_IDS.DELETE_ALL_PRODUCTS}" class="w-40 px-4 py-2 bg-blue-600 rounded text-white transition hover:bg-blue-500">Buy all producs</button>
    </div>
  `
  return Layout(view)
}
