<template>
  <b-container>
    <div>
      <Page />
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '~/page-views/account/register/index.vue'

export default Vue.extend({
  layout: 'guest',
  components: {
    Page
  }
})
</script>
