import { Footer } from '@components/Footer'
import { getFromDatabase } from '@utils/getFromDababase'

export const Login = async () => {
  const users = await getFromDatabase('users')

  const view = `
    <h1>Login</h1>
    <p>Select a user</p>
    ${users.map(user => `<button id="loginButton">${user.name}</button>`)}
    
    ${Footer()}
  `
  return view
}
