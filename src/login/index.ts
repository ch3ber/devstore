import { appStorage } from '@utils/localstorage'
import { loadListener } from '@utils/loadListeners'
import { cart } from '../cart'
import { renderNav } from '@utils/renderNav'

class User {
  name: string
  state: {
    auth: Array<boolean>;
  }

  constructor (name: string, isLogged: boolean) {
    this.name = name
    this.state = { auth: [isLogged] } // create state
  }

  // set state

  setAuth (value: boolean): void {
    this.state.auth[0] = value
  }

  // return a boolean
  getUserAuth () {
    return this.state.auth[0]
  }
}

export const user = new User('User', appStorage.getItem('isUserLogged'))

//  function for the login button
export async function logIn () {
  user.setAuth(true)
  appStorage.setItem('isUserLogged', true)
  await renderNav()
  loadListener('logOutButton', 'click', logOut)
}

// function for the logout button
export async function logOut () {
  cart.clear()
  user.setAuth(false)
  appStorage.setItem('isUserLogged', false)
  window.location.hash = '/'
  await renderNav()
  loadListener('logInButton', 'click', logIn)
}
