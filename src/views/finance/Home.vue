<template>
  <div>
    <div class="row justify-content-end">
      <WExport />
    </div>
    <WidgetsStatsTypeA />
    <WidgetsStatsTypeB />
    <WidgetsStatsTypeC />
  </div>
</template>

<script setup>
import WExport from '@/components/WExport.vue'
import WidgetsStatsTypeA from '../widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsTypeB from '../widgets/WidgetsStatsTypeB.vue'
import WidgetsStatsTypeC from '../widgets/WidgetsStatsTypeC.vue'
</script>
