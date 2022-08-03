import { renderNav } from '@utils/renderNav'
import { refreshUI } from '@utils/refreshUI'
import { loadListeners } from '@utils/loadListeners'

export const inChangeRoute = async () => {
  await renderNav()
  await refreshUI()
  loadListeners()
}
