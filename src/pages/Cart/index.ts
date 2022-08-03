import { appStorage } from '@utils/localstorage'
import { ProductCard } from '@components/ProductCard'
import { getFromDatabase } from '@utils/getFromDababase'
import { Layout } from '@components/Layout'

export const Cart = async () => {
  const userProducts = await appStorage.getItem('cart')
  const dbProducts = await getFromDatabase('products')

  const cart = []

  // add the user products to cart
  for (let i = 0; i < dbProducts.length; i++) {
    const dbProduct = dbProducts[i]

    if (userProducts.includes(dbProduct.id.toString())) {
      cart.push(dbProduct)
    }
  }

  const DELETE_BUTTON_ID = 'cart__delete-button'
  const DELETE_ALL_BUTTON_ID = 'cart__buy-button'

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
            ${ProductCard(
              product.id,
              product.name,
              product.price,
              product.preview,
              product.description
            )}
            <button class="${DELETE_BUTTON_ID} w-full px-4 py-2 bg-red-200 rounded text-red-900 transition hover:bg-red-300">Delete Product</button>
          </div>
        `
        })
        .join('')}
    </main>
    <div class="flex justify-center items-center mt-10">
      <button id="${DELETE_ALL_BUTTON_ID}" class="w-40 px-4 py-2 bg-blue-600 rounded text-white transition hover:bg-blue-500">Buy all producs</button>
    </div>
  `
  return Layout(view)
}
