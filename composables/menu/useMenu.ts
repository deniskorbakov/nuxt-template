export const useMenu = () => {
  const links = [
    {
      id: 1,
      name: 'Пользователи',
      link: '/users'
    },
    {
      id: 2,
      name: 'Мероприятия',
      link: '/events'
    },
    {
      id: 3,
      name: 'Профиль',
      link: '/profile'
    }
  ]

  return {
    links
  }
}
