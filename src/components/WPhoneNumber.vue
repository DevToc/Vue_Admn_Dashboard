<script setup>
import 'maz-ui/css/main.css'
</script>
<template>
  <div class="phone-number-input-container">
    <label>Phone Number</label>
    <MazPhoneNumberInput
      color="info"
      :translations="{
        countrySelector: {
          placeholder: 'country code',
          error: 'Choose country',
        },
        phoneInput: {
          placeholder: '',
          example: '',
        },
      }"
    />
  </div>
</template>
<style lang="scss">
.phone-number-input-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  label {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: #020614;
    opacity: 0.5;
  }
}

.m-input {
  padding-top: 0px !important;
}
.m-input-input {
  padding-top: 0px !important;
}
.m-input-label {
  display: none !important;
}
.m-phone-number-input {
  padding-top: 0 !important;
}
.maz-flag {
  height: 20px !important;
  background-color: white !important;
}
</style>
