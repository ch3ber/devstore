import { Footer } from '@components/Footer'
import { ComponentView } from '@models/component'
import { getFromDatabase } from '@utils/getFromDababase'

export const Login = async (): Promise<ComponentView> => {
  const users = await getFromDatabase('users')

  const view = `
    <h1>Login</h1>
    <p>Select a user</p>
    ${users.map(user => `<button id="loginButton">${user.name}</button>`)}
    
    ${Footer()}
  `
  return view
}
