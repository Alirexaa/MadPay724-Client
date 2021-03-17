export class UserService {
  constructor($axios) {
    this.$axios = $axios
  }
  async getUsers(token) {
      token = 'Bearer ' + token  
      let url = 'site/admin/user'
      let response = await this.$axios.get(url,{Authorization: token})
      return response.data
    }
    
    async getUser(id,token) {
        token = 'Bearer ' + token  
        let url = 'site/admin/user' + id
        let response = this.$axios.get(url)
        return response.data
    }
}
