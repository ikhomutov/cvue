<template>
  <section-item title="experience">
    <primary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.position"
      v-bind:company="item.company"
      v-bind:dates="item.dates"
      v-bind:place="item.location"
      v-bind:description="item.description"
      listTitle="Responsibilities"
      v-bind:listItems="item.responsibilities"
      v-bind:keywords="item.keywords"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'
import PrimaryItem from '../PrimaryItem.vue'

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
}
</script>
