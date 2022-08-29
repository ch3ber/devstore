import { GetRouteInfo } from 'yourrouter/utils/getRouteInfo'
import { renderInHtml } from './renderInHtml'
import { cart } from '@cart'
import { BUTTONS_IDS, HTML_IDS } from '@models/elementsID.model'

import { Cart } from '@pages/Cart'

const getRouteInfo = new GetRouteInfo()

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
      const elements = document.querySelectorAll(`.${BUTTONS_IDS.ADD_TO_CART}`)!
      elements.forEach((el) => {
        el.addEventListener('click', (event): void => {
          cart.addProduct(event as MouseEvent)
        })
      })
    }
  ],
  '/cart': [
    function () {
      const elements = document.querySelectorAll(`.${BUTTONS_IDS.DELETE_PRODUCT}`)!
      elements.forEach((el) => {
        el.addEventListener('click', async (event): Promise<void> => {
          cart.deleteProduct(event as MouseEvent)
          await renderInHtml(Cart, HTML_IDS.APP)
          loadListeners()
        })
      })
    },
    function () {
      const element = document.getElementById(BUTTONS_IDS.DELETE_ALL_PRODUCTS)!
      element.addEventListener('click', async (): Promise<void> => {
        cart.clear()
        await renderInHtml(Cart, HTML_IDS.APP)
        loadListeners()
      })
    }
  ]
}

export const loadListeners = (): void => {
  const path = getRouteInfo.path()
  const haveListeners = listeners[path as ListenersKey]
  if (!haveListeners) return
  listeners[path as ListenersKey].forEach((listener: Listener) => listener())
}
