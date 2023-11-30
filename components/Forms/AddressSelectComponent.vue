<script setup lang="ts">
import { useDebounceFn, onClickOutside } from '@vueuse/core'

interface InputProps {
  modelValue: string | number
  label?: string
  placeholder?: string
  name: string
  id?: string
  autocomplete?: string
  error?: string | number | any[] | null
  help?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  inputDelay?: number
}

interface AddressOption {
  data: object
  value: string
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  name: '',
  id: '',
  autocomplete: '',
  error: null,
  help: '',
  disabled: false,
  readonly: false,
  required: false,
  inputDelay: 400
})

const emits = defineEmits(['update:modelValue', 'update:addressData'])
const { searchAddress } = useAddressField()
const searchOptions = ref<AddressOption[]>([])
const addressInput = ref(null)

const inputParams = reactive({
  value: props.modelValue,
  addressData: {},
  elementId: props.id ? props.id : props.name,
  hasError: computed(() => !!props.error),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  }),
  showAutocomplete: false
})

const { loading, run } = useAsync(() => searchAddress(String(inputParams.value)).then((data) => {
  searchOptions.value = data
}))

const updateModelValue = useDebounceFn(() => run(), props.inputDelay)

function selectValue (address: AddressOption) {
  inputParams.value = address.value
  inputParams.addressData = address.data
  inputParams.showAutocomplete = false

  emits('update:modelValue', inputParams.value)
  emits('update:addressData', inputParams.addressData)
}

const clickOutsideHandler = () => {
  inputParams.showAutocomplete = false
}

onClickOutside(addressInput, clickOutsideHandler)

</script>

<template>
  <div>
    <label v-if="label" class="form-label" :for="inputParams.elementId">
      {{ label }} <span v-if="required" class="text-danger">*</span>
      <v-menu v-if="help" placement="auto" class="d-inline-block">
        <span class="badge rounded-pill bg-primary form-help-badge">?</span>
        <template #popper>
          <div class="form-help-text" v-html="help" />
        </template>
      </v-menu>
    </label>
    <div
      ref="addressInput"
      class="form-input d-flex align-items-center position-relative"
      :class=" {
        'disabled': disabled,
        'is-invalid': inputParams.hasError,
      }"
    >
      <input
        :id="inputParams.elementId"
        v-model="inputParams.value"
        :class="[inputParams.hasError ? 'is-invalid' : '']"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :autocomplete="autocomplete !== '' ? autocomplete : null"
        class="form-control"
        @input="updateModelValue"
        @focusin="inputParams.showAutocomplete = true; run()"
      >
      <div v-if="inputParams.showAutocomplete" class="autocomplete-options border border-top-0">
        <div class="menu-items">
          <div v-if="loading" class="no-results-message">
            Загрузка...
          </div>
          <template v-else-if="searchOptions.length > 0">
            <div class="menu-item text-gray small autocomplete-list-help-text">
              Выберите вариант или продолжите ввод
            </div>
            <span v-for="(item, index) in searchOptions" :key="index" class="menu-item address-item cursor-pointer" @click="selectValue(item)">
              {{ item.value }}
            </span>
          </template>
          <template v-else>
            <div class="no-results-message">
              Ничего не найдено
            </div>
          </template>
        </div>
      </div>
    </div>
    <div v-if="inputParams.hasError" class="invalid-feedback" v-text="inputParams.errorMessage" />
  </div>
</template>

<style scoped lang="scss">
.help {
  margin-top: 0.25rem;
}

.menu-items {
  padding-top: 0;
}

.address-item {
  &:hover {
    background: var(--bs-secondary);
  }
}

.autocomplete-options {
  position: absolute;
  z-index: 3;
  background: #fff;
  width: 100%;
  top: 100%;
  max-height: 250px;
  overflow-y: auto;

  .autocomplete-list-help-text {
    font-weight: 400;
    padding-top: 10px;
  }
}

.no-results-message {
  padding: 10px 10px 0 10px;
}
</style>
