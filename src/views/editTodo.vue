<template>
  <div class="edit-todo">
    <h2>{{todo.title}}</h2>

    <div class="col-wrapper titleInput">
      <label for="dueDateInput">Title </label>
      <input name="dueDateInput" class="titleInput" type="text" v-model="todo.title"/>
    </div>

    <div class="col-wrapper titleInput">
      <label for="date-picker">Due Date</label>
      <input type="date" v-model="todo.dueDate" name="date-picker" id="date-picker">
    </div>

    <button 
      @click="_editTodo()"
      :id='`edit-todo-btn`'
      class="floating-bottom-right floating-btn primary-green-bg">
      Save Todo
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      todo: {},
    }
  },
  methods: {
    ...mapActions(['getTodo', 'editTodo']),
    async _editTodo() {
      await this.editTodo(this.todo);
      this.$router.push('/')
    }
  },

  async mounted() {
    this.todo = await this.getTodo(this.$route.params.id)
  }
  
}
</script>

<style scoped>
.col-wrapper {
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.titleInput {
  width: 80% !important;
}

app-datepicker {
  margin: auto;
}

</style>