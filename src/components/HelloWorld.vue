<template>
  <div class="hello">
    <div>
      <p>
        {{ this.$store.state.family.length > 0 
          ? this.$store.state.family[0].name 
          : '' }}
      </p>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <p> {{ task.title }} </p>
          <span class="delete" @click="deleteTask(task, 'michael', 'todo')">X</span>
          
        </li>
      </ul>
      <div class="flex-row">
        <div class="input-wrapper">
          <input type="text" v-model="newTask" ref="taskInput">
        </div>
      </div>
      <button @click="addNewTask(newTask, 'michael', 'todo')">Add Task</button>
    </div>
    <div>
      <p>
        {{ this.$store.state.family.length > 0 
          ? this.$store.state.family[1].name 
          : '' }}
      </p>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <p> {{ task.title }} </p>
          <span class="delete" @click="deleteTask(task, 'Alexandra', 'todo')">X</span>
          
        </li>
      </ul>
      <div class="flex-row">
        <div class="input-wrapper">
          <input type="text" v-model="newTask" ref="taskInput">
        </div>
      </div>
      <button @click="addNewTask(newTask, 'Alexandra', 'todo')">Add Task</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default  {
  data() {
    return {
      newTask: ''
    }
  },
  computed: {
    ...mapState(['family', 'tasks'])
  },
  methods: {
    ...mapActions(['addTask', 'deleteTask']),
    async addNewTask(familyMember, todoListName) {
      const res = await this.addTask(this.newTask, familyMember, todoListName)
      this.newTask = '';
      this.$refs.taskInput.focus();
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
