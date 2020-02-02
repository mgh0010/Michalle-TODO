<template>
  <div class="home">
    <todos-main/>
  </div>
</template>

<script>
// @ is an alias to /src
import todosMain from '@/components/todosMain.vue'

export default {
  name: 'home',
  components: {
    todosMain
  }
}
</script>
