import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      auth: {
        token: null,
        statusCode: null,
      },
    },
    mutations: {
      login(state, auth) {
        state.auth.token = auth.token
        state.auth.statusCode = auth.statusCode
      },
    },
    actions: {
      async login({ commit }, user) {
        try {
          let url = 'auth/login'
          const response = await this.$axios.post(url, user)
          let token = response.data.token
          if (process.client) {
            await localStorage.setItem('token', token)
          }
          let stausCode = 200
          await this.$cookies.set('jwt', token)
          commit('login', { token, stausCode })
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
              commit('login', { token, statusCode })
            }
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
    },
    getters: {},
  })
}
