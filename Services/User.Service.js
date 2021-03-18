export class UserService {
  constructor($axios) {
    this.$axios = $axios
  }
  async getUsers(token) {
    token = 'Bearer ' + token
    let url = 'site/admin/user/'
    let response = await this.$axios.get(url, {
      headers: { Authorization: token },
    })
    return response.data
  }

  async getUser(id, token) {
    token = 'Bearer ' + token
    let url = 'user/' + id
    let data = this.$axios.get(url, { headers: { Authorization: token } })
    return data
  }

  async updateUserInfo(id, user, token) {
    token = 'Bearer' + token
    let url = 'user/' + id
    this.$axios.put(url, user, token)
  }
}
