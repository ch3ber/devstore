import { routes } from '@routes/index.routes'
import { RouteName, Routes } from '@routes/routes'

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
