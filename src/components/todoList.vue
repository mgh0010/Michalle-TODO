<template>
  <div class="todo-list">
    <h2 class="accent mb0">{{ name }}</h2>
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <hr class="grey-bg"/>
        <todo :todo='todo'></todo>
      </li>
    </ul>
    <form @submit.prevent="addNewTodo()">
      <input 
        type="text" 
        class="grey-bg" 
        v-model="newTodo" 
        :ref="name"
        @focus="setInputFocused(true)"
        @blur="setInputFocused(false)">
      <button 
        :id='`${name}-add-todo-btn`'
        class="floating-bottom-right floating-btn primary-green-bg" 
        v-show='inputFocused'>
        Add Todo
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Todo } from '@/types/todo';
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
    addNewTodo() {
      const res = this.addTodo({ title: this.newTodo, familyMemberName: this.listName });
      this.newTodo = '';
      this.$refs[this.name].focus();
    },
    setInputFocused(inputFocused) {
      setTimeout(() => this.inputFocused = inputFocused, 150)
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

.todos {
  display: flex;
  flex-flow: column wrap;
  width: 90%;
}
</style>