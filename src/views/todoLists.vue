<template>
  <div class="todoLists"
    :class="{slideOutRight: leavingView}" 
    v-touch:swipe.right='goToToGets'>
    <back url='to-gets'></back>
    <todos-main/>
  </div>
</template>

<script>
import todosMain from '@/components/todosMain.vue'
import back from '@/components/back'

export default {
  name: 'todoLists',
  data() {
    return {
      leavingView: false,
    }
  },
  components: {
    todosMain, back
  },
  methods: {
    goToToGets() {
      this.leavingView = true;
      setTimeout(() => {
        this.$router.push("to-gets");
      }, 80);
    }
  }
}
</script>

<style scoped>
.todoLists {
  display: flex;
  flex-flow: row nowrap;
}

@keyframes slideOutRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.slideOutRight {
  animation: slideOutRight .1s;
}
</style>
