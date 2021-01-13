<template>
  <section-item title="interests">
    <div v-for="(item, index) in data" v-bind:key="index">{{ item }}</div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'InterestsSection',
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
