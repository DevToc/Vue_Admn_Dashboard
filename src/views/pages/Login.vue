<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <CForm @submit.prevent="handleLogin">
            <h1 class="text-center">Login</h1>
            <p class="text-medium-emphasis text-center">
              Sign In to your account
            </p>
            <WPhoneNumber></WPhoneNumber>
            <CRow class="justify-content-center mt-4">
              <WButton text="Login" color="primary"></WButton>
            </CRow>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import WPhoneNumber from '@/components/WPhoneNumber.vue'
import WButton from '@/components/WButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleLogin = () => {
  router.push('/dashboard')
}
</script>
<style scoped>
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
