<template>
  <div class="to-gets-wrapper">
    <h2>To Gets</h2>
    <ul class="to-gets">
      <li v-for="toGet in toGets" :key="toGet.id">
        <to-get :toGet='toGet'></to-get>
      </li>
    </ul>
    <form @submit.prevent="addNewToGet">
      <input 
        type="text" 
        class="grey-bg" 
        v-model="newToGet" 
        ref="toGetInput"
        @focus="inputFocused = true"
        @blur="setInputFocused(false)">
      <button 
        :id='`to-get-add-to-get-btn`'
        class="floating-bottom-right floating-btn primary-green-bg" 
        v-show='inputFocused'>
        Add To Get
      </button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { mapActions } from 'vuex';
import toGet from '@/components/toGet'

export default {
  data() {
    return {
      toGets: [],
      newToGet: '',
      inputFocused: false,
    }
  },
  mounted () {
    firebase.firestore().collection('toGets')
      .onSnapshot((snapshot) => {
        const toGets = [];
        snapshot.forEach(doc => {
          toGets.push(doc.data())
        })
        this.setToGets(toGets);
    });
  },
  methods: {
    ...mapActions(['addToGet']),
    setToGets(toGets) {
      this.toGets = toGets; 
    },
    setInputFocused(inputFocused) {
      setTimeout(() => this.inputFocused = inputFocused, 150)
    },
    async addNewToGet() {
      const res = await this.addToGet({ title: this.newToGet });
      this.newToGet = '';
      this.$refs.toGetInput.focus();
    },
  },
  components: {
    toGet
  },
}
</script>

<style scoped>

hr {
  border: none;
  height: 1px;
}

.to-gets {
  display: flex;
  flex-flow: column wrap;
  width: 90%;
}
</style>