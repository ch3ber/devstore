import { Footer } from '@components/Footer'
import { ComponentView } from '@models/component.model'

export const Layout = (component: ComponentView): ComponentView => {
  const view = `
    <div class="max-w-5xl mx-auto">
      ${component}
    </div>
    ${Footer()}
  `
  return view
}
