<script setup>
import { ref } from 'vue'
let mdate = ref('')
const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const datechange = (e) => {
  let date = new Date(e.target.value)
  mdate.value =
    date.getDate() + ' ' + weekdays[date.getDay()] + ' ' + date.getFullYear()
}
</script>

<template>
  <div class="datepicker-container">
    <div class="input-date-container">
      <input type="date" name="" id="" @change="datechange" />
    </div>
  </div>
</template>

<style scoped>
.datepicker-container {
  display: flex;
  flex-direction: column;
}
.datepicker-container label {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #020614;
  opacity: 0.5;
}
.input-date-container {
  position: relative;
  border: 1px solid #0f0d2333;
  border-radius: 4px;
}
input {
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
}
::-webkit-datetime-edit {
  padding: 1em;
}
::-webkit-datetime-edit-fields-wrapper {
  margin-left: 20px;
}
::-webkit-datetime-edit-text {
  padding: 0 0.3em;
}
::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 3px;
  width: 24px;
  height: 24px;
  background-image: url('../assets/calendar.png');
}
</style>
