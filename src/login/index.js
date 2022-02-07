import { appStorage } from '../utils/localstorage'
import { router } from '../router'
import { loadListener } from '../utils/loadListeners'
import { cart } from '../cart'

class User {
  constructor (name, isLogged) {
    this.name = name
    this.state = { auth: [isLogged] } // create state
  }

  // set state
  setAuth (value) {
    for (const key in value) {
      if (this.state.hasOwnProperty) {
        this.state[key] = value[key]
      }
    }
  }

  // return a boolean
  getUserAuth () {
    return this.state.auth[0]
  }
}

export const user = new User('User', appStorage.getItem('isUserLogged'))

//  function for the login button
export async function logIn () {
  user.setAuth({ auth: [true] })
  appStorage.setItem('isUserLogged', true)
  await router.render('app', 'nav')
  loadListener('logOutButton', 'click', logOut)
}

// function for the logout button
export async function logOut () {
  user.setAuth({ auth: [false] })
  appStorage.setItem('isUserLogged', false)
  cart.clearCart()
  await router.render('app', 'nav')
  loadListener('logInButton', 'click', logIn)
}
