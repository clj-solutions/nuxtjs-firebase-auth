<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { User } from './interfaces'

export default Vue.extend({
  data() {
    return {
      user: {} as User
    }
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(this.handleSignIn)
        .catch((err: any) => {
          alert(err)
        })
    },
    handleSignIn() {
      this.$router.push('/dashboard')
    }
  }
})
</script>

<template>
  <div>
    <b-form @submit.prevent="logIn">
      <slot />
      <b-form-group id="email-group" label="Email" label-for="email">
        <b-form-input
          id="email"
          v-model="user.email"
          name="email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password-group" label="Password" label-for="password">
        <b-form-input
          id="password"
          v-model="user.password"
          name="password"
          type="password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox id="customControlInline">Remember me</b-form-checkbox>

      <div class="mt-3">
        <b-button type="submit" variant="primary" class="btn-block"
          >Log In</b-button
        >
      </div>
      <div class="mt-4 text-center">
        <nuxt-link to="/account/forgot-password" class="text-muted">
          <i class="mdi mdi-lock mr-1"></i> Forgot your password?
        </nuxt-link>
      </div>
    </b-form>
  </div>
</template>
