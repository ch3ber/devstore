import { Router } from 'yourrouter'
import { appStorage } from '@utils/localstorage'
import { loadListener } from '@utils/loadListeners'
import { cart } from '@cart'
import { renderNav } from '@utils/renderNav'
import { BUTTONS_IDS } from '@models/elementsID.model'

export class LogInUser {
  static async logIn () {
    appStorage.setItem('isUserLogged', true)
    await renderNav()
    loadListener(BUTTONS_IDS.LOG_OUT, 'click', LogOutUser.logOut)
  }
}

export class LogOutUser {
  static async logOut () {
    cart.clear()
    appStorage.setItem('isUserLogged', false)
    const router = Router.getInstance()
    router.redyrectTo('/')
    await renderNav()
    loadListener(BUTTONS_IDS.LOG_IN, 'click', LogInUser.logIn)
  }
}

export class GetUserAuth {
  static getAuth () {
    return appStorage.getItem('isUserLogged')
  }
}
