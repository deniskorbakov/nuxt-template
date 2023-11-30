<script setup lang="ts">
defineProps<{
  name: string
  description?: string
  help?: string
  active?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <div class="card radio-card" :class="{active: active, disabled: disabled}">
    <div class="card-body">
      <div class="d-flex">
        <div class="circle">
          <div class="radio-active-indicator" />
        </div>
        <div class="card-data">
          <div class="name">
            {{ name }}
          </div>
          <div class="description">
            {{ description }}
            <v-menu v-if="help" placement="bottom" class="d-inline-block">
              <span class="badge rounded-pill bg-primary form-help-badge">?</span>
              <template #popper>
                <div class="form-help-text fw-medium fz-small" v-html="help" />
              </template>
            </v-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.radio-card {
  --bs-card-spacer-y: 16px;
  --bs-card-spacer-x: 20px;
  cursor: pointer;

  &.active {
    --bs-card-border-color: var(--bs-primary);
    outline: 1px solid var(--bs-primary);

    .radio-active-indicator {
      background: var(--bs-primary);
      border: 1px solid var(--bs-primary);

      &:before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        background: #ffffff;
        border-radius: 50%;
      }
    }
  }

  .card-data {
    .name {
      font-weight: 600;
    }

    .description {
      font-size: 14px;
    }
  }

  &.disabled {
    background: var(--bs-secondary);
    --bs-card-border-color: var(--bs-secondary);
    cursor: default;

    .card-data {
      .name {
        color: #8b8b8b;
      }

      .description {
        color: #8b8b8b;
      }
    }
  }

  .circle {
    margin: 0 10px 0 0;
  }

  .radio-active-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--bs-secondary);
    border-radius: 50%;
    border: 1px solid #dbdbdb;
  }
}
</style>
