<template>
  <CForm class="row g-2 mb-2">
    <div class="col-auto">
      <CButton color="primary">Export</CButton>
    </div>
    <div class="col-auto">
      <CButton color="primary">Filter</CButton>
    </div>
    <div class="col-auto">
      <WBirthday></WBirthday>
    </div>
  </CForm>
</template>

<script setup>
import WBirthday from '@/components/WBirthday.vue'
</script>
<style scoped>
.row {
  width: auto;
}
</style>
