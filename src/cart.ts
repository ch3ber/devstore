import { appStorage } from '@utils/localstorage'

class Cart {
  addProduct (event: MouseEvent) {
    const composedPath = event.composedPath()
    const PRODUCT_ID_PATH = composedPath[3].dataset.id

    if (appStorage.getItem('cart').includes(PRODUCT_ID_PATH.toString())) {
      return
    }
    appStorage.addItem('cart', PRODUCT_ID_PATH)
  }

  deleteProduct (event: MouseEvent) {
    const composedPath = event.composedPath()
    const PRODUCT_ID_PATH = composedPath[1].childNodes[1].dataset.id
    appStorage.delteItem('cart', PRODUCT_ID_PATH)
  }

  clear () {
    appStorage.setItem('cart', [])
  }
}

export const cart = new Cart()
