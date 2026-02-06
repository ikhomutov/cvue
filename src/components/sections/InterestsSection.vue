<template>
  <section-item title="interests">
    <div class="interests">
      <div class="interest" v-for="(item, index) in data" v-bind:key="index">{{ item }}</div>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'

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

<style>
.interests {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.interest {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  border-width: 1.5px;
  border-color: var(--primary-color);
  border-style: solid;
}
</style>
