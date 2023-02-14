<template>
  <div>
    <CForm class="row g-2 justify-content-end mb-4">
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
    <WidgetsStatsTypeA />
    <WidgetsStatsTypeB />
    <WidgetsStatsTypeC />
  </div>
</template>

<script setup>
import WidgetsStatsTypeA from '../widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsTypeB from '../widgets/WidgetsStatsTypeB.vue'
import WidgetsStatsTypeC from '../widgets/WidgetsStatsTypeC.vue'
import WBirthday from '../../components/WBirthday.vue'
</script>
