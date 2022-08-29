import { Router } from 'yourrouter'
import { refreshUI } from '@utils/refreshUI'
import { cart } from '@cart'
import { BUTTONS_IDS, HTML_IDS } from '@models/elementsID.model'

export const loadListener = (id: BUTTONS_IDS | HTML_IDS, type: string, func: () => void): void => {
  const element: HTMLElement = document.getElementById(`${id}`)!
  element.addEventListener(type, func)
}

type Listener = () => void
type ListenersKey = '/' | '/cart'
interface Listeners {
  '/': Listener[];
  '/cart': Listener[];
}

const listeners: Listeners = {
  '/': [
    function () {
      const elements = document.querySelectorAll('.addToCardButton')!
      elements.forEach((el) => {
        el.addEventListener('click', (event): void => {
          cart.addProduct(event as MouseEvent)
        })
      })
    }
  ],
  '/cart': [
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
  const { path } = router.getRouteInfo()

  const haveListeners = listeners[path as ListenersKey]
  if (!haveListeners) return
  listeners[path as ListenersKey].forEach((listener: Listener) => listener())
}
