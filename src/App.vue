<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore';

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
  },
}
</script>