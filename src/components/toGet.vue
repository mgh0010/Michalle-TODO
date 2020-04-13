<template>
  <div class="toGet">
    <list-item
      :listItem='toGet'
      :whenRemoved='deleteToGet'>
    </list-item>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import listItem from '@/components/listItem'

export default {
  name: 'toGet',
  props: {
    toGet: {},
  },
  components: {
    listItem,
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