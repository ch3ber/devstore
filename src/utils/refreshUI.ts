import { Router } from '@router/index'
import { renderInHtml } from '@utils/renderInHtml'
import { HTML_IDS } from '@models/elementsID.model'

export const refreshUI = async (): Promise<void> => {
  const router = Router.getInstance()
  const content = await router.getContentOfRoute()
  renderInHtml(content, HTML_IDS.APP)
}
