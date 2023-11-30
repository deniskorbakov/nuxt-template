<script lang="ts" setup>
import CheckboxComponent from '~/components/Forms/CheckboxComponent.vue'

const brands = [
  'Apple',
  'Apple MacBook',
  'Asus',
  'Dell',
  'HP',
  'Lenovo',
  'Samsung',
  'Sony'
]
</script>

<template>
  <div class="mb-5">
    <div class="text-center h1 fw-bold mb-4">
      Dropdowns
    </div>
    <div>
      <div class="mb-4">
        <a href="https://floating-vue.starpad.dev/guide/component.html" target="_blank">Документация по плагину</a>
      </div>

      <div class="row">
        <!-- Dropdown с обычными пунктами меню без разделителей -->
        <div class="col">
          <v-dropdown class="d-inline-block">
            <button class="btn btn-primary">
              Список разделов
            </button>
            <template #popper>
              <div class="menu-items">
                <div class="menu-title">
                  Все разделы
                </div>
                <a href="#" class="menu-item">Комплектующие для ремонта</a>
                <a href="#" class="menu-item">Оборудование и инструменты</a>
                <a href="#" class="menu-item">Аксессуары для мобильных устройств</a>
                <a href="#" class="menu-item">Прочая электроника</a>
              </div>
            </template>
          </v-dropdown>
        </div>

        <!-- Пример стандартного bootstrap menu на базе list-group -->
        <div class="col">
          <v-dropdown class="d-inline-block">
            <button class="btn btn-primary">
              Пункты меню
            </button>
            <template #popper>
              <div class="list-group list-group-flush">
                <a href="#" class="list-group-item">Комплектующие для ремонта</a>
                <a href="#" class="list-group-item">Оборудование и инструменты</a>
                <a href="#" class="list-group-item">Аксессуары для мобильных устройств</a>
                <a href="#" class="list-group-item">Прочая электроника</a>
              </div>
            </template>
          </v-dropdown>
        </div>

        <!-- Dropdown с фильтром или любым другим контентом -->
        <div class="col">
          <v-dropdown class="d-inline-block">
            <button class="btn btn-primary">
              Фильтры
            </button>
            <template #popper>
              <div class="p-3">
                <div v-for="(item, index) in brands" :key="index">
                  <checkbox-component
                    :name="'flexCheck' + index"
                    :label="item"
                  />
                </div>
                <div class="buttons mt-4">
                  <button class="btn btn-secondary me-3">
                    Сбросить
                  </button>
                  <button class="btn btn-primary">
                    Показать
                  </button>
                </div>
              </div>
            </template>
          </v-dropdown>
        </div>

        <!-- Пример стандартного bootstrap menu на базе list-group без ссылок (просто текстовые пункты) -->
        <div class="col">
          <v-dropdown class="d-inline-block">
            <button class="btn btn-primary">
              Режим работы
            </button>
            <template #popper>
              <div class="list-group list-group-flush">
                <div class="list-group-item d-flex w-100 justify-content-between">
                  <div class="me-3">
                    Понедельник:
                  </div>
                  <div>10:00 – 19:00</div>
                </div>
                <div class="list-group-item d-flex w-100 justify-content-between">
                  <div>Вторник:</div>
                  <div>10:00 – 19:00</div>
                </div>
                <div class="list-group-item d-flex w-100 justify-content-between">
                  <div>Среда:</div>
                  <div>10:00 – 19:00</div>
                </div>
                <div class="list-group-item d-flex w-100 justify-content-between text-primary">
                  <div>Четверг:</div>
                  <div>10:00 – 19:00</div>
                </div>
                <div class="list-group-item d-flex w-100 justify-content-between">
                  <div>Пятница:</div>
                  <div>10:00 – 19:00</div>
                </div>
                <div class="list-group-item d-flex w-100 justify-content-between">
                  <div>Суббота:</div>
                  <div>11:00 – 15:00</div>
                </div>
                <div class="list-group-item d-flex w-100 justify-content-between">
                  <div>Воскресенье:</div>
                  <div>Выходной</div>
                </div>
              </div>
            </template>
          </v-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
