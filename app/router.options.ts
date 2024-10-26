export default {
  scrollBehavior (to: any) {
    const nuxtApp = useNuxtApp()

    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce('page:finish', () => {
        if (to.hash) {
          resolve({
            top: 30,
            behavior: 'smooth',
            el: to.hash
          })
        } else {
          resolve({
            top: 30,
            behavior: 'smooth'
          })
        }
      })
    })
  }
}
