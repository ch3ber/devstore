import { HTML_IDS } from '@models/elementsID.model'
import { Home } from '@pages/Home'
import '@styles/index.css'
import { inChangeRoute } from '@utils/inChangeRoute'
import { renderInHtml } from '@utils/renderInHtml'
import { Router } from './router'

// window.addEventListener('load', inChangeRoute)
// window.addEventListener('hashchange', inChangeRoute)

const router = Router.getInstance()

router.mount()
const foo = () => '<h1>test</h1>'

router.addRoute('/', async () => {
  const content = await Home()
  renderInHtml(content, HTML_IDS.APP)
})

router.addRoute('/test', async () => {
  renderInHtml(foo(), HTML_IDS.APP)
})
