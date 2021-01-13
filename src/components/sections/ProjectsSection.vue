<template>
  <section-item title="projects">
    <div v-for="(item, index) in data" v-bind:key="index">
      <a v-if="item.link" v-bind:href="item.link">{{ item.name }}</a>
      <div v-else>{{ item.name }}</div>
      <div v-if="item.dates">{{ item.dates }}</div>
      <div v-if="item.description">{{ item.description }}</div>
      <ul v-if="item.achievements">
        <li v-for="(achievement, aIndex) in item.achievements" v-bind:key="aIndex">
          {{ achievement }}
        </li>
      </ul>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'ProjectsSection',
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
