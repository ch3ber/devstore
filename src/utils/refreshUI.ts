import { GetRouteInfo } from 'yourrouter/utils/getRouteInfo'
import { renderInHtml } from '@utils/renderInHtml'
import { HTML_IDS } from '@models/elementsID.model'

export const refreshUI = async (): Promise<void> => {
  const getRouteInfo = new GetRouteInfo()
  const { callback } = getRouteInfo.get()
  await renderInHtml(callback, HTML_IDS.APP)
}
