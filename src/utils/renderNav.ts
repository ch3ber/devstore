import { LoggedNav } from '../components/LoggedNav'
import { Nav } from '../components/Nav'
import { user, logIn, logOut } from '@login/index'
import { renderInHtml } from './renderElements'
import { loadListener } from './loadListeners'

export const renderNav = async (): Promise<void> => {
  user.getUserAuth()
    ? await renderInHtml(LoggedNav(), 'nav')
    : await renderInHtml(Nav(), 'nav')

  // load eventlisteners after render app
  user.getUserAuth()
    ? loadListener('logOutButton', 'click', logOut)
    : loadListener('logInButton', 'click', logIn)
}
