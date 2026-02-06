<template>
  <section-item title="languages">
    <div class="languages">
      <div class="language" v-for="(item, index) in data" v-bind:key="index">
        <div class="language-name">{{ item.language }}</div>
        <div class="language-fluency">{{ item.fluency }}</div>
      </div>
    </div>
  </section-item>
</template>

<script>
import SectionItem from '../SectionItem.vue'

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

<style>
.languages {
  display: flex;
  flex-wrap: wrap;
}

.language {
  flex-grow: 0;
  flex-basis: 25%;
  max-width: 25%;
  padding: 8px;
}

.language-fluency {
  color: var(--primary-color);
  font-style: italic;
}
</style>
