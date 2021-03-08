import Vuex from 'vuex'
import { SET_TOKEN, REGISTER, CLEAN_TOKEN } from '@/store/types'
export default () => {
  return new Vuex.Store({
    state: {
      auth: {
        token: null,
        statusCode: null,
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
    },
    actions: {
      async login({ commit }, user) {
        try {
          let url = 'auth/login'
          const response = await this.$axios.post(url, user)
          let token = response.data.token
          let stausCode = 200

          if (process.client) {
            await localStorage.setItem('token', token)
          }
          await this.$cookies.set('jwt', token)
          commit(SET_TOKEN, { token, stausCode })
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
        }
        if (await this.$cookies.get('jwt')) {
          await this.$cookies.remove('jwt')
        }
        commit(CLEAN_TOKEN)
      },
      async register({ commit }, user) {
        try {
          let url = 'auth/register'
          const response = await this.$axios.post(url, user)
          // let token = response.data.token
          console.log(response)
          let statusCode = 201
          // if (process.client) {
          //   await localStorage.setItem('token', token)
          // }
          // await this.$cookies.set('jwt', token)
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
        await commit(SET_TOKEN, { token, stausCode: 200 })
      },
    },
    getters: {
      isAuthenticated(state) {
        return state.auth.token
      },
    },
  })
}
