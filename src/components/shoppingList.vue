<template>
  <div class="shoppingList">
    <h2 class="accent">Shopping List</h2>
    
    <div v-for="shoppingItem in shoppingList" :key='shoppingItem.key'>
      <list-item
        :listItem='shoppingItem'
        :whenRemoved='deleteShoppingItem'>
      </list-item>
    </div>

    <form @submit.prevent="addNewShoppingItem">
      <input 
        type="text" 
        class="grey-bg" 
        v-model="newShoppingItem" 
        ref="newShoppingItemInput"
        @focus="inputFocused = true"
        @blur="setInputFocused(false)">
      <button 
        :id='`shopping-list-add-btn`'
        class="floating-bottom-right floating-btn primary-green-bg" 
        v-show='inputFocused'>
        Add Shopping Item
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import listItem from '@/components/listItem';

export default {
  name: 'shoppingList',
  data() {
    return {
      inputFocused: false,
      newShoppingItem: '',
    }
  },
  mounted () {
    this.watchShoppingList();
  },
  components: {
    listItem,
  },
  computed: {
    ...mapState(['shoppingList'])
  },
  methods: {
    ...mapActions(['watchShoppingList', 'addShoppingItem', 'deleteShoppingItem']),
    setInputFocused(inputFocused) {
      setTimeout(() => this.inputFocused = inputFocused, 150)
    },
    async addNewShoppingItem() {
      const res = await this.addShoppingItem({ title: this.newShoppingItem });
      this.newShoppingItem = '';
      this.$refs.newShoppingItemInput.focus();
    },
  },
}
</script>