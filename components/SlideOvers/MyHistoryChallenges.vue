<script setup lang="ts">
import SlideOverCommonComponent from '~/components/Common/SlideOverCommonComponent.vue'
import { historyChallenges } from '~/composables/userHistoryChallengeMock'

const props = defineProps({
  historyChallenges: {
    type: Array,
    default: () => []
  }
})

const historyChallenges = ref(props.historyChallenges)

const todayDate = new Date().getTime()

function dateToTimestamp (dateString) {
  const [day, month, year] = dateString.split('.').map(Number)
  const date = new Date(year, month - 1, day)

  return date.getTime()
}
</script>

<template>
  <slide-over-common-component>
    <div class="my-history-challenges">
      <div class="header-title">
        История челленджей
      </div>
      <div>
        <div class="history-challenges-list">
          <div v-for="(item, index) in historyChallenges" :key="item.challengeId" class="history-challenges-list-item">
            <div class="img-wrapper">
              <img v-if="item.imagePath" :src="item.imagePath" alt="">
              <img v-else src="/public/challenge-def.svg" alt="">
            </div>
            <div class="content-block">
              <div class="history-challenges-content-wrapper">
                <div class="head">
                  <div class="title">
                    {{ item.name }}
                  </div>
                  <div class="date">
                    <div class="start-date">{{ item.startDate }}</div>
                    <span>-</span>
                    <div class="end-date">{{ item.endDate }}</div>
                  </div>
                </div>
                <div class="status">
                  <div v-if="todayDate >= dateToTimestamp(item.endDate)">
                    <span class="text-xs text-gray-500">Завершен</span>
                  </div>
                  <div v-else>
                    <span class="text-xs text-lime-600">Активные</span>
                  </div>
                </div>
              </div>
            </div>
            <a class="text-blue-600 hover:underline cursor-pointer">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </slide-over-common-component>
</template>

<style scoped lang="scss">
.my-history-challenges {

  .header-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    color: #252525;
    margin-bottom: 32px;
  }

  .history-challenges-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
    height: 75vh;
    padding: 30px 20px;

    .history-challenges-list-item {
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: #fff;
      padding: 24px;

      .img-wrapper {
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 16px;
        margin-right: 12px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .content-block {
        margin-right: auto;

        .history-challenges-content-wrapper {
          display: flex;
          flex-direction: column;

          .head {
            display: flex;
            gap: 24px;

            .title {
              font-weight: 500;
              font-size: 20px;
              line-height: 80%;
              color: #252525;
              margin-bottom: 8px;
            }

            .date {
              display: flex;
              font-weight: 500;
              font-size: 12px;
              line-height: 133%;
              color: #625e5e;
            }
          }
        }
      }
    }
  }
}
</style>
