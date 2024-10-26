export default defineNuxtRouteMiddleware((to) => {
  const user = useUser()

  if (user.isAuth() && (to.path === '/login' || to.path === '/registration')) {
    return navigateTo('/profile')
  }

  if (!user.isAuth() && (to.path !== '/login' && to.path !== '/registration')) {
    return navigateTo('/login')
  }
})
