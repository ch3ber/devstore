import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const Login = () => {
  const view = `
    ${Nav()}
    <p>login</p>
    ${Footer()}
  `
  return view
}
