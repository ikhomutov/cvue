<template>
  <section-item title="languages">
    <div v-for="(item, index) in data" v-bind:key="index">
      <div>{{ item.language }}</div>
      <div>{{ item.fluency }}</div>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'LanguagesSection',
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
