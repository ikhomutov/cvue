<template>
  <section-item title="skills">
    <div v-for="(skillsList, skillsGroup) in data" v-bind:key="skillsGroup" class="skills-group">
      <div class="title">
        {{ skillsGroup }}
      </div>
      <div class="list">
        <div class="skill" v-for="(skill, index) in skillsList" v-bind:key="index">
          {{ skill }}
        </div>
      </div>
    </div>
  </section-item>
</template>
<script>
import SectionItem from '../SectionItem'

export default {
  name: 'SkillsSection',
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
  display: flex;
  gap: 16px;
}
</style>
