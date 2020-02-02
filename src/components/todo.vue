<template>
  <div class="todo">
    <p> {{ todo.title }} </p>
    <span class="delete" @click="deleteTodo(todo.id)">X</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Todo } from '@/types/Todo';

export default {
  name: 'todo',
  props: {
    todo: {
      type: Todo,
    },
  },
  methods: {
    ...mapActions(['deleteTodo']),
  },
}
</script>

<style scoped>
.delete {
  cursor: pointer;
  color: red;
}
</style>