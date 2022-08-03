import { Footer } from '@components/Footer'

export const Layout = (component: string): string => {
  const view = `
    <div class="max-w-5xl mx-auto">
      ${component}
    </div>
    ${Footer()}
  `
  return view
}
