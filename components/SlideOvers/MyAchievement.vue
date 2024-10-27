<script setup lang="ts">

import SlideOverCommonComponent from '~/components/Common/SlideOverCommonComponent.vue'
import { achievementsProf } from '~/composables/achievementProfileMock'

const props = defineProps({
  achievementsProf: {
    type: Array,
    default: () => []
  }
})

const achievementsProf = ref(props.achievementsProf)

const activeButton = ref<'personal' | 'team'>('personal')

function setActiveButton (button: 'personal' | 'team') {
  activeButton.value = button
}
</script>

<template>
  <slide-over-common-component>
    <div class="my-achievements">
      <div class="header-title">
        Мои достижения
      </div>
      <div>
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
      <div class="my-achievements-list">
        <div v-for="achievement in achievementsProf.filter(a => activeButton === a.type)" :key="achievement.achievementId" class="my-achievements-list-item">
          <div class="img-wrapper">
            <img v-if="achievement.imagePath" :src="achievement.imagePath" alt="">
            <img v-else src="/public/challenge-def.svg" alt="">
          </div>
          <div class="description">
            {{ achievement.description }}
          </div>
        </div>
      </div>
    </div>
  </slide-over-common-component>
</template>

<style scoped lang="scss">
.achievement__button {
  @apply py-1 px-3 rounded-full text-xs bg-gray-200 text-gray-400;
}

.achievement__button--active {
  @apply bg-yellow-200 text-yellow-500;
}

.my-achievements {

  .header-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    color: #252525;
    margin-bottom: 32px;
  }

  .my-achievements-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    overflow-y: auto;
    height: 75vh;
    padding: 30px 20px;

    .my-achievements-list-item {
      display: flex;
      flex-direction: column;
      width: 120px;
      height: 184px;

      .img-wrapper {
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .description {
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 114%;
        color: #1e1e1e;
      }
    }
  }
}
</style>
