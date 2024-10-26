<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'auth'
})

const user = useUser()
const notifications = useNotifications()

const router = useRouter()

const userData = ref({
  email: '',
  password: ''
})

// реактивные переменные для отслеживания ошибок в полях
const errors = ref({
  email: false,
  password: false
})

function login (ev) {
  ev.preventDefault()

  errors.value.email = userData.value.email.trim() === ''
  errors.value.password = userData.value.password.trim() === ''

  if (errors.value.email || errors.value.password) {
    return null
  }

  useClientApiFetch('api/auth',
    {
      method: 'POST',
      body: {
        email: userData.value.email,
        password: userData.value.password
      }
    }
  ).then((response) => {
    user.token.value = response.token

    router.push('/profile')

    notifications.success(
      'auth_success',
      'Auth success',
      'you succes logint'
    )
  }).catch((err) => {
    notifications.error(
      'auth_error',
      'Auth error',
      err
    )
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="form__layout">
      <img class="form__gradient" src="../public/gradient.png" alt="">
      <div class="form__wrapper">
        <div class="form__container">
          <h1 class="form__title">Войти</h1>
          <form action="" class="form" @submit="login">
            <div>
              <h3 class="input__title">Почта</h3>
              <input
                v-model="userData.email"
                :class="['form__input', { 'form__input--error': errors.email }]"
                placeholder="Введите вашу почту"
                type="text"
              >
            </div>
            <div>
              <h3 class="input__title">Пароль</h3>
              <input
                v-model="userData.password"
                :class="['form__input', { 'form__input--error': errors.password }]"
                placeholder="Введите пароль"
                type="password"
              >
            </div>
            <div class="gap-4 flex items-center">
              <button type="submit" class="form__button">
                Продолжить
              </button>
              <span>
                <RouterLink to="/registration" class="cursor-pointer !text-blue-600 !font-light hover:underline">
                  Я новый пользователь
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
  @apply transform transition-all duration-300 ease-in-out outline-red-500;
}

.form__button {
  @apply rounded-full bg-primary-dark-yellow px-[2em] py-[0.6em] hover:bg-primary-yellow;
}
</style>
