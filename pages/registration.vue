<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'auth'
})

const user = useUser()
const notifications = useNotifications()

const router = useRouter()

const userData = ref({
  surname: '',
  name: '',
  patronymic: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const errors = ref({
  surname: false,
  name: false,
  patronymic: false,
  email: false,
  password: false,
  password_confirmation: false
})

function register (ev: Event) {
  ev.preventDefault()

  errors.value.surname = userData.value.surname.trim() === ''
  errors.value.name = userData.value.name.trim() === ''
  errors.value.patronymic = userData.value.patronymic.trim() === ''
  errors.value.email = userData.value.email.trim() === ''
  errors.value.password = userData.value.password.trim() === ''
  errors.value.password_confirmation = userData.value.password_confirmation.trim() === ''

  if (userData.value.password !== userData.value.password_confirmation) {
    errors.value.password_confirmation = true
  }

  if (Object.values(errors.value).some(error => error)) {
    return null
  }

  useClientApiFetch('api/register',
    {
      method: 'POST',
      body: {
        surname: userData.value.surname,
        name: userData.value.name,
        patronymic: userData.value.patronymic,
        email: userData.value.email,
        password: userData.value.password
      }
    }
  ).then((response) => {
    user.token.value = response.token

    router.push('/profile')

    notifications.success(
      'register_success',
      'Register success',
      'wait confirm account'
    )
  }).catch((err) => {
    notifications.error(
      'register_error',
      'Register error',
      err
    )
  })
}

function setUser () {
  return null
}
</script>

<template>
  <NuxtLayout>
    <div class="form__layout">
      <img class="form__gradient" src="../public/gradient.png" alt="">
      <div class="form__wrapper">
        <div class="form__container">
          <h1 class="form__title">Регистрация</h1>
          <form action="" class="form" @submit="register">
            <div>
              <h3 class="input__title">Фамилия</h3>
              <input
                v-model="userData.surname"
                :class="['form__input', { 'form__input--error': errors.surname }]"
                placeholder="Введите фамилию"
                type="text"
              >
            </div>
            <div>
              <h3 class="input__title">Имя</h3>
              <input
                v-model="userData.name"
                :class="['form__input', { 'form__input--error': errors.name }]"
                placeholder="Введите ваше имя"
                type="text"
              >
            </div>
            <div>
              <h3 class="input__title">Отчество</h3>
              <input
                v-model="userData.patronymic"
                :class="['form__input', { 'form__input--error': errors.patronymic }]"
                placeholder="Введите ваше отчество"
                type="text"
              >
            </div>
            <div>
              <h3 class="input__title">Почта</h3>
              <input
                v-model="userData.email"
                :class="['form__input', { 'form__input--error': errors.email }]"
                placeholder="Введите ваш E-mail"
                type="text"
              >
            </div>
            <div>
              <h3 class="input__title">Пароль</h3>
              <input
                v-model="userData.password"
                :class="['form__input', { 'form__input--error': errors.password }]"
                placeholder="Придумайте пароль"
                type="password"
              >
            </div>
            <div>
              <h3 class="input__title">Пароль</h3>
              <input
                v-model="userData.password_confirmation"
                :class="['form__input', { 'form__input--error': errors.password_confirmation }]"
                placeholder="Повторите ваш пароль"
                type="password"
              >
            </div>
            <div class="gap-4 flex items-center">
              <button type="submit" class="form__button">
                Продолжить
              </button>
              <span>
                <RouterLink to="/login" class="cursor-pointer !text-blue-600 !font-light hover:underline">
                  У меня уже есть аккаунт
                </RouterLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.form__layout {
  @apply flex h-screen items-center justify-between;
}

.form__gradient {
  @apply w-[50vw] h-full;
}

.form__wrapper {
  @apply flex items-center justify-center w-full;
}

.form__container {
  @apply px-6 py-8 sm:px-12;
}

.form__title {
  @apply mb-16 text-3xl font-bold;
}

.form {
  @apply flex flex-col gap-4;
}

.form__input {
  @apply min-w-[500px] rounded-full bg-white border border-gray-300 px-6 py-3;
}

.input__title {
  @apply text-xs text-gray-500 ps-6 mb-1.5;
}

.form__input--error {
  @apply transform transition-all duration-300 ease-in-out outline-red-500 focus:outline-primary-dark-yellow;
}

.form__button {
  @apply rounded-full bg-primary-dark-yellow px-[2em] py-[0.6em] hover:bg-primary-yellow;
}
</style>
