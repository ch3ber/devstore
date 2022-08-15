import { ComponentView } from '@models/component'
import { HTML_IDS } from '@models/elementsID'

export const renderInHtml = (content: ComponentView, renderId: HTML_IDS): void => {
  const container: HTMLElement = document.getElementById(renderId)!
  container.innerHTML = content
}
