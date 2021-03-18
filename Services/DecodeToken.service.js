import jwt_decode from 'jwt-decode'

export class DecodeTokenService {
  constructor() {}
  decode(token) {
    let decodedToken = jwt_decode(token)
    return decodedToken
  }
}
