<script lang="ts" setup>
const menu = useMenu()
const user = useUser()
</script>

<template>
  <div>
    <header v-if="user.isAuth()" class="header">
      <div class="header__layout">
        <div class="header__block">
          <img class="w-14" src="../public/ogetto.png" alt="">
        </div>
        <!--        Если юзер залогинен - шапка показывается-->
        <nav class="flex gap-20">
          <RouterLink
            v-for="link in menu.links"
            :key="link.id"
            exact-active-class="underline text-primary-dark-yellow"
            class="hidden text-black md:block no-underline hover:underline"
            :to="link.link"
          >
            {{ link.name }}
          </RouterLink>
          <div />
        </nav>
      </div>
    </header>
    <slot />
    <UNotifications />
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex items-center justify-between p-6;
}

.header__layout {
  @apply mx-auto flex w-full max-w-[1280px] items-center justify-between;
}

.header__block {
  @apply flex items-center gap-3 text-white;
}
</style>
