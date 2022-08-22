// imports
import '@styles/index.css'
import { Router } from './router'
import { cart } from '@cart'

// pages
import { Home } from '@pages/Home'
import { Cart } from '@pages/Cart'
import { Error404 } from '@pages/Error404'

// models
import { ComponentView } from '@models/component.model'

// components
import { renderNav } from '@utils/renderNav'
import { getFromDatabase } from '@utils/getFromDababase'
import { ProductCard } from '@components/ProductCard'
import { Product } from '@models/product.model'
// import { loadListeners } from '@utils/loadListeners'
// import { refreshUI } from '@utils/refreshUI'

(async () => {
  await renderNav()
})()

const router = Router.getInstance()

const foo = (): ComponentView => '<h1>test</h1>'

const ProductDetail = async (): Promise<string> => {
  const param = router.getRouteParam()
  const products = await getFromDatabase('products') as Product[]
  const product = products.find(p => p.id === param) as Product

  const view = `
    <h1>${product.name}</h1>
    ${ProductCard(product as Product)}
  `
  return view
}

router.addRoute('/', Home)
router.addRoute('/test', foo)
router.addRoute('/cart', Cart)
router.addRoute('/login', foo)
router.addRoute('/products/all', foo)
router.addRoute('/products/product/:id', ProductDetail)
router.addRoute('/product/:id', ProductDetail)
router.addRoute('/404', Error404)

// router.addListeners('/', [
//   {
//     query: '.addToCardButton',
//     type: 'click',
//     func: (event) => cart.addProduct(event as MouseEvent)
//   }
// ])

// const CART_LISTENERS = [
//   {
//     query: '.cart__delete-button',
//     type: 'click',
//     func: async (event) => {
//       cart.deleteProduct(event as MouseEvent)
//       await refreshUI()
//     }
//   },
//   {
//     query: '#cart__buy-button',
//     type: 'click',
//     func: async () => {
//       cart.clear()
//       await refreshUI()
//     }
//   }
// ]

// router.addListeners('/cart', CART_LISTENERS)
