import { appStorage } from './utils/localstorage'
import { router } from './router'

class Cart {
  async addProduct (event) {
    const product = event.path[3].dataset.id
    console.log(product)

    if (appStorage.getItem('selectProducts').includes(product.toString())) {
      return
    }
    console.log(product)
    appStorage.addItem('selectProducts', product)
    console.log(appStorage.getItem('selectProducts'))
  }

  async deleteProduct (event) {
    console.log(event)
    const product = event.path[1].childNodes[1].dataset.id
    console.log(product)
    appStorage.delteItem('selectProducts', product)
    console.log(appStorage.getItem('selectProducts'))
  }

  clearCart () {
    appStorage.setItem('selectProducts', [])
  }
}

export const cart = new Cart()
