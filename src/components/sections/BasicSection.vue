<template>
  <div class="basic">
    <div>{{ data.name }}</div>
    <div>{{ data.title }}</div>
    <img v-if="data.photo" v-bind:src="data.photo"/>
    <div v-if="data.summary">{{ data.summary }}</div>
  </div>
</template>
<script>
export default {
  name: 'BasicSection',
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>
