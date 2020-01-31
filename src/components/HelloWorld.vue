<template>
  <div class="hello">
    <div>
      <p>
        {{ this.$store.state.family.length > 0 
          ? this.$store.state.family[0].name 
          : '' }}
      </p>

      <ul>
        <li v-for="todo in alexandrasTodos" :key="todo.id">
          <p> {{ todo.title }} </p>
          <span class="delete" @click="deleteTodo(todo.id)">X</span>
          
        </li>
      </ul>
      <div class="flex-row">
        <div class="input-wrapper">
          <input type="text" v-model="newTodo" ref="todoInput1">
        </div>
      </div>
      <button @click="addNewTodo('alexandra')">Add Todo</button>
    </div>

    <div>
      <p>
        {{ this.$store.state.family.length > 0 
          ? this.$store.state.family[1].name 
          : '' }}
      </p>
      <ul>
        <li v-for="todo in michaelsTodos" :key="todo.id">
          <p> {{ todo.title }} </p>
          <span class="delete" @click="deleteTodo(todo.id)">X</span>
          
        </li>
      </ul>
      <div class="flex-row">
        <div class="input-wrapper">
          <input type="text" v-model="newTodo" ref="todoInput2">
        </div>
      </div>
      <button @click="addNewTodo('michael')">Add Todo</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default  {
  data() {
    return {
      newTodo: '',
    }
  },
  async mounted () {
  },
  computed: {
    ...mapState(['family', 'michaelsTodos', 'alexandrasTodos'])
  },
  methods: {
    ...mapActions(['addTodo', 'deleteTodo']),
    async addNewTodo(familyMemberName) {
      const res = await this.addTodo({ title: this.newTodo, familyMemberName });
      this.newTodo = '';
      this.$refs.todoInput1.focus();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.delete {
  cursor: pointer;
  color: red;
}
.input-wrapper {
  width: 100%;
}
input { width: 90% }
</style>
