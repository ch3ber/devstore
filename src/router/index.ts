import { routes } from '@router/index.routes'

export class Router {
  private static instance: Router

  private constructor () {}

  public static getInstance (): Router {
    if (!Router.instance) {
      return (Router.instance = new Router())
    }

    return Router.instance
  }

  getNameRoute (): string {
    return (
      window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || 'root'
    )
  }

  async getContentOfRoute (): Promise<string> {
    const route = this.getNameRoute()
    return routes[route]
      ? await routes[route].template()
      : routes.error404.template()
  }
}
