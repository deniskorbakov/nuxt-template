export const useUser = () => {
  const token = useCookie('token')

  function isAuth (): boolean {
    return !!token.value
  }

  return {
    isAuth,
    token
  }
}
