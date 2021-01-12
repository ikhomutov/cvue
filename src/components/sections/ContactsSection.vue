<template>
  <div class="contacts">
    <div v-for="(value, key) in data" v-bind:key="key">{{ key }}: {{ value }}</div>
  </div>
</template>
<script>
export default {
  name: 'ContactsSection',
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>
