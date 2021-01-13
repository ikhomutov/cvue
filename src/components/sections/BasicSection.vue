<template>
  <section-item>
    <div>{{ data.name }}</div>
    <div>{{ data.title }}</div>
    <img v-if="data.photo" v-bind:src="data.photo"/>
    <div v-if="data.summary">{{ data.summary }}</div>
    <ul v-if="data.contacts">
      <li v-for="(value, key) in data.contacts" v-bind:key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'BasicSection',
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
