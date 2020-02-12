<template>
  <div id="to-get-list">
    <to-gets></to-gets>
  </div>
</template>

<script>
import '@/components/toGets'
import toGets from '@/components/toGets'

export default {
  name: 'toGetList',
  components: {
    toGets,
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
</style>
