<template>
  <section-item title="awards">
    <secondary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.title"
      v-bind:dates="formatDate(item.date)"
      v-bind:company="item.awarder"
      v-bind:description="item.summary"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import SecondaryItem from '../SecondaryItem.vue'
import { formatDate } from '@/utils.js'

export default {
  name: 'AwardsSection',
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
