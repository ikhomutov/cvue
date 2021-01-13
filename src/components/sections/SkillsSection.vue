<template>
  <section-item title="skills">
    <div v-for="(value, key) in data" v-bind:key="key">{{ key }}: {{ value }}</div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'SkillsSection',
  components: {
    SectionItem,
  },
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>
