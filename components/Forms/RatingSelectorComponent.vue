<script setup lang="ts">
import IconStarFilled from '~/components/Icons/IconStarFilled.vue'

interface Props {
  required: boolean
  label: string,
  modelValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  modelValue: 5
})

const emits = defineEmits(['update:modelValue'])

const currentRating = ref(props.modelValue)

function setRating (value: number) {
  currentRating.value = value
  emits('update:modelValue', value)
}

const ratingName = computed(() => {
  switch (currentRating.value) {
    case 1:
      return 'Ужасно'
    case 2:
      return 'Плохо'
    case 3:
      return 'Нормально'
    case 4:
      return 'Хорошо'
    case 5:
      return 'Отлично'
    default:
      return ''
  }
})

</script>

<template>
  <div>
    <div class="form-label">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </div>
    <div class="rating d-flex align-items-center flex-wrap">
      <div class="stars d-flex">
        <div v-for="(rating, ind) in 5" :key="ind" class="star-icon text-gray" @click="setRating(rating)">
          <icon-star-filled class="icon-24" :class="{'text-warning': rating <= currentRating }" />
        </div>
      </div>
      <div class="text-nowrap">
        &mdash; {{ ratingName }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rating {
  background: #ffffff;
  border: 1px solid var(--bs-border-color);
  padding: 1rem 0.9rem;
  border-radius: 5px;
}

.star-icon {
  margin-right: 5px;
  cursor: pointer;
}
</style>
