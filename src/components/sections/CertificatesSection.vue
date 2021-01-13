<template>
  <section-item title="certificates">
    <div v-for="(item, index) in data" v-bind:key="index">
      <div>{{ item.name }}</div>
      <div>{{ item.date }}</div>
      <div v-if="item.description">{{ item.description }}</div>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'CertificatesSection',
  components: {
    SectionItem,
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>
