// Мок данные юзера, если is_confirmed = false то показывается экран ожидайте подтверждения
export const user = ref({
  userId: 1,
  is_confirmed: true,
  name: 'Alexander',
  surname: 'Kovalenko',
  patronymic: 'Bebrovich',
  email: 'bebravich@kovalenko.com',
  about: 'люблю фронтенд и смузи'
})
