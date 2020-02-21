<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4G1dXopIqqZLNnpWYnFdW9MU1rUEA7eg",
  authDomain: "michalletodo.firebaseapp.com",
  databaseURL: "https://michalletodo.firebaseio.com",
  projectId: "michalletodo",
  storageBucket: "michalletodo.appspot.com",
  messagingSenderId: "499823278543",
  appId: "1:499823278543:web:e4eb521715cb35d8cababa",
  measurementId: "G-C8QM4L2L1Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  async mounted () {
    this._getFamily();
    this.watchTodos(1);
    this.watchTodos(2);
  },
  methods: {
    ...mapMutations(['setFamily']),
    ...mapActions(['watchTodos']),
    async _getFamily () {
      const snapshot = await firebase.firestore().collection('family').get();
      const family = [];
      snapshot.forEach(doc => {
        family.push(doc.data());
      })
      this.setFamily(family);
    },
    async signOut () {
      await firebase.auth().signOut();
      this.$router.push('sign-in');
    }
  },
}
</script>

<style scoped>
#app {
  min-height: 95vh;
}
#app > * {
  height: 98vh;
}

#sign-out-btn {
  position: absolute;
}
</style>