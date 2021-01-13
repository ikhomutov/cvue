<template>
  <section-item title="education">
    <primary-item
      v-for="(item, index) in data"
      v-bind:key="index"
      v-bind:title="item.degree"
      v-bind:company="item.school"
      v-bind:dates="item.dates"
      v-bind:place="item.location"
      v-bind:description="item.description"
      listTitle="Courses"
      v-bind:listItems="item.courses"
    />
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'
import PrimaryItem from '../PrimaryItem'

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
  }
}
</script>
