<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore';

export default {
  mounted () {
    this._getFamily();
    this._getTasks();
  },
  methods: {
    ...mapMutations(['setFamily', 'setTasks']),
    async _getFamily () {
      const snapshot = await firebase.firestore().collection('family').get();
      const family = [];
      snapshot.forEach(doc => {
        family.push(doc.data());
      })
      if(family.length > 0) {
        this.setFamily(family);
      }
    },
    async _getTasks () {
      const snapshot = await firebase.firestore().collection('family/michael/todoLists/todo/tasks')
        .onSnapshot(snapshot => {
          const tasks = [];
          snapshot.forEach(doc => {
            tasks.push(doc.data());
          })
          if(tasks.length > 0) {
            this.setTasks(tasks);
          }
        });
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.flex-row {
  display: flex;
  justify-content: center;
}

.input-wrapper {
  padding: .2em;
  background-color: #42b983;
}

input {
  line-height: 3em;
  outline: none;
}
</style>
