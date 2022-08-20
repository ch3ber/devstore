import { Layout } from '@components/Layout'
import { ComponentView } from '@models/component.model'

export const Error404 = (): ComponentView => {
  const view = `
    <main class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-3xl font-bold text-center">Error 404</h1>
      <p class="text-center">No se encontró la página que buscas</p>
      <a href="/#/" class="mt-3 px-6 py-3 rounded bg-gray-300 hover:bg-gray-200">Return to Home</a>
    </main>
  `
  return Layout(view)
}
