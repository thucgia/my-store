import client from './client'

const Login = (user) => client.post("/auth/login", user)

export default { Login }
