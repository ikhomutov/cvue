<template>
  <div class="interests">
    <div v-for="(item, index) in data" v-bind:key="index">{{ item }}</div>
  </div>
</template>
<script>
export default {
  name: 'InterestsSection',
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>
