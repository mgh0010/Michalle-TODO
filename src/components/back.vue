<template>
  <div class="back">
    <span @click="$router.push(url)">
      To Gets
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
  justify-content: flex-start;
  cursor: pointer;
}
</style>