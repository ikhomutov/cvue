<template>
  <section-item title="certificates">
    <secondary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.name"
      v-bind:dates="formatDate(item.date)"
      v-bind:description="item.issuer"
      v-bind:link="item.url"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import SecondaryItem from '../SecondaryItem.vue'
import { formatDate } from '@/utils.js'

export default {
  name: 'CertificatesSection',
  components: {
    SectionItem,
    SecondaryItem,
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    formatDate,
  },
}
</script>
