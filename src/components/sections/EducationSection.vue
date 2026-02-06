<template>
  <section-item title="education">
    <primary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="formatDegree(item)"
      v-bind:company="item.institution"
      v-bind:dates="formatDateRange(item.startDate, item.endDate)"
      v-bind:description="item.score"
      listTitle="Courses"
      v-bind:listItems="item.courses"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import PrimaryItem from '../PrimaryItem.vue'
import { formatDateRange } from '@/utils.js'

export default {
  name: 'EducationSection',
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
    formatDegree(item) {
      const parts = [item.studyType, item.area].filter(Boolean)
      return parts.join(' in ')
    },
  },
}
</script>
