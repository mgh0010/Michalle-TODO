<template>
  <div class="todos-main">
    <mah-back url='toGets'></mah-back>
    <todo-list :name="this.$store.state.family.length > 0 ? this.$store.state.family[0].name : ''"
               listName='alexandra'
               :todos='alexandrasTodos'></todo-list>
    <todo-list :name="this.$store.state.family.length > 0 ? this.$store.state.family[1].name : ''"
               listName='michael'
               :todos='michaelsTodos'></todo-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import todo from '@/components/todo'
import todoList from '@/components/todoList'

import '@/components/back'

export default  {
  components: {
    todo, todoList
  },
  computed: {
    ...mapState(['family', 'michaelsTodos', 'alexandrasTodos'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.todos-main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
