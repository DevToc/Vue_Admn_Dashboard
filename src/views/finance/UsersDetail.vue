<script setup>
import { useRoute } from 'vue-router'
const mockData = [
  ['Ahmed Hamdan', 'hh@dofaat.net', '40111111', 'Admin', '13000', 'Active'],
  ['BB Hamdan', 'aa@dofaat.net', '505445566', 'Admin', '13000', 'Active'],
  ['ZZ Hamdan', 'zz@dofaat.net', '305445566', 'Admin', '13000', 'Active'],
  ['CC Hamdan', 'cc@dofaat.net', '205445566', 'Admin', '13000', 'Active'],
  ['Dd Hamdan', 'dd@dofaat.net', '905445566', 'Admin', '13000', 'Active'],
]
const router = useRoute()
const { id } = router.params
const detailData = mockData[id]
</script>
<template>
  <CRow class="mb-4">
    <CCol col="auto" class="justify-content-start">
      <h4>{{ detailData[5] }}</h4>
    </CCol>
    <CCol col="auto" class="justify-content-end">
      <CButton color="primary">Update(v)</CButton>
    </CCol>
  </CRow>
  <CRow class="mb-4">
    <CCol :xs="6" class="detail-left">
      <div class="title">Details</div>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
    </CCol>

    <CCol :xs="6" class="detail-right">
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
      <CCol :xs="12">
        <div class="d-flex justify-content-between w-100">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </CCol>
    </CCol>
  </CRow>
</template>
<style scoped>
.col {
  display: flex;
}
.detail-left,
.detail-right {
  padding: 0;
  margin: 0;
  border: 1px solid black;
  padding: 2rem;
}
.detail-left {
  position: relative;
}

.title {
  background-color: rgb(235 237 239);
  margin: 0;
  color: black;
  position: absolute;
  top: -15px;
  left: 15px;
  padding: 4px;
  width: auto;
}
</style>
