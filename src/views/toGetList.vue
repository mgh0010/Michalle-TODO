<template>
  <div 
    id="to-get-list" 
    v-touch:swipe.left='goToToDos'
    :class="{slideOutLeft: leavingView}"
  >
    <to-gets></to-gets>
  </div>
</template>

<script>
import '@/components/toGets'
import toGets from '@/components/toGets'

export default {
  name: 'toGetList',
  data() {
    return {
      leavingView: false,
    }
  },
  components: {
    toGets
  },
  methods: {
    goToToDos() {
      this.leavingView = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 80);
    }
  },
}
</script>

<style lang="css" scoped>
#to-get-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
}

@keyframes slideOutLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.slideOutLeft {
  animation: slideOutLeft .1s;
}
</style>
