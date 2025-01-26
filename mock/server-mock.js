import loginResponse from '../json/login.json'
import dashboardResponse from '../json/dashboard.json'
import agendaResponse from '../json/agenda.json'
import historicoResponse from '../json/historico.json'


export default [
  {
    url: '/api/v1/clinic/users/login',
    method: 'post',
    response: ({body}) => {
      const { email, password } = body;
      if (email === loginResponse.username && password === loginResponse.id) {
          console.log('loginResponse', loginResponse.id, loginResponse.username);
        return {
          password: loginResponse.id,
          email: loginResponse.username,
        };

      } else {
        return { error:'usuario con credenciales incorrectas'};
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
