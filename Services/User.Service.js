export class UserService {
  constructor($axios) {
    this.$axios = $axios
  }
  async getUsers(token) {
    token = 'Bearer ' + token
    let url = 'site/user/v1/user/'
    let response = await this.$axios.get(url, {
      headers: { Authorization: token },
    })
    return response.data
  }

  async getUser(id, token) {
    token = 'Bearer ' + token
    let url = 'site/user/v1/user/' + id
    let data = this.$axios.get(url, { headers: { Authorization: token } })
    return data
  }

  async updateUserInfo(id, user, token) {
    token = 'Bearer' + token
    let url = 'site/user/v1/user/' + id
    this.$axios.put(url, user, { headers: { Authorization: token } })
  }
}
