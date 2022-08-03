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
      <h1 class="text-xl font-bold text-center">Cart</h1>
      <p class="text-center">Encuentra los productos mas populares de mascotas aqui</p>
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
    <button id="${DELETE_ALL_BUTTON_ID}" class="mt-10 w-40 mx-auto px-4 py-2 bg-green-200 rounded text-green-900 transition hover:bg-green-300">Buy all producs</button>
  `
  return Layout(view)
}
