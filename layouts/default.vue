<script lang="ts" setup>
import { user } from '~/composables/userMock'

const menu = useMenu()
const userAuth = useUser()
</script>

<template>
  <div>
    <!--        Если юзер залогинен - шапка показывается-->
    <header v-if="userAuth.isAuth() && user.is_confirmed === true" class="header">
      <div class="header__layout">
        <div class="header__block">
          <img src="../public/ogetto.svg" alt="">
        </div>
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
