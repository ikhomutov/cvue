<template>
  <section-item title="experience">
    <primary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.position"
      v-bind:company="item.name"
      v-bind:dates="formatDateRange(item.startDate, item.endDate)"
      v-bind:place="item.location"
      v-bind:description="item.summary"
      listTitle="Highlights"
      v-bind:listItems="item.highlights"
      v-bind:keywords="item.keywords"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import PrimaryItem from '../PrimaryItem.vue'
import { formatDateRange } from '@/utils.js'

export default {
  name: 'ExperienceSection',
  components: {
    SectionItem,
    PrimaryItem,
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    formatDateRange,
  },
}
</script>
