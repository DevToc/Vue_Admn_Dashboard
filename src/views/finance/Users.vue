<script setup>
import { ref } from 'vue'
import WSearch from '@/components/WSearch.vue'
import UsersTable from '@/views/base/UsersTable.vue'
const keyword = ref('')
const handleSearch = (KeyWord) => {
  keyword.value = KeyWord
}
</script>

<template>
  <CRow>
    <CCol :xs="12">
      <div class="control d-flex justify-content-end mb-4">
        <CButton color="primary">Create</CButton>
      </div>
      <WSearch v-on:handle-search="handleSearch"></WSearch>
      <UsersTable :keyword="keyword"></UsersTable>
    </CCol>
  </CRow>
</template>
