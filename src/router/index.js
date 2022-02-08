import { user, logIn, logOut } from '../login'
import { routes } from './index.routes'
import { Nav } from '../components/Nav'
import { LoggedNav } from '../components/LoggedNav'
import { loadListener, loadListeners, loadRecursiveListener } from '../utils/loadListeners'
import { cart } from '../cart'

class Router {
  getNameRoute () {
    return (
      window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || 'root'
    )
  }

  async getContentOfRoute () {
    const route = this.getNameRoute()
    return routes[route] ? await routes[route].template() : routes.error404.template()
  }

  // render into the html
  async render ({ containerId = null, navId = null }) {
    if (navId !== null) {
      const nav = document.getElementById(navId)
      nav.innerHTML = user.getUserAuth() ? LoggedNav() : Nav()
    }

    if (containerId !== null) {
      const container = document.getElementById(containerId)
      container.innerHTML = await router.getContentOfRoute()
    }
  }
}

export const router = new Router()

// this function execute if change the url
export const changeRoute = async () => {
  await router.render({ containerId: 'app', navId: 'nav' })

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
    await loadRecursiveListener({
      id: 'cart__delete-button',
      listenerFunc: cartListeners
    })

    await loadRecursiveListener({
      id: 'cart__buy-button',
      listenerFunc: callClearCart
    })
  }
}

async function callClearCart () {
  cart.clearCart()
  await router.render({ containerId: 'app' })
}

async function cartListeners (event) {
  cart.deleteProduct(event)
  await router.render({ containerId: 'app' })
  loadListener('cart__buy-button', 'click', callClearCart)
}
