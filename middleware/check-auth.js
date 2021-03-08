export default ({ store, req }) => {
  console.log('this is check-auth.js middleware')
  store.dispatch('initAuth', req)
}
