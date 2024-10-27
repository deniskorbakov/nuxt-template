<script setup lang="ts">
import SlideOverCommonComponent from '~/components/Common/SlideOverCommonComponent.vue'

const props = defineProps({
  teams: {
    type: Array,
    default: () => []
  }
})

const teams = ref(props.teams)
</script>

<template>
  <slide-over-common-component>
    <div class="my-teams">
      <div class="header-title">
        Мои команды
      </div>
      <div>
        <div class="my-teams-list">
          <div v-for="(item, index) in teams" :key="item.teamId" class="my-teams-list-item">
            <div class="img-wrapper">
              <img v-if="item.imagePath" :src="item.imagePath" alt="">
              <img v-else src="/public/challenge-def.svg" alt="">
            </div>
            <div class="content-block">
              <div class="title">
                {{ item.name }}
              </div>
              <div class="members-count">
                {{ item.membersNumber }} участника
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
.my-teams {

  .header-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    color: #252525;
    margin-bottom: 32px;
  }

  .my-teams-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
    height: 75vh;
    padding: 30px 20px;

    .my-teams-list-item {
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

        .title {
          font-weight: 500;
          font-size: 20px;
          line-height: 80%;
          color: #252525;
          margin-bottom: 8px;
        }

        .members-count {
          font-weight: 500;
          font-size: 12px;
          line-height: 133%;
          color: #8d8d8d;
        }
      }
    }
  }
}
</style>
