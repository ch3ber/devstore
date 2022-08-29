// imports
import '@styles/index.css'
import { Router } from 'yourrouter'

// pages
import { Home } from '@pages/Home'
import { Cart } from '@pages/Cart'
import { Error404 } from '@pages/Error404'

// models
import { ComponentView } from '@models/component.model'

// components
import { getFromDatabase } from '@utils/getFromDababase'
import { ProductCard } from '@components/ProductCard'
import { Product } from '@models/product.model'

Router.createInstance({
  path404: '/notFound',
  renderId: '#app'
})
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

router.addRoute('/', () => Home)
router.addRoute('/test', () => foo)
router.addRoute('/cart', () => Cart)
router.addRoute('/login', () => foo)
router.addRoute('/products/product/:id', () => ProductDetail)
router.addRoute('/product/:id', () => ProductDetail)
router.addRoute('/notFound', () => Error404)
