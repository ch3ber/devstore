import { Home } from '@pages/Home'
import { Cart } from '@pages/Cart'
import { Error404 } from '@pages/Error404'
import { Routes, ROUTE_PATHS } from '@routes/routes'

export const routes: Routes = {
  root: {
    path: ROUTE_PATHS.ROOT,
    template: Home
  },
  cart: {
    path: ROUTE_PATHS.CART,
    template: Cart
  },
  error404: {
    path: ROUTE_PATHS.ERROR404,
    template: Error404
  }
}
