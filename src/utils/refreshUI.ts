import { Router } from '@router/index'
import { renderInHtml } from '@utils/renderInHtml'
import { HTML_IDS } from '@models/elementsID.model'

export const refreshUI = async (): Promise<void> => {
  const router = Router.getInstance()
  const { template } = router.getRouteInfo()
  await renderInHtml(template, HTML_IDS.APP)
}
