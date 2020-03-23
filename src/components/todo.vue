<template>
  <div class="todo">
    <div class="todo-details">
      <p @click="$router.push({path: `todo/${todo.id}`})" :class="{ mb0: todo.dueDate }"> {{ todo.title }} </p>
      <p class="todo-date mt0" :class="{mb0: !todo.dueDate}"> {{ todo.dueDate | date }} </p>
    </div>
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
.todo-details {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-left: 10px;
  margin-right: 10px;
}
.delete {
  cursor: pointer;
  padding-top: .2rem;
  padding-left: .5em;
}
.todo-date {
  color: grey;
}
</style>