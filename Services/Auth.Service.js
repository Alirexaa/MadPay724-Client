
export class AuthService {
  constructor($axios) {
    this.$axios = $axios
  }

  async login(user) {
    let url = 'auth/login'
    const response = await this.$axios.post(url, user)
    return response.data.token
  }

    async register(user) {
        let url = 'auth/register'
        const response = await this.$axios.post(url, user)
        return response
  }
}

