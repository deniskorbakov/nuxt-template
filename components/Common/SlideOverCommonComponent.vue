<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <USlideover v-model="isOpen" :overlay="false" class="cstm-sliderover">
    <div class="p-4  custom-bg">
      <Placeholder class="h-full">
        <slot />
      </Placeholder>
    </div>
  </USlideover>
</template>

<style scoped lang="scss">
.custom-bg {
  background: #f6f6f6;
  height: 90vh;
}
</style>
