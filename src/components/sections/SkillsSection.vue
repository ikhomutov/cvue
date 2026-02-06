<template>
  <section-item title="skills">
    <div v-for="skill in data" :key="skill.name" class="skills-group">
      <div class="title">
        {{ skill.name }}
      </div>
      <div class="list">
        <div class="skill" v-for="kw in skill.keywords" :key="kw">
          {{ kw }}
        </div>
      </div>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem.vue'

export default {
  name: 'SkillsSection',
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
.skills-group {
  display: flex;
  margin-bottom: 8px;
}
.skills-group .title {
  text-transform: capitalize;
  color: var(--primary-color);
  min-width: 120px;
}
.skills-group .list {
  margin-left: 8px;
  display: flex;
  gap: 16px;
}
</style>
