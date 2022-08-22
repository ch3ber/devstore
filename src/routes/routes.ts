import { ComponentView } from '@models/component.model'

export enum ROUTE_PATHS {
  ROOT = '/',
  CART = '/cart',
  ERROR404 = '/error404',
}

export type Route = {
  path: ROUTE_PATHS,
  template: () => Promise<ComponentView> | ComponentView
}

export type RouteName = 'root' | 'cart' | 'error404'

export interface Routes {
  root: Route,
  cart: Route,
  error404: Route,
}
