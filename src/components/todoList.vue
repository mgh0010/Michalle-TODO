<template>
  <div class="todo-list">
    <h2 class="accent mb0">{{ name }}</h2>
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <hr class="grey-bg"/>
        <todo :todo='todo'></todo>
      </li>
    </ul>
    <input 
      type="text" 
      class="grey-bg" 
      v-model="newTodo" 
      :ref="name"
      @focus="inputFocused = true"
      @blur="setInputFocused(false)">
    <button 
      :id='`${name}-add-todo-btn`'
      class="floating-btn-bottom primary-green-bg" 
      @click="addNewTodo(listName)"
      v-show='inputFocused'>
      Add Todo
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Todo } from '@/types/Todo';
import todo from '@/components/todo'

export default {
  data() {
    return {
      newTodo: '',
      inputFocused: false,
    }
  },
  props: {
    name: {
      type: String,
    },
    listName: {
      type: String,
    },
    todos: {
      type: Array<Todo>[],
    }
  },
  components: {
    todo
  },
  methods: {
    ...mapActions(['addTodo']),
    async addNewTodo(familyMemberName) {
      const res = await this.addTodo({ title: this.newTodo, familyMemberName });
      this.newTodo = '';
      this.$refs[this.name].focus();
    },
    setInputFocused(inputFocused) {
      setTimeout(() => this.inputFocused = inputFocused, 200)
      
    }
  },

}
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
}
hr {
  border: none;
  height: 1px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
input {
  line-height: 3em;
  outline: none;
  margin-bottom: 1em;
  padding: 0 10px;
}
.todos {
  display: flex;
  flex-flow: column wrap;
  width: 90%;
}
</style>