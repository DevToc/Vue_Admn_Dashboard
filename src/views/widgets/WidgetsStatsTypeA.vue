<template>
  <CRow>
    <CCol :xs="3">
      <CCard
        color="info"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 18rem"
      >
        <CCardHeader><h4>Total Loans</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-money" :height="60"></CIcon>
              <h4 class="text-end">33</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="3">
      <CCard
        color="success"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 18rem"
      >
        <CCardHeader><h4>Approved</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-check" :height="60"></CIcon>
              <h4 class="text-end">33</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="3">
      <CCard
        color="warning"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 18rem"
      >
        <CCardHeader><h4>In progress</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-ChevronDoubleRight" :height="60"></CIcon>
              <h4 class="text-end">33</h4>
            </CRow>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="3">
      <CCard
        color="danger"
        text-color="white"
        class="mb-3 border-top-3 border-white"
        style="max-width: 18rem"
      >
        <CCardHeader><h4>Rejected</h4></CCardHeader>
        <CCardBody>
          <CCardTitle></CCardTitle>
          <CCardText>
            <CRow class="align-items-center justify-content-center">
              <CIcon icon="cil-xCircle" :height="60"></CIcon>
              <h4 class="text-end">33</h4>
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
