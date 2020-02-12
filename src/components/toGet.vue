<template>
  <div class="toGet">
    <p> {{ toGet.title }} </p>
    <font-awesome-icon 
      class="delete primary-orange" 
      :icon="['far', 'check-square']"
      @click="deleteToGet(toGet.id)">
    </font-awesome-icon>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'toGet',
  props: {
    toGet: {},
  },
  methods: {
    ...mapActions(['deleteToGet']),
  },
}
</script>

<style scoped>
.toGet{ 
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