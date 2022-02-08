import { Footer } from '../../components/Footer'
import { appStorage } from '../../utils/localstorage'
import { ProductCard } from '../../components/ProductCard'
import { getFromDatabase } from '../../utils/getFromDababase'

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

  const view = `
  <main class="cart">
      <h1>Cart</h1>
      <div class="cart__products">
        ${cart.map(product => {
          return `
          <div class="cart__produc">
            ${ProductCard(product.id, product.name, product.price, product.preview, product.description)}
            <button class="cart__delete-button">Delete Product</button>
          </div>`
        }).join('')}
      </div>
      <button class="cart__buy-button">Buy all producs</button>
    </main>
    ${Footer()}
    `
  return view
}
