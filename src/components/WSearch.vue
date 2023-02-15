<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['handleSearch'])
const handleChange = (event) => {
  emit('handleSearch', event.target.value)
}
</script>

<template>
  <div class="d-flex position-relative mb-4">
    <input
      class="form-control ps-4"
      type="search"
      placeholder="search"
      @input="handleChange"
    />
    <span class="search">
      <CIcon icon="cil-search"></CIcon>
    </span>
  </div>
</template>
<script setup></script>
<style scoped>
input {
  border-radius: 20px;
}
.search {
  position: absolute;
  top: 8px;
  left: 5px;
}
</style>
