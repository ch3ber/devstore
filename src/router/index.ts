import { HTML_IDS } from '@models/elementsID.model'
import { routes } from '@routes/index.routes'
import { RouteName, ROUTE_PATHS } from '@routes/routes'
import { loadListeners } from '@utils/loadListeners'
import { refreshUI } from '@utils/refreshUI'
import { renderInHtml } from '@utils/renderInHtml'
import { renderNav } from '@utils/renderNav'

export class Router {
  private static instance: Router

  private constructor () {

  }

  public static getInstance (): Router {
    if (!Router.instance) {
      return (Router.instance = new Router())
    }

    return Router.instance
  }

  mount (): void {
    window.addEventListener('hashchange', async (event: HashChangeEvent) => {
      event.preventDefault()
      await renderNav()
      // await refreshUI()
      loadListeners()
    })
  }

  async addRoute (route: string, callback) {
    if (route === '/') {
      await renderNav()
      renderInHtml(callback(), HTML_IDS.APP)
      loadListeners()
      return
    }

    const routeName = window.location.hash.slice(1).toLocaleLowerCase().split('/')[1]
    console.log(routeName)
    console.log(route)

    if (routeName !== route.slice(1)) {
      window.location.hash = ROUTE_PATHS.ERROR404
      return
    }

    renderInHtml(callback(), HTML_IDS.APP)
  }

  getNameRoute (): string {
    const routeName = window.location.hash.slice(1).toLocaleLowerCase().split('/')[1]
    if (routeName === '') return 'root'
    if (!routes[routeName as RouteName]) return 'error404'
    return routeName
  }

  async getContentOfRoute (): Promise<string> {
    const name = this.getNameRoute()
    return await routes[name as RouteName].template()
  }
}
