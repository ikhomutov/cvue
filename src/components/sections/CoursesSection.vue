<template>
  <div class="courses">
    <div v-for="(item, index) in data" v-bind:key="index">
      <div>{{ item.name }}</div>
      <div>{{ item.date }}</div>
      <div v-if="item.company">{{ item.company }}</div>
      <div v-if="item.description">{{ item.description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CoursesSection',
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>
