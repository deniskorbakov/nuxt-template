<script setup lang="ts">
import ErrorScreen from '~/components/Screens/ErrorScreen.vue'
import { user } from '~/composables/userMock'

definePageMeta({
  middleware: 'auth'
})

const image = ref('')
// const date = ref('')
const position = ref('')
const department = ref('')
const telegram = ref('')
const phoneNumber = ref('')
const about = ref('')

const errors = ref({
  surname: false,
  name: false,
  patronymic: false,
  email: false,
  password: false,
  password_confirmation: false
})

const activeButton = ref<'personal' | 'team'>('personal')

function setActiveButton (button: 'personal' | 'team') {
  activeButton.value = button
}

</script>

<template>
  <NuxtLayout>
    <div
      v-if="user.is_confirmed === true"
      class="flex gap-[15%] mx-auto w-full max-w-[1280px] pt-[55px]"
    >
      <div class="info__block">
        <div class="info__teams">
          <h2 class="info__title">Мои команды</h2>
          <div class="teams__list">
            <div v-for="team in teams.slice(0, 3)" :key="team.teamId" class="team">
              <div class="flex gap-3">
                <img :src="team.imagePath" alt="" class="team__img">
                <div сlass="flex flex-col justify-between">
                  <h3 class="text-xl font-medium">{{ team.name }}</h3>
                  <span class="text-xs text-gray-500">{{ team.membersNumber }} участника</span>
                </div>
              </div>
              <a class="text-blue-600 hover:underline cursor-pointer">Подробнее</a>
            </div>
          </div>
          <span v-if="teams.length > 3" class="text-xs text-gray-500">Посмотреть все</span>
        </div>
        <div class="info__achievements">
          <h2 class="info__title">Мои достижения</h2>
          <div class="gap-2 mt-3 flex">
            <button
              class="achievement__button"
              :class="{ 'achievement__button--active': activeButton === 'personal' }"
              @click="setActiveButton('personal')"
            >
              Личные
            </button>

            <button
              class="achievement__button"
              :class="{ 'achievement__button--active': activeButton === 'team' }"
              @click="setActiveButton('team')"
            >
              Командные
            </button>
          </div>
        </div>
        <div class="info__history">
          <h2 class="info__title">История достижений</h2>
        </div>
      </div>
      <div class="form__block">
        <div class="form__avatar">
          <img src="~/public/avatar.png" alt="">
        </div>
        <div class="input__block">
          <div>
            <h3 class="input__title">Имя</h3>
            <input
              v-model="user.name"
              :class="['form__input', { 'form__input--error': errors.name }]"
              placeholder="Введите ваше имя"
              type="text"
            >
          </div>
          <div>
            <h3 class="input__title">Фамилия</h3>
            <input
              v-model="user.surname"
              :class="['form__input', { 'form__input--error': errors.surname }]"
              placeholder="Введите фамилию"
              type="text"
            >
          </div>
          <div>
            <h3 class="input__title">Отчество</h3>
            <input
              v-model="user.patronymic"
              :class="['form__input', { 'form__input--error': errors.patronymic }]"
              placeholder="Введите отчество"
              type="text"
            >
          </div>
          <div>
            <h3 class="input__title">Почта</h3>
            <input
              v-model="user.email"
              :class="['form__input', { 'form__input--error': errors.email }]"
              placeholder="Введите ваш E-mail"
              type="text"
            >
          </div>
          <div>
            <h3 class="input__title">Расскажите о своих целях</h3>
            <textarea
              v-model="user.about"
              :class="['form__textarea', { 'form__input--error': errors.email }]"
              placeholder="Описание"
              type="text"
            />
          </div>
          <button type="submit" class="form__button">
            Продолжить
          </button>
        </div>
      </div>
    </div>
    <template v-else>
      <error-screen>
        Ожидайте подтверждение <br>
        от администратора 😎
      </error-screen>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
:deep(.p-inputtext) {
  background-color: transparent;
  border-color: var(--teal-500);
  box-shadow: none;
  height: 100%;
  padding: 16px;
  font-family: Montserrat, sans-serif !important;
}

.form__block {
  @apply flex justify-center max-w-[560px] flex-col;
}

.input__block {
  @apply gap-4 flex flex-col mb-12;
}

.form__avatar {
  @apply mb-10 rounded-2xl;
}

.form__input {
  @apply min-w-full rounded-full bg-white border border-gray-300 px-6 py-3;
}

//TODO Пофиксить хрень с бордером
.form__textarea {
  @apply min-w-[500px] resize-none min-h-[120px] rounded-3xl outline-primary-dark-yellow bg-white border border-gray-300 px-6 py-3;
}

.input__title {
  @apply text-xs text-gray-500 ps-6 mb-1.5;
}

.form__input--error {
  @apply transform transition-all duration-300 ease-in-out outline-red-500 focus:outline-primary-dark-yellow;
}

.form__button {
  @apply rounded-full mt-12 w-min bg-primary-dark-yellow px-10 py-4 hover:bg-primary-yellow;
}

.info__block {
  @apply w-full max-w-[500px];
}

.info__teams {
  @apply mb-12;
}

.info__title {
  @apply text-3xl;
}

.teams__list {
  @apply pt-8 gap-3 flex flex-col pb-6;
}

.team {
  @apply flex justify-between items-center;
}

.team__img {
  @apply bg-primary-yellow w-12 h-12 rounded-2xl;
}

.achievement__button {
  @apply py-1 px-3 rounded-full text-xs bg-gray-200 text-gray-400;
}

.achievement__button--active {
  @apply bg-yellow-200 text-yellow-500;
}
</style>
