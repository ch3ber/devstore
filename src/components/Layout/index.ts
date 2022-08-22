import { Footer } from '@components/Footer'
import { ComponentView } from '@models/component.model'
import { renderNav } from '@utils/renderNav'

export const Layout = async (component: ComponentView): Promise<string> => {
  await renderNav()
  const view = `
    <div class="max-w-5xl mx-auto">
      ${component}
    </div>
    ${Footer()}
  `
  return view
}
