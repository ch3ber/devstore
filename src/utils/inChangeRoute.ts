import { renderNav } from '@utils/renderNav'
import { refreshUI } from '@utils/refreshUI'
import { loadListeners } from '@utils/loadListeners'

export const inChangeRoute = async (event: Event): Promise<void> => {
  event.preventDefault()
  await renderNav()
  await refreshUI()
  loadListeners()
}
