<template>
  <section-item title="courses">
    <secondary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.name"
      v-bind:dates="item.date"
      v-bind:description="item.description"
      v-bind:company="item.company"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import SecondaryItem from '../SecondaryItem.vue'

export default {
  name: 'CoursesSection',
  components: {
    SectionItem,
    SecondaryItem,
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>
