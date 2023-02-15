<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { CCol } from '@coreui/vue'
const mockData = [
  ['234', '15000 SAR', 'Ahmed Hamdan', '02-02-2023', 'In Progress'],
  ['236', '12000 SAR', 'Ahmed Hamdan', '02-02-2023', 'In Progress'],
  ['230', '1000 SAR', 'Ahmed Hamdan', '02-02-2023', 'In Progress'],
  ['244', '90000 SAR', 'Ahmed Hamdan', '02-02-2023', 'Rejected'],
  ['290', '20199 SAR', 'Ahmed Hamdan', '02-02-2023', 'Completed'],
]
const tableHeaders = [
  ['id', 'amount', 'due date', 'Status', 'Actions'],
  ['id', 'content', 'signed at', 'Status', 'Actions'],
  ['id', 'content', 'document type', 'action'],
]
const router = useRoute()
const { id } = router.params
const tabPanePillsActiveKey = ref(1)
const detailData = mockData[id]
</script>
<template>
  <CRow class="mb-4">
    <CCol col="auto" class="justify-content-start">
      <h4>{{ detailData[4] }}</h4>
    </CCol>
    <CCol col="auto" class="justify-content-end">
      <CButton color="primary">Update(v)</CButton>
    </CCol>
  </CRow>
  <div class="tab">
    <CNav variant="tabs" role="tablist" layout="justified" class="mb-4">
      <CNavItem>
        <CNavLink
          href="javascript:void(0);"
          :active="tabPanePillsActiveKey === 1"
          @click="
            () => {
              tabPanePillsActiveKey = 1
            }
          "
        >
          Loan Details
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="javascript:void(0);"
          :active="tabPanePillsActiveKey === 2"
          @click="
            () => {
              tabPanePillsActiveKey = 2
            }
          "
        >
          Payments
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="javascript:void(0);"
          :active="tabPanePillsActiveKey === 3"
          @click="
            () => {
              tabPanePillsActiveKey = 3
            }
          "
        >
          Contracts
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="javascript:void(0);"
          :active="tabPanePillsActiveKey === 4"
          @click="
            () => {
              tabPanePillsActiveKey = 4
            }
          "
        >
          Documents
        </CNavLink>
      </CNavItem>
    </CNav>
    <CTabContent>
      <CTabPane
        role="tabpanel"
        aria-labelledby="home-tab"
        :visible="tabPanePillsActiveKey === 1"
      >
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
        <CRow class="Notes position-relative border border-dark">
          <div class="title">Notes</div>
        </CRow>
      </CTabPane>
      <CTabPane
        role="tabpanel"
        aria-labelledby="profile-tab"
        :visible="tabPanePillsActiveKey === 2"
      >
        <CRow>
          <CCol :xs="12">
            <CTable striped>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell
                    scope="col"
                    v-for="(header, index) in tableHeaders[
                      tabPanePillsActiveKey - 2
                    ]"
                    :key="index"
                  >
                    {{ header }}</CTableHeaderCell
                  >
                </CTableRow>
              </CTableHead>
              <CTableBody style="height: 200px">
                <!-- <CTableRow
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
              <a :href="'Loans/' + index">View</a>
            </CTableDataCell>
          </CTableRow> -->
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CTabPane>
      <CTabPane
        role="tabpanel"
        aria-labelledby="contact-tab"
        :visible="tabPanePillsActiveKey === 3"
      >
        <CRow>
          <CCol :xs="12">
            <CTable striped>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell
                    scope="col"
                    v-for="(header, index) in tableHeaders[
                      tabPanePillsActiveKey - 2
                    ]"
                    :key="index"
                  >
                    {{ header }}</CTableHeaderCell
                  >
                </CTableRow>
              </CTableHead>
              <CTableBody style="height: 200px">
                <!-- <CTableRow
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
              <a :href="'Loans/' + index">View</a>
            </CTableDataCell>
          </CTableRow> -->
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CTabPane>
      <CTabPane
        role="tabpanel"
        aria-labelledby="contact-tab"
        :visible="tabPanePillsActiveKey === 4"
      >
        <CRow>
          <CCol :xs="12">
            <CTable striped>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell
                    scope="col"
                    v-for="(header, index) in tableHeaders[
                      tabPanePillsActiveKey - 2
                    ]"
                    :key="index"
                  >
                    {{ header }}</CTableHeaderCell
                  >
                </CTableRow>
              </CTableHead>
              <CTableBody style="height: 200px">
                <!-- <CTableRow
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
              <a :href="'Loans/' + index">View</a>
            </CTableDataCell>
          </CTableRow> -->
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CTabPane>
    </CTabContent>
  </div>
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
.Notes {
  height: 200px;
}
</style>
