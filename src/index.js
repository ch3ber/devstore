import './styles/index.css'
import { changeRoute } from './router'

window.addEventListener('load', changeRoute)
window.addEventListener('hashchange', changeRoute)
