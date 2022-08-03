import '@styles/index.css'
import { inChangeRoute } from '@utils/inChangeRoute'

window.addEventListener('load', inChangeRoute)
window.addEventListener('hashchange', inChangeRoute)
