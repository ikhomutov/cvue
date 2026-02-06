<template>
  <section-item title="projects">
    <secondary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.name"
      v-bind:link="item.link"
      v-bind:dates="item.dates"
      v-bind:description="item.description"
      v-bind:listItems="item.achievements"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import SecondaryItem from '../SecondaryItem.vue'

export default {
  name: 'ProjectsSection',
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
