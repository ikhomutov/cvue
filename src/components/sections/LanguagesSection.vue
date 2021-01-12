<template>
  <div class="languages">
    <div v-for="(item, index) in data" v-bind:key="index">
      <div>{{ item.language }}</div>
      <div>{{ item.fluency }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LanguagesSection',
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>
