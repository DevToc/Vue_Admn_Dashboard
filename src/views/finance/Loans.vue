<script setup>
import { ref } from 'vue'
import WExport from '@/components/WExport.vue'
import WSearch from '@/components/WSearch.vue'
import Tables from '../base/LoansTable.vue'

const keyword = ref('')
const handleSearch = (keyWord) => {
  keyword.value = keyWord
  // keyword.value = 'aaaa'
}
</script>
<template>
  <div>
    <WExport />
    <WSearch @handle-search="handleSearch" />
    <Tables :keyword="keyword"></Tables>
  </div>
</template>
