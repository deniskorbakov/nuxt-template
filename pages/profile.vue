<script setup lang="ts">

const user = ref({
  id: 1,
  is_confirmed: false,
  name: 'Alexander',
  surname: 'Kovalenko'
})

const image = ref('')
// const date = ref('')
const position = ref('')
const department = ref('')
const telegram = ref('')
const phoneNumber = ref('')
const about = ref('')

</script>

<template>
  <NuxtLayout>
    <div
      v-if="user.id !== undefined"
      class="flex flex-col items-center justify-center"
    >
      <h1 class="mb-10 font-bold">Профиль</h1>
      <h2 v-if="user.is_confirmed" class="mb-7 text-3xl font-bold">
        <span class="text-primary-dark-yellow">{{ user.surname }}</span>
        {{ user.name }}
      </h2>
      <div
        v-if="user.is_confirmed"
        class="flex flex-col items-center justify-center gap-6"
      >
        <div class="flex gap-5">
          <div class="flex flex-col justify-between gap-4">
            <div
              :style="{ 'background-image': `url(${image}` }"
              class="group flex h-full w-[400px] flex-col items-center justify-center gap-3 rounded-md bg-gray-100 bg-cover hover:opacity-75"
            >
              <img
                v-if="!image"
                src="../public/dragAndDrop.svg"
                alt="dragAndDrop"
              >
              <!--              <FileUpload-->
              <!--                class="bg-transparent text-gray-400"-->
              <!--                :class="{-->
              <!--                  'hidden group-hover:block': image,-->
              <!--                  block: !image,-->
              <!--                }"-->
              <!--                mode="basic"-->
              <!--                name="avatar"-->
              <!--                :url="-->
              <!--                  'http://norm-perdachello.ru:8000/api/upload/' +-->
              <!--                    user.id-->
              <!--                "-->
              <!--                accept="image/*"-->
              <!--                :max-file-size="1000000"-->
              <!--                :auto="true"-->
              <!--                choose-label="Загрузить"-->
              <!--                @upload="onUpload"-->
              <!--              />-->
            </div>
          </div>
          <div class="flex flex-col gap-4">
<!--            <Calendar-->
<!--              v-model="date"-->
<!--              date-format="dd.mm.yy"-->
<!--              class="form__input !p-0"-->
<!--              show-icon-->
<!--              icon-display="input"-->
<!--              placeholder="Дата рождения"-->
<!--            />-->
            <input
              v-model="position"
              placeholder="Должность"
              type="text"
              class="form__input"
            >
            <input
              v-model="department"
              placeholder="Отдел"
              type="text"
              class="form__input"
            >
            <input
              v-model="telegram"
              placeholder="Telegram"
              type="text"
              class="form__input"
            >
            <input
              v-model="phoneNumber"
              placeholder="Номер телефона"
              type="text"
              class="form__input"
            >
            <textarea
              v-model="about"
              class="form__input max-h-[92px] min-h-[92px]"
              placeholder="Расскажите о себе"
            />
          </div>
        </div>
        <button class="form__button" @click="(()=> {})">
          Сохранить
        </button>
      </div>
      <h2 v-else class="flex items-center gap-5 text-3xl font-semibold">
        Ожидайте подтверждение от администратора 😎
      </h2>
    </div>
    <div v-else class="flex flex-col items-center justify-center font-bold">
      <h1>Загрузка...</h1>
    </div>
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

.form__input {
  @apply min-w-[300px] rounded-md bg-gray-100 p-4;
}

.form__button {
  @apply rounded-full bg-primary-dark-yellow px-[1.6em] py-[0.6em] hover:bg-primary-yellow;
}
</style>
