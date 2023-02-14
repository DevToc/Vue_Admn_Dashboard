<template>
  <CRow class="justify-content-between">
    <CCol :xs="6">
      <CCard
        color="info"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 56rem"
      >
        <CCardHeader><h4>Approved Loans Amount</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-money" :height="60"></CIcon>
              <h4 class="text-end">122</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="6">
      <CCard
        color="info"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 56rem"
      >
        <CCardHeader><h4>Total Owners</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-group" :height="60"></CIcon>
              <h4 class="text-end">122</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
// import { CChart } from '@coreui/vue-chartjs'
// export default {
//   name: 'WidgetsStatsA',
//   components: {
//     CChart,
//   },
// }
</script>
