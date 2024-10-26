<template>
  <div class="confirm__screen">
    <img src="~/public/ogetto2.svg" alt="">
    <h2 class="text-center">
      <slot />
    </h2>
  </div>
</template>

<style scoped lang="scss">
.confirm__screen {
  @apply flex w-full h-screen justify-center flex-col items-center gap-5 text-4xl font-semibold;
}
</style>
