<template>
  <div class="todoLists">
    <todos-main/>
  </div>
</template>

<script>
// @ is an alias to /src
import todosMain from '@/components/todosMain.vue'

export default {
  name: 'todoLists',
  components: {
    todosMain
  }
}
</script>
