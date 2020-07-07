<template>
  <b-container>
    <div>
      <Page />
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '~/page-views/account/login/index.vue'

export default Vue.extend({
  auth: 'guest',
  layout: 'guest',
  components: {
    Page
  }
})
</script>
