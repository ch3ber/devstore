import { LoggedNav } from '@components/LoggedNav'
import { Nav } from '@components/Nav'
import { LogOutUser, LogInUser, GetUserAuth } from '@login/index'
import { renderInHtml } from './renderInHtml'
import { loadListener } from './loadListeners'
import { BUTTONS_IDS, HTML_IDS } from '@models/elementsID.model'

export const renderNav = async (): Promise<void> => {
  GetUserAuth.getAuth()
    ? await renderInHtml(LoggedNav(), HTML_IDS.NAV)
    : await renderInHtml(Nav(), HTML_IDS.NAV)

  // load eventlisteners after render app
  GetUserAuth.getAuth()
    ? loadListener(BUTTONS_IDS.LOG_OUT, 'click', LogOutUser.logOut)
    : loadListener(BUTTONS_IDS.LOG_IN, 'click', LogInUser.logIn)
}
