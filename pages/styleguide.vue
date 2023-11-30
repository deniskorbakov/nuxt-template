<script lang="ts" setup>
import ButtonsExample from '~/components/StyleGuide/ButtonsExample.vue'
import TypographyExample from '~/components/StyleGuide/TypographyExample.vue'
import ColorsExample from '~/components/StyleGuide/ColorsExample.vue'
import FormsExample from '~/components/StyleGuide/FormsExample.vue'
import TablesExample from '~/components/StyleGuide/TablesExample.vue'
import DropdownsExample from '~/components/StyleGuide/DropdownsExample.vue'
</script>

<template>
  <NuxtLayout>
    <div>
      <div class="mt-4">
        <div class="text-center h1 fw-bold mb-4">
          Breakpoints
        </div>
        Размер контейнера меняется при следующих разрешениях. Ориентируясь на эти данные можно адаптивить нужные элементы. <br>
        Если используется <b>max-width</b>, то нужно указывать на пиксель меньше: <b>@media (max-width: 1199px)</b>
        <div>
          xs: 0 <br>
          sm: 576px<br>
          md: 768px<br>
          lg: 992px<br>
          xl: 1300px<br>
          xxl: 1470px
        </div>
      </div>

      <typography-example />
      <colors-example />
      <buttons-example />
      <forms-example />
      <tables-example />
      <dropdowns-example />
    </div>
  </NuxtLayout>
</template>
