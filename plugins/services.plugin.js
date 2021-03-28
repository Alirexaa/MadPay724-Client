import { AuthService } from '~/Services/Auth.Service'
import { UserService } from '~/Services/User.Service'
import { DecodeTokenService } from '~/Services/DecodeToken.service'
import { UploadService } from '~/Services/Upload.service'

export default ({ app: { $axios } }, inject) => {
  // pass $axios as a dependency to the RecommendationsService constructor
  const authService = new AuthService($axios)
  const userService = new UserService($axios)
  const decodeTokenService = new DecodeTokenService()
  const uploadService = new UploadService($axios)
  // inject the service, making it available in the context, component, store, etc.
  inject('authService', authService)
  inject('userService', userService)
  inject('decodeTokenService', decodeTokenService)
  inject('uploadService',uploadService)
}
