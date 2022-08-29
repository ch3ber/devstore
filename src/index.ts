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
import { renderNav } from '@utils/renderNav'
import { renderInHtml } from '@utils/renderInHtml'
import { HTML_IDS } from '@models/elementsID.model'
import { loadListeners } from '@utils/loadListeners'

Router.createInstance({
  path404: '/notFound'
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

router.addRoute('/', async () => {
  await renderNav()
  await renderInHtml(Home, HTML_IDS.APP)
  loadListeners()
})
router.addRoute('/test', async () => {
  await renderInHtml(foo, HTML_IDS.APP)
})
router.addRoute('/cart', async () => {
  await renderInHtml(Cart, HTML_IDS.APP)
  loadListeners()
})
router.addRoute('/login', async () => {
  await renderInHtml(foo, HTML_IDS.APP)
})
router.addRoute('/products/product/:id', async () => {
  await renderInHtml(ProductDetail, HTML_IDS.APP)
})
router.addRoute('/product/:id', async () => {
  await renderInHtml(ProductDetail, HTML_IDS.APP)
})
router.addRoute('/notFound', async () => {
  await renderInHtml(Error404, HTML_IDS.APP)
})
