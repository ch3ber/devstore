import { Router } from '@router/index'
import { refreshUI } from '@utils/refreshUI'
import { cart } from '../cart'

export function loadListener (id: string, type: string, func: any) {
  const element: HTMLElement = document.getElementById(`${id}`)!
  element.addEventListener(type, func)
}

const listeners = {
  root: [
    function () {
      const elements = document.querySelectorAll('.addToCardButton')!
      elements.forEach((el) => {
        el.addEventListener('click', (event: any): void => {
          cart.addProduct(event)
        })
      })
    }
  ],
  cart: [
    function () {
      const elements = document.querySelectorAll('.cart__delete-button')!
      elements.forEach((el) => {
        el.addEventListener('click', async (event: any): Promise<void> => {
          cart.deleteProduct(event)
          await refreshUI()
          loadListeners()
        })
      })
    },
    function () {
      const element = document.getElementById('cart__buy-button')!
      element.addEventListener('click', async () => {
        cart.clear()
        await refreshUI()
        loadListeners()
      })
    }
  ]
}

export const loadListeners = () => {
  const router = Router.getInstance()
  const routeName = router.getNameRoute()
  listeners[routeName].forEach((listener) => listener())
}
