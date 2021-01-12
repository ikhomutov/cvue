<template>
  <div class="certificates">
    <div v-for="(item, index) in data" v-bind:key="index">
      <div>{{ item.name }}</div>
      <div>{{ item.date }}</div>
      <div v-if="item.description">{{ item.description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CertificatesSection',
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>
