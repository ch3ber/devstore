import { Router } from '@router/index'
import { renderInHtml } from '@utils/renderElements'

export const refreshUI = async () => {
  const router = Router.getInstance()
  const content = await router.getContentOfRoute()
  await renderInHtml(content, 'app')
}
