<template>
  <div class="todo-list">
    <h2 class="accent">{{ name }}</h2>
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <hr/>
        <todo :todo='todo'></todo>
      </li>
    </ul>
    <div class="flex-row">
      <div class="input-wrapper">
        <input type="text" v-model="newTodo" :ref="name">
      </div>
    </div>
    <button class="floating-btn" @click="addNewTodo(listName)">Add Todo</button>
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
  background-color: white;
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
}
.todos {
  display: flex;
  flex-flow: column wrap;
  width: 90%;
}
</style>