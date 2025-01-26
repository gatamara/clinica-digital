import axios from 'axios'

interface User {
  email: string
  password: string
}

export const apiServices = {
  postLoginUser: async ({ email, password }: User) => {
    const body = await axios.post('/api/v1/clinic/users/login', { email, password })
    console.log(body)
    return body
  },
  getDashboard: async () => {
    const { data } = await axios.get('/api/v1/clinic/secure/dashboard', {
      headers: { setAuthorization: 'Bearer ' },
    })
    console.log(data)

    return data
  },
  getAgenda: async () => {
    const { data } = await axios.get('/api/v1/clinic/secure/agenda', {
      headers: { setAuthorization: 'Bearer ' },
    })
    return data
  },
  getHistorico: async () => {
    const { data } = await axios.get('/api/v1/clinic/secure/agenda/historico', {
      headers: { setAuthorization: 'Bearer ' },
    })
    return data
  },
}
