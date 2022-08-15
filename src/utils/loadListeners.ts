import { Router } from '@router/index'
import { refreshUI } from '@utils/refreshUI'
import { cart } from '@cart'
import { BUTTONS_IDS, HTML_IDS } from '@models/elementsID'

export const loadListener = (id: BUTTONS_IDS | HTML_IDS, type: string, func: () => void): void => {
  const element: HTMLElement = document.getElementById(`${id}`)!
  element.addEventListener(type, func)
}

type Listener = () => void
type ListenersKey = 'root' | 'cart'
interface Listeners {
  root: Listener[];
  cart: Listener[];
}

const listeners: Listeners = {
  root: [
    function () {
      const elements = document.querySelectorAll('.addToCardButton')!
      elements.forEach((el) => {
        el.addEventListener('click', (event): void => {
          cart.addProduct(event as MouseEvent)
        })
      })
    }
  ],
  cart: [
    function () {
      const elements = document.querySelectorAll('.cart__delete-button')!
      elements.forEach((el) => {
        el.addEventListener('click', async (event): Promise<void> => {
          cart.deleteProduct(event as MouseEvent)
          await refreshUI()
          loadListeners()
        })
      })
    },
    function () {
      const element = document.getElementById('cart__buy-button')!
      element.addEventListener('click', async (): Promise<void> => {
        cart.clear()
        await refreshUI()
        loadListeners()
      })
    }
  ]
}

export const loadListeners = (): void => {
  const router = Router.getInstance()
  const routeName = router.getNameRoute()
  const haveListeners = listeners[routeName as ListenersKey]
  if (!haveListeners) return
  listeners[routeName as ListenersKey].forEach((listener: Listener) => listener())
}
