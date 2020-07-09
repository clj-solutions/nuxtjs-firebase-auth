<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { User } from './interfaces'

export default Vue.extend({
  data() {
    return {
      user: {} as User,
      passwordConfirmation: ''
    }
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.sendEmailVerification()
        })
        .catch((err: any) => {
          alert(err)
        })
    },
    sendEmailVerification() {
      const user = this.getCurrentUser()

      if (!user) return

      user.sendEmailVerification().then(() => {
        alert('successfully registered!')
      })
    },
    getCurrentUser() {
      const user = firebase.auth().currentUser

      return user
    }
  }
})
</script>

<template>
  <div class="p-2">
    <b-form @submit.prevent="register">
      <slot />
      <b-form-group
        id="first-name-group"
        label="First Name"
        label-for="first-name"
      >
        <b-form-input
          id="first-name"
          v-model="user.firstName"
          name="first-name"
          type="text"
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="last-name-group"
        label="Last Name"
        label-for="last-name"
      >
        <b-form-input
          id="last-name"
          v-model="user.lastName"
          name="last-name"
          type="text"
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

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

      <b-form-group label="Confirm Password" label-for="password-confirm">
        <b-form-input
          id="password-confirm"
          v-model="passwordConfirmation"
          name="password_confirmation"
          type="password"
          placeholder="Confirm password"
        ></b-form-input>
      </b-form-group>

      <div class="mt-4">
        <b-button type="submit" variant="primary" class="btn-block">
          Register
        </b-button>
      </div>
    </b-form>
  </div>
</template>
