export class AuthService {
  constructor($axios) {
    this.$axios = $axios
  }

  async login(user) {
    let url = 'site/user/v1/auth/login'
    const response = await this.$axios.post(url, user)
    return response.data
  }

  async register(user) {
    let url = 'site/user/v1/auth/register'
    const response = await this.$axios.post(url, user)
    return response.data
  }
}
