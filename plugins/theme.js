import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import vClickOutside from 'v-click-outside'
import VueApexCharts from 'vue-apexcharts'

Vue.use(BootstrapVue)
Vue.use(vClickOutside)
Vue.component('apexchart', VueApexCharts)
