<script setup lang="ts">
import SelectComponent from '~/components/Forms/SelectComponent.vue'
import TextareaComponent from '~/components/Forms/TextareaComponent.vue'
import InputTextComponent from '~/components/Forms/InputTextComponent.vue'
import CheckboxComponent from '~/components/Forms/CheckboxComponent.vue'
import ExtendedSelectComponent from '~/components/Forms/ExtendedSelectComponent.vue'

const checked = ref(true)
const selectedValue = ref('')
const selectedValueMultiple = ref([])
const selectOptions = [
  { name: 'Test1', id: 1 },
  { name: 'Test2', id: 2 },
  { name: 'Test3', id: 3 }
]
</script>

<template>
  <div class="mb-5">
    <div class="text-center h1 fw-bold mb-4">
      Forms
    </div>
    <div>
      <div class="row mb-2">
        <div class="col">
          <input-text-component
            class="input-white"
            name="inputName"
            label="Login"
            placeholder="Login"
            help="Help text"
            :required="true"
          />
        </div>
        <div class="col">
          <input-text-component
            name="inputName"
            label="Login (disabled)"
            placeholder="name@example.com"
            :disabled="true"
          />
        </div>
        <div class="col">
          <input-text-component
            name="inputName"
            label="Login (readonly)"
            placeholder="name@example.com"
            :readonly="true"
          />
        </div>
        <div class="col">
          <input-text-component
            name="inputName"
            label="Login (error)"
            placeholder="name@example.com"
            error="Please enter a message in the input."
          />
        </div>
      </div>

      <div class="row mb-2">
        <div class="col">
          <textarea-component
            label="Textarea"
            name="textarea"
            placeholder="Required example textarea"
            :required="true"
            help="Help text"
            :resize="false"
          />
        </div>
        <div class="col">
          <textarea-component
            label="Textarea Disabled"
            name="textarea"
            placeholder="Required example textarea"
            :disabled="true"
          />
        </div>
        <div class="col">
          <textarea-component
            label="Textarea Readonly"
            name="textarea"
            placeholder="Required example textarea"
            :readonly="true"
          />
        </div>
        <div class="col">
          <textarea-component
            label="Textarea Readonly"
            name="textarea"
            placeholder="Required example textarea"
            error="Please enter a message in the textarea."
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="formFile" class="form-label">Default file input example</label>
            <input id="formFile" class="form-control" type="file">
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Multiple files input example</label>
            <input id="formFileMultiple" class="form-control" type="file" multiple>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="formFileDisabled" class="form-label">Disabled file input example</label>
            <input id="formFileDisabled" class="form-control" type="file" disabled>
          </div>
        </div>
      </div>
      <div class="h4 fw-semibold">
        Select example
      </div>
      <div class="row">
        <div class="col">
          <select-component
            v-model="selectedValue"
            name="select1"
            label="Select option"
            :options="selectOptions"
            help="Help text"
            :readonly="true"
            :required="true"
          />
        </div>
        <div class="col">
          <select-component
            v-model="selectedValue"
            name="select1"
            label="Select option"
            :options="selectOptions"
            :disabled="true"
          />
        </div>
        <div class="col">
          <select-component
            v-model="selectedValue"
            name="select1"
            label="Select option"
            :default-nothing="true"
            :options="selectOptions"
            error="Error text Select option"
          />
        </div>
      </div>

      <div class="mt-4">
        <h4 class="fw-semibold">
          Checkboxes
        </h4>

        <div class="row">
          <div class="col">
            <checkbox-component
              name="flexCheckDefault"
              label="Default checkbox"
            />

            <checkbox-component
              v-model="checked"
              name="flexCheckDefault2"
              label="Checked checkbox"
            />

            <checkbox-component
              v-model="checked"
              name="flexCheckDefault3"
              label="Checked checkbox"
              help="Help text"
            />

            <checkbox-component
              v-model="checked"
              name="flexCheckDefault4"
              label="Checked checkbox"
              error="Please enter a message in the textarea."
            />

            <checkbox-component
              v-model="checked"
              name="flexCheckDisabled"
              label="Disabled checkbox"
              disabled
            />

            <checkbox-component
              name="flexCheckDisabled2"
              label="Disabled checkbox"
              disabled
            />

            <!-- Чекбокс со ссылкой -->
            <checkbox-component name="delivery_terms">
              <template #label>
                <!-- eslint-disable-next-line -->
                С <router-link to="/">условиями доставки</router-link> ознакомлен(а)
              </template>
            </checkbox-component>
          </div>

          <div class="col">
            <div class="form-check">
              <input id="flexRadioDefault1" class="form-check-input" type="radio" name="flexRadioDefault">
              <label class="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input
                id="flexRadioDefault2"
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked
              >
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div class="form-check">
              <input id="flexRadioDefault3" class="form-check-input is-invalid" type="radio" name="flexRadioDefault">
              <label class="form-check-label" for="flexRadioDefault3">
                Default radio
              </label>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <div class="form-check">
              <input
                id="flexRadioDisabled"
                class="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                disabled
              >
              <label class="form-check-label" for="flexRadioDisabled">
                Disabled radio
              </label>
            </div>
            <div class="form-check">
              <input
                id="flexRadioCheckedDisabled"
                class="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                checked
                disabled
              >
              <label class="form-check-label" for="flexRadioCheckedDisabled">
                Disabled checked radio
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="h6 mt-3">
        Extended
      </div>
      <div class="row">
        <div class="col">
          <extended-select-component
            v-model="selectedValue"
            name="select1"
            label="Select option"
            placeholder="Select option"
            :without-label="false"
            :options="selectOptions"
            help="Help text"
          />
        </div>
        <div class="col">
          <extended-select-component
            v-model="selectedValue"
            name="select1"
            label="Select option"
            placeholder="Select option"
            :options="selectOptions"
            :disabled="true"
          />
        </div>
        <div class="col">
          <extended-select-component
            v-model="selectedValue"
            name="select1"
            label="Select option"
            placeholder="Select option"
            :default-nothing="true"
            :options="selectOptions"
            error="Error text Select option"
          />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <extended-select-component
            v-model="selectedValueMultiple"
            name="select1"
            label="Multiple"
            placeholder="Multiple Select option"
            :options="selectOptions"
            :close-on-select="false"
            mode="multiple"
            help="Help text"
          />
        </div>
        <div class="col">
          <extended-select-component
            v-model="selectedValueMultiple"
            name="select1"
            label="Tags"
            placeholder="Tags Select option"
            :options="selectOptions"
            :close-on-select="false"
            mode="tags"
            help="Help text"
          />
        </div>
        <div class="col">
          <extended-select-component
            v-model="selectedValueMultiple"
            name="select1"
            label="Search"
            placeholder="Search option"
            :options="selectOptions"
            :searchable="true"
            :close-on-select="false"
            mode="tags"
            help="Help text"
          />
        </div>
      </div>
    </div>
  </div>
</template>
