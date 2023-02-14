<script setup>
import { ref, defineProps } from 'vue'
defineProps({
  text: String,
  color: String,
})
const bgColors = ref({
  primary: '#100D40',
  white: '#ffffff',
})
const colors = ref({
  primary: '#ffffff',
  white: '#100D40',
})
const hoverColors = ref({
  primary: 'blue',
  white: '#e1c8ff',
})
const borderColors = ref({
  primary: '#100D40',
  white: '#100D40',
})
const hoverBorderColors = ref({
  primary: 'blue',
  white: '#100D40',
})
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 100%;
  background-color: v-bind(bgColors[color]);
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: v-bind(colors[color]);
  border: 1px solid v-bind(borderColors[color]);
}
button:hover {
  background-color: v-bind(hoverColors[color]);
  border: 1px solid v-bind(hoverBorderColors[color]);
}
</style>
