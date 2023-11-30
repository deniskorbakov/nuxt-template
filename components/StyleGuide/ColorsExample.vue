<template>
  <div class="mb-5">
    <div class="text-center h1 fw-bold mb-4">
      Colors
    </div>

    <div class="row row-cols-4 text-center mb-5">
      <div class="col">
        <div class="border p-2">
          <div class="bg-primary color-bg d-flex w-100" />
          <div>primary</div>
        </div>
      </div>
      <div class="col">
        <div class="border p-2">
          <div class="bg-success color-bg d-flex w-100" />
          <div>success</div>
        </div>
      </div>
      <div class="col">
        <div class="border p-2">
          <div class="bg-black color-bg d-flex w-100" />
          <div>black</div>
        </div>
      </div>
      <div class="col">
        <div class="border p-2">
          <div class="bg-secondary color-bg d-flex w-100" />
          <div>secondary</div>
        </div>
      </div>
    </div>

    <div class="border p-2">
      <div class="bg-gradient gradient-primary gradient-block">
        <div class="d-flex align-items-center justify-content-center w-100 h-100">
          <div class="text-white fw-bold">
            bg-gradient gradient-primary
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.color-bg {
  height: 200px;
  margin-bottom: 8px;
}

.gradient-block {
  height: 100px;
  width: 100%;
}
</style>
