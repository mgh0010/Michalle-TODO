<template>
  <div class="list-item">
    <p> {{ listItem.title }} </p>
    <font-awesome-icon 
      class="delete primary-orange" 
      :icon="['far', 'check-square']"
      @click="whenRemoved(listItem.id)">
    </font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    listItem: Object,
    whenRemoved: Function
  },
  methods: {
  },
}
</script>

<style scoped>
.list-item{ 
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete {
  cursor: pointer;
  padding-top: .2rem;
  padding-left: .5em;
}
</style>