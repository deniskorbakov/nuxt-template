<script setup lang="ts">
import ErrorScreen from '~/components/Screens/ErrorScreen.vue'
</script>
<template>
  <NuxtLayout>
    <error-screen>
      404 <br> страница не найдена
    </error-screen>
    <nuxt-link :href="'/'">
      Вернуться на главную
    </nuxt-link>
  </NuxtLayout>
</template>
