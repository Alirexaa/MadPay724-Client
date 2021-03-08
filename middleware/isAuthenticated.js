export default (context) => {
  console.log('this middware in isAuthenticated')
  if (!context.store.getters.isAuthenticated) context.redirect('auth/login')
}
