<template>
  <CRow class="justify-content-between">
    <CCol :xs="4">
      <CCard
        color="success"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 25rem"
      >
        <CCardHeader><h4>Approved Loans Amount</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-check" :height="60"></CIcon>
              <h4 class="text-end">1,443,000 SAR</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="4">
      <CCard
        color="warning"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 25rem"
      >
        <CCardHeader><h4>Progress Loans Amount</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-ChevronDoubleRight" :height="60"></CIcon>
              <h4 class="text-end">443,000 SAR</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="4">
      <CCard
        color="danger"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 25rem"
      >
        <CCardHeader><h4>Rejected Loans Amount</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-xCircle" :height="60"></CIcon>
              <h4 class="text-end">2,443,000 SAR</h4>
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
