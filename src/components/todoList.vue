<template>
  <div class="todo-list">
      <h3>{{ name }}</h3>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <todo :todo='todo'></todo>
        </li>
      </ul>
      <div class="flex-row">
        <div class="input-wrapper">
          <input type="text" v-model="newTodo" :ref="name">
        </div>
      </div>
      <button @click="addNewTodo(listName)">Add Todo</button>
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
</style>