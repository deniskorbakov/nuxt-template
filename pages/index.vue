<script setup lang="ts">

const route = useRoute()
const router = useRouter()

router.isReady().then(() => {
  if (route.fullPath === '/') {
    router.push('/registration')
  }
})
</script>

<template>
  <NuxtLayout>
    <div class="text-blue-500">
      Hello World!
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>
