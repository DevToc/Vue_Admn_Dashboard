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
      <!-- <span class="date-text">
        {{ mdate }}
      </span> -->
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
  /* padding-right:; */
}
/* .input-date-container span {
  position: absolute;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  top: 13px;
  left: 50px;
  z-index: 10;
} */
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
  /* display: none; */
  padding: 0 0.3em;
}
::-webkit-datetime-edit-month-field {
  /* display: none; */
}
::-webkit-datetime-edit-day-field {
  /* display: none; */
}
::-webkit-datetime-edit-year-field {
  /* display: none; */
}
::-webkit-inner-spin-button {
  /* display: none; */
}
::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 3px;
  width: 24px;
  height: 24px;
  background-image: url('../assets/calendar.png');
}
</style>
