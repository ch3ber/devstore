import { LoggedNav } from '@components/LoggedNav'
import { Nav } from '@components/Nav'
import { user, logIn, logOut } from '@login/index'
import { renderInHtml } from './renderInHtml'
import { loadListener } from './loadListeners'
import { BUTTONS_IDS, HTML_IDS } from '@models/elementsID'

export const renderNav = async (): Promise<void> => {
  user.getUserAuth()
    ? await renderInHtml(LoggedNav(), HTML_IDS.NAV)
    : await renderInHtml(Nav(), HTML_IDS.NAV)

  // load eventlisteners after render app
  user.getUserAuth()
    ? loadListener(BUTTONS_IDS.LOG_OUT, 'click', logOut)
    : loadListener(BUTTONS_IDS.LOG_IN, 'click', logIn)
}
