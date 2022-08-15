import { ComponentView } from '@models/component'

export enum ROUTE_PATHS {
  ROOT = '/',
  CART = '/cart',
  LOGIN = '/login',
  ERROR404 = '/error404',
}

export type Route = {
  path: ROUTE_PATHS,
  template: () => Promise<ComponentView> | ComponentView
}

export type RouteName = 'root' | 'cart' | 'login' | 'error404'

export interface Routes {
  root: Route,
  cart: Route,
  login: Route,
  error404: Route,
}
