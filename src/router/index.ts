import { ComponentView } from '@models/component.model'
import { HTML_IDS } from '@models/elementsID.model'
import { loadListeners } from '@utils/loadListeners'
import { renderInHtml } from '@utils/renderInHtml'

type RouterRoute = {
  name: string,
  template: () => ComponentView | Promise<ComponentView>
}

type Listener = {
  query: string,
  type: string,
  func: (event?: unknown) => void
}

type RouteListener = {
  routeName: string,
  listeners: Listener[]
}
export class Router {
  private static instance: Router
  private appRoutes: RouterRoute[]
  private appDynamicRoutes: RouterRoute[]
  private listeners: RouteListener[]

  private constructor () {
    this.appRoutes = []
    this.appDynamicRoutes = []
    this.listeners = []
  }

  public static getInstance (): Router {
    if (!Router.instance) {
      return (Router.instance = new Router())
    }

    return Router.instance
  }

  private async mount () {
    window.location.hash = '/'

    window.addEventListener('hashchange', async (event: HashChangeEvent) => {
      event.preventDefault()
      const actualRoute = window.location.hash.slice(1)
      await this.renderRoute(actualRoute)
    })

    await this.renderRoute('/')
    // await this.loadListeners()
  }

  /*
    add a new route to app routes
  */
  addRoute (route: string, template: () => ComponentView | Promise<ComponentView>) {
    if (this.appRoutes.length === 1) this.mount()
    const isDynamicRoute = route.includes('/:')

    if (isDynamicRoute) {
      this.appDynamicRoutes.push({ name: route, template })
      return
    }

    this.appRoutes.push({ name: route, template })
  }

  private async renderRoute (routeName: string) {
    const isDynamicRoute = this.verifyDynamicRoute()
    if (isDynamicRoute) {
      this.renderDynamicRoute()
      return
    }

    const isValidRoute = this.appRoutes.some(route => route.name === routeName)
    if (!isValidRoute) {
      window.location.hash = '/404'
      return
    }

    const route = this.appRoutes.find(route => route.name === routeName)!
    await renderInHtml(route?.template, HTML_IDS.APP)
    // await this.loadListeners()
    loadListeners()
  }

  private verifyDynamicRoute () {
    const routeLength = window.location.hash.split('/').length
    let isDynamicRoute = false

    this.appDynamicRoutes.forEach(route => {
      const nameLength = route.name.split('/').length
      if (nameLength === routeLength) {
        isDynamicRoute = true
      }
    })

    return isDynamicRoute
  }

  private async renderDynamicRoute () {
    const routeName = this.getDynamicRouteName()
    const route = this.appDynamicRoutes.find(route => route.name === routeName)!
    await renderInHtml(route?.template, HTML_IDS.APP)
    // await this.loadListeners()
    loadListeners()
  }

  private getDynamicRouteName (): string {
    const routeLength = window.location.hash.split('/').length
    let routeName = ''

    this.appDynamicRoutes.forEach(route => {
      if (route.name.split('/').length === routeLength) {
        routeName = route.name
      }
    })

    return routeName
  }

  getRouteInfo () {
    const isDynamicRoute = this.verifyDynamicRoute()

    if (isDynamicRoute) {
      const name = this.getDynamicRouteName()
      const route = this.appDynamicRoutes.find(route => route.name === name)!
      const template = route.template
      return {
        path: name,
        template
      }
    }

    const path = window.location.hash.slice(1)
    const route = this.appRoutes.find(route => route.name === path)!
    const template = route.template
    return {
      path,
      template
    }
  }

  getRouteParam (): string {
    return window.location.hash.split('/').at(-1)!
  }

  /*
    add a listeners in diferents routes
  */
  addListeners (routeName: string, listeners: Listener[]) {
    this.listeners.push({ routeName, listeners })
  }

  // private loadListeners () {
  //   const routeName = window.location.hash.slice(1)
  //   const isValidRoute = this.appRoutes.some(route => route.name === routeName) || this.appDynamicRoutes.some(route => route.name === routeName)

  //   console.log({ isValidRoute })
  //   if (!isValidRoute) return

  //   const haveListeners = this.listeners.some(listener => listener.routeName === routeName)
  //   console.log({ haveListeners })
  //   if (!haveListeners) return

  //   const routeListeners = this.listeners.find(listener => listener.routeName === routeName)!

  //   console.log(routeListeners.listeners)

  //   routeListeners.listeners.forEach(listener => {
  //     const elements = document.querySelectorAll(`${listener.query}`)!
  //     elements.forEach(el => el.addEventListener(listener.type, listener.func))
  //   })
  // }
}
