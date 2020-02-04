<template>
  <div class="todo">
    <p> {{ todo.title }} </p>
    <font-awesome-icon 
      class="delete primary-orange" 
      :icon="['far', 'check-square']"
      @click="deleteTodo(todo.id)">
    </font-awesome-icon>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Todo } from '@/types/todo';

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
.todo{ 
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete {
  cursor: pointer;
  padding-top: .2rem;
  padding-left: .5em;
}
</style>