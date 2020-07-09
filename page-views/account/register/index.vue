<script lang="ts">
import Vue from 'vue'
import Form from '~/page-views/account/register/form.vue'

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
                <h5 class="text-primary">Free Register</h5>
              </div>
            </b-col>
            <b-col cols="5" class="align-self-end">
              <img src="/images/profile-img.png" alt class="img-fluid" />
            </b-col>
          </b-row>
        </div>
        <b-card-body class="pt-0">
          <div>
            <b-link href="javascript: void(0);">
              <div class="avatar-md profile-user-wid mb-4">
                <span class="avatar-title rounded-circle bg-light">
                  <img src="/images/logo-sm-light.png" alt height="34" />
                </span>
              </div>
            </b-link>
          </div>

          <!-- register form -->
          <Form />
        </b-card-body>
        <!-- end card-body -->
      </b-card>
      <!-- end card -->

      <div class="mt-5 text-center">
        <p>
          Already have an account ?
          <b-link
            href="javascript: void(0);"
            class="font-weight-medium text-primary"
          >
            Login
          </b-link>
        </p>
      </div>
    </b-col>
    <!-- end col -->
  </b-row>
</template>

<style lang="scss" module></style>
