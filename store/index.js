import Vuex from 'vuex'
import { SET_TOKEN, REGISTER, CLEAN_TOKEN, DECODE_TOKEN } from '@/store/types'
import jwt_decode from 'jwt-decode'
export default () => {
  return new Vuex.Store({
    state: {
      auth: {
        token: null,
        statusCode: null,
        decodedToken: null,
      },
    },
    mutations: {
      [SET_TOKEN](state, auth) {
        state.auth.token = auth.token
        state.auth.statusCode = auth.statusCode
      },
      [CLEAN_TOKEN](state) {
        state.auth.token = null
      },
      [DECODE_TOKEN](state, decodeToken) {
        state.auth.decodedToken = decodeToken
      },
    },
    actions: {
      async login({ commit }, user) {
        try {
          let data = await this.$authService.login(user)
          let token = data.token
          let userInfo = data.user
          let statusCode = 200

          if (process.client) {
            console.log('toooooooooooo')
            console.log(userInfo)
            await localStorage.setItem('token', token)
            await localStorage.setItem('user', JSON.stringify(userInfo))
          }
          await this.$cookies.set('jwt', token)
          await commit(SET_TOKEN, { token, statusCode })
        } catch (error) {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            //----------------------------------//
            if (error.response.status == 401) {
              let token = null
              let statusCode = 401
              commit(SET_TOKEN, { token, statusCode })
            }
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log('aaa', error.request)
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message)
          }
          console.log(error)
        }
      },
      async logout({ commit }) {
        if (process.client) {
          if (await localStorage.getItem('token')) {
            await localStorage.removeItem('token')
          }
          console.log('شما خارح شددددی')
        }
        if (await this.$cookies.get('jwt')) {
          await this.$cookies.remove('jwt')
        }
        commit(CLEAN_TOKEN)
      },
      async register({ commit }, user) {
        try {
          const data = await this.$authService.register(user)
          let token = response.data.token
          console.log(data)
          let statusCode = 201
          if (process.client) {
            await localStorage.setItem('token', token)
          }
          await this.$cookies.set('jwt', token)
          commit(SET_TOKEN, { token: null, statusCode })
        } catch (error) {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            if (error.response.status == 409) {
              let token = null
              let statusCode = 409
              commit(SET_TOKEN, { token, statusCode })
            }
            //----------------------------------//
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request)
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message)
          }
          console.log(error)
        }
      },
      async initAuth({ commit }, request) {
        let token
        if (request) {
          if (!request.headers.cookie) {
            console.log('cookie is null')
            return
          }
          const jwt = request.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('jwt='))
          console.log('jwt', jwt)
          if (!jwt) {
            console.log('jwt is null')
            return
          }
          token = jwt.split('=')[1]
          console.log('token', token)
        } else {
          if (process.client) {
            token = localStorage.getItem('token')
            console.log('token in localstorage', token)
          }
          if (!token) {
            console.log('token in localstorage is empty')

            return
          }
        }
        let statusCode = 200
        await commit(SET_TOKEN, { token, statusCode })
      },
      async decodeToken({ commit }, token) {
        let decodedToken = jwt_decode(token)
        console.log(decodedToken)
        commit(DECODE_TOKEN, decodedToken)
      },
    },
    getters: {
      isAuthenticated(state) {
        return state.auth.token
      },
    },
  })
}
