<template>
  <div class="back">
    <span @click="$router.push(url)">
      Swipe For To Gets
    </span>
  </div>
</template>

<script>
export default {
  name: 'back',
  props: {
    url: {
      type: String,
    },
  },
}
</script>

<style scoped>
.back {
  display: flex;
  justify-content: center;
  cursor: pointer;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  opacity: .5;
}
</style>