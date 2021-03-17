import { AuthService } from '~/Services/Auth.Service'
import { UserService } from '~/Services/User.Service'


export default ({ app: { $axios } }, inject) => {
  // pass $axios as a dependency to the RecommendationsService constructor
  const authService = new AuthService($axios)
  const userService = new UserService($axios)
  // inject the service, making it available in the context, component, store, etc.
  inject('authService', authService)
  inject('userService', userService)
}
