<script lang="ts">
import Vue from 'vue'
import Form from '~/page-views/account/login/form.vue'

export default Vue.extend({
  components: {
    Form
  }
})
</script>

<template>
  <b-row class="justify-content-center">
    <b-col md="8" lg="6" xl="5">
      <b-card no-body class="overflow-hidden">
        <div class="bg-soft-primary">
          <b-row>
            <b-col cols="7">
              <div class="text-primary p-4">
                <h5 class="text-primary">Welcome Back !</h5>
              </div>
            </b-col>
            <b-col cols="5" class="align-self-end">
              <img src="/images/profile-img.png" alt class="img-fluid" />
            </b-col>
          </b-row>
        </div>
        <b-card-body class="pt-0">
          <div>
            <nuxt-link to="/">
              <div class="avatar-md profile-user-wid mb-4">
                <span class="avatar-title rounded-circle bg-light">
                  <img src="/images/logo-sm-light.png" alt height="34" />
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="p-2">
            <Form />
          </div>
        </b-card-body>
      </b-card>

      <div class="mt-5 text-center">
        <p>
          Don't have an account ?
          <nuxt-link
            to="/account/register"
            class="font-weight-medium text-primary"
            >Register</nuxt-link
          >
        </p>
      </div>
    </b-col>
  </b-row>
</template>
