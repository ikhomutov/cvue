<template>
  <section-item title="education">
    <div v-for="(item, index) in data" v-bind:key="index">
      <a v-if="item.website" v-bind:href="item.website">{{ item.school }}</a>
      <div v-else>{{ item.school }}</div>
      <div>{{ item.location }}</div>
      <div>{{ item.degree }}</div>
      <div>{{ item.dates }}</div>
      <ul v-if="item.courses">
        <li v-for="(course, cIndex) in item.courses" v-bind:key="cIndex">
          {{ course }}
        </li>
      </ul>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'EducationSection',
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
