<template>
  <section-item title="experience">
    <div v-for="(item, index) in data" v-bind:key="index">
      <a v-if="item.website" v-bind:href="item.website">{{ item.company }}</a>
      <div v-else>{{ item.company }}</div>
      <div>{{ item.location }}</div>
      <div>{{ item.position }}</div>
      <div>{{ item.dates }}</div>
      <div v-if="item.description">{{ item.description }}</div>
      <ul v-if="item.responsibilities">
        <li v-for="(responsibility, rIndex) in item.responsibilities" v-bind:key="rIndex">
          {{ responsibility }}
        </li>
      </ul>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'ExperienceSection',
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
