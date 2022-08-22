import { ComponentView } from '@models/component.model'
import { HTML_IDS } from '@models/elementsID.model'

export const renderInHtml = async (template: () => ComponentView | Promise<ComponentView>, renderId: HTML_IDS): Promise<void> => {
  const container: HTMLElement = document.getElementById(renderId)!
  container.innerHTML = await template()
}
