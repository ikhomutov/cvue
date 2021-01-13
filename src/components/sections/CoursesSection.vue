<template>
  <section-item title="courses">
    <div v-for="(item, index) in data" v-bind:key="index">
      <div>{{ item.name }}</div>
      <div>{{ item.date }}</div>
      <div v-if="item.company">{{ item.company }}</div>
      <div v-if="item.description">{{ item.description }}</div>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'CoursesSection',
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
