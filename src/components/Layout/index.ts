import { Footer } from '@components/Footer'
import { ComponentView } from '@models/component'

export const Layout = (component: string): ComponentView => {
  const view = `
    <div class="max-w-5xl mx-auto">
      ${component}
    </div>
    ${Footer()}
  `
  return view
}
