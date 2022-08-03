import { Home } from '@pages/Home'
import { Cart } from '@pages/Cart'
import { Login } from '@pages/Login'
import { Error404 } from '@pages/Error404'

export const routes = {
  root: {
    path: '/',
    template: Home
  },
  cart: {
    path: '/cart',
    template: Cart
  },
  login: {
    path: '/login',
    template: Login
  },
  error404: {
    path: '/error404',
    template: Error404
  }
}
