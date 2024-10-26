<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Создаем реактивные переменные для хранения данных о пользователе
const user = ref({
  surname: '',
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

// Переменные для отслеживания ошибок
const errors = ref({
  surname: false,
  name: false,
  email: false,
  password: false,
  password_confirmation: false
})

// Функция для регистрации пользователя
function register (ev: Event) {
  ev.preventDefault()

  // Проверяем заполненность полей
  errors.value.surname = user.value.surname.trim() === ''
  errors.value.name = user.value.name.trim() === ''
  errors.value.email = user.value.email.trim() === ''
  errors.value.password = user.value.password.trim() === ''
  errors.value.password_confirmation = user.value.password_confirmation.trim() === ''

  // Проверка совпадения паролей
  if (user.value.password !== user.value.password_confirmation) {
    errors.value.password_confirmation = true
  }

  // Если есть ошибки, выходим из функции
  if (Object.values(errors.value).some(error => error)) {
    return null
  }

  // Выполнение логики регистрации после валидации
  // store.dispatch('register', user.value).then(() => {
  router.push('/profile')
  // })
}

function setUser () {
  return null
}
</script>

<template>
  <NuxtLayout>
    <div class="form__layout">
      <div class="form__container">
        <h1 class="form__title">Регистрация</h1>
        <form action="" class="form" @submit="register">
          <input
            v-model="user.surname"
            :class="['form__input', { 'form__input--error': errors.surname }]"
            placeholder="Фамилия"
            type="text"
          >
          <input
            v-model="user.name"
            :class="['form__input', { 'form__input--error': errors.name }]"
            placeholder="Имя"
            type="text"
          >
          <input
            v-model="user.email"
            :class="['form__input', { 'form__input--error': errors.email }]"
            placeholder="Почта"
            type="text"
          >
          <input
            v-model="user.password"
            :class="['form__input', { 'form__input--error': errors.password }]"
            placeholder="Пароль"
            type="password"
          >
          <input
            v-model="user.password_confirmation"
            :class="['form__input', { 'form__input--error': errors.password_confirmation }]"
            placeholder="Повторите пароль"
            type="password"
          >
          <button class="form__button" @click="setUser">
            Продолжить
          </button>
          <span class="text-center">
            Уже зарегистрированы?
            <RouterLink
              to="/login"
              class="cursor-pointer"
            >Войти</RouterLink>
          </span>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.form__layout {
  @apply flex h-[calc(100vh-120px)] items-center justify-center p-4;
}

.form__container {
  @apply rounded-xl bg-gray-100 px-6 py-8 sm:px-12;
}

.form__title {
  @apply mb-10 text-center text-3xl font-bold;
}

.form {
  @apply flex flex-col gap-4;
}

.form__input {
  @apply min-w-[300px] rounded-md bg-gray-200 p-4;
}

.form__input--error {
  @apply transform transition-all duration-300 ease-in-out outline-red-500;
}

.form__button {
  @apply rounded-full bg-primary-dark-yellow px-[1.6em] py-[0.6em] hover:bg-primary-yellow;
}
</style>
