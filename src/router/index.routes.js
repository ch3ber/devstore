import { Cart } from '../pages/Cart'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Error404 } from '../pages/Error404'
import { Requirements } from '../pages/Requirements'

export const routes = {
  root: {
    path: '/',
    template: Home()
  },
  cart: {
    path: '/cart',
    template: Cart()
  },
  login: {
    path: '/login',
    template: Login()
  },
  requirements: {
    path: '/requirements',
    template: Requirements()
  },
  error404: {
    path: '/error404',
    template: Error404()
  }
}
