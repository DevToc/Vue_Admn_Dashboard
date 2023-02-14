import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

createApp(App)
  .use(store)
  .use(router)
  .use(CoreuiVue)
  .provide('icons', icons)
  .component('CIcon', CIcon)
  .component('MazPhoneNumberInput', MazPhoneNumberInput)
  .component('DocsExample', DocsExample)
  .mount('#app')
