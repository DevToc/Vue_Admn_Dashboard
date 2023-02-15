<script setup>
import { ref, defineProps, watch } from 'vue'
const tableHeaders = [
  '#',
  'Name',
  'Phone',
  'National Id',
  'Salary',
  'Status',
  'Actions',
]
const mockData = [
  ['Ahmed Hamdan', '40111111', '9933224', '13000', 'Active'],
  ['BB Hamdan', '505445566', '9933224', '13000', 'Active'],
  ['ZZ Hamdan', '305445566', '9933224', '13000', 'Active'],
  ['CC Hamdan', '205445566', '9933224', '13000', 'Active'],
  ['Dd Hamdan', '905445566', '9933224', '13000', 'Active'],
]
const props = defineProps({
  keyword: String,
})
watch(
  () => props.keyword,
  (first, second) => {
    console.log(second)
    search(first)
  },
)

const sortType = ref([0, 0])

const showData = ref(mockData)

const handleSort = (sortBy) => {
  if (sortBy === 1) {
    if (sortType.value[0] === 0) {
      console.log('ddd')
      showData.value.sort((data1, data2) => {
        if (data1[0] > data2[0]) {
          return 1
        } else {
          return -1
        }
      })
      sortType.value[0] = 1
    } else {
      showData.value.sort((data1, data2) => {
        if (data1[0] < data2[0]) {
          return 1
        } else {
          return -1
        }
      })
      sortType.value[0] = 0
    }
  } else {
    if (sortType.value[1] === 0) {
      showData.value.sort((data1, data2) => {
        if (data1[1] > data2[1]) {
          return 1
        } else {
          return -1
        }
      })
      sortType.value[1] = 1
    } else {
      showData.value.sort((data1, data2) => {
        if (data1[1] < data2[1]) {
          return 1
        } else {
          return -1
        }
      })
      sortType.value[1] = 0
      console.log(showData)
    }
  }
}

const search = (keyword) => {
  const sorted = mockData.filter(
    (data) =>
      data[0].toLowerCase().includes(keyword.toLowerCase()) ||
      data[1].toLowerCase().includes(keyword.toLowerCase()) ||
      data[2].toLowerCase().includes(keyword.toLowerCase()) ||
      data[3].toLowerCase().includes(keyword.toLowerCase()) ||
      data[4].toLowerCase().includes(keyword.toLowerCase()),
  )
  showData.value = sorted
}
</script>

<template>
  <CRow>
    <CCol :xs="12">
      <CTable striped>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell
              scope="col"
              v-for="(header, index) in tableHeaders"
              :key="index"
            >
              <button
                v-if="index === 1 || index === 2"
                class="btn btn-link"
                @click="handleSort(index)"
              >
                <CIcon icon="cil-cameraControl" color="white"></CIcon>
              </button>
              {{ header }}</CTableHeaderCell
            >
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow
            v-for="(data, index) in showData"
            :key="index + data[0] + data[2]"
          >
            <CTableHeaderCell scope="row">{{ index }}</CTableHeaderCell>
            <CTableDataCell>{{ data[0] }}</CTableDataCell>
            <CTableDataCell>{{ data[1] }}</CTableDataCell>
            <CTableDataCell>{{ data[2] }}</CTableDataCell>
            <CTableDataCell>{{ data[3] }}</CTableDataCell>
            <CTableDataCell>{{ data[4] }}</CTableDataCell>
            <CTableDataCell>
              <a :href="'Owners/' + index">View</a>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCol>
  </CRow>
</template>
<style scoped>
.btn-link {
  color: white !important;
  padding: 0;
}
</style>
