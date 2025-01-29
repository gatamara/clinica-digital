import loginResponse from '../json/login.json'
import dashboardResponse from '../json/dashboard.json'
import agendaResponse from '../json/agenda.json'
import historicoResponse from '../json/historico.json'



export default [
  {
    url: '/api/v1/clinic/users/login',
    method: 'post',
    rawResponse:async (req,res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })

      const { email, password } = JSON.parse(reqbody);
      console.log( reqbody)
      if (email === loginResponse.username && password === 'admin1234') {

        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(loginResponse))

      } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 401
        res.end(JSON.stringify({status: 'Unauthorized'}))

      }
    },
  },
  {
    url: '/api/v1/clinic/secure/dashboard',
    method: 'get',
    timeout: 1000,
    response: dashboardResponse,
  },
  {
    url: '/api/v1/clinic/secure/agenda',
    method: 'get',
    response: agendaResponse,
  },
  {
    url: '/api/v1/clinic/secure/agenda/historico',
    method: 'get',
    response: historicoResponse,
  },
]
