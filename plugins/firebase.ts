import * as firebase from 'firebase/app'

const configOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
}

firebase.initializeApp(configOptions)
