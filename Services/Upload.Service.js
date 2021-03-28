export class UploadService {
  constructor($axios) {
    this.$axios = $axios
    }
    
    async updateProfilePhoto(userId,photo,token) {
        let url = `/site/user/v1/users/${userId}/photos`
        let result = await this.$axios.post(url,{id,photo},{ headers: { Authorization: token } })
        return result 
    }
}