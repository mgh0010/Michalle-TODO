<template>
  <div class="sign-in">
    <h3 id="app-title">Michalle TODO</h3>

    <form @submit.prevent="submit">
      <div class="col-wrapper">
        <label for="email">Email</label>
        <input type="email" name="email" v-model='email'>
      </div>

      <div class="col-wrapper">
        <label for="password">Password</label>
        <input type="password" name="password" v-model='password'>
      </div>

      <button class="floating-bottom-right floating-btn primary-green-bg" type="submit">SIGN IN</button>
    </form>
    <p v-if="error" class="warning">
      {{ error }}
    </p>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'signIn',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  async mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('setSignedIn', true);
        this.$router.replace('/')
      }
    })
  },
  methods: {
    submit() {
      firebase.auth()
      .signInWithEmailAndPassword(this.email, this.password) 
      .then(data => {
        this.$router.replace('/')
      })
      .catch(e => {
        this.error = error;
      })
    }
  },
}
</script>


<style scoped>
#app-title {
  margin-top: 4em;
}
.col-wrapper {
  display: flex;
  flex-flow: column;
}

button {
  float: right;
}
</style>