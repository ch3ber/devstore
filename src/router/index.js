import { user, logIn, logOut } from '../login'
import { routes } from './index.routes'
import { Nav } from '../components/Nav'
import { LoggedNav } from '../components/LoggedNav'
import { loadListener, loadListeners } from '../utils/loadListeners'
import { cart } from '../cart'

class Router {
  getNameRoute () {
    return (
      window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || 'root'
    )
  }

  getContentOfRoute () {
    const route = this.getNameRoute()
    return routes[route] ? routes[route].template : routes.error404.template
  }

  // render into the html
  async render (id, idNav) {
    const container = document.getElementById(id)
    const nav = document.getElementById(idNav)
    container.innerHTML = await router.getContentOfRoute()
    nav.innerHTML = user.getUserAuth() ? LoggedNav() : Nav()
  }
}

export const router = new Router()

// this function execute if change the url
export const changeRoute = async () => {
  await router.render('app', 'nav')

  // load eventlisteners after render app
  user.getUserAuth()
    ? loadListener('logOutButton', 'click', logOut)
    : loadListener('logInButton', 'click', logIn)

  // listeners for home page
  if (router.getNameRoute() === 'root') {
    loadListeners('product-card__button--add', 'click', async (event) => {
      cart.addProduct(event)
    })
  }

  // listeners for cart page
  if (router.getNameRoute() === 'cart') {
    loadListeners('cart__delete-button', 'click', async (event) => {
      cart.deleteProduct(event)
    })

    loadListener('cart__buy-button', 'click', () => {
      cart.clearCart()
    })
  }
}
