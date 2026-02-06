<template>
  <div :style="themeStyle" class="page">
    <basic-section v-bind:data="basics" />
    <skills-section v-if="skills" v-bind:data="skills" />
    <experience-section v-if="work" v-bind:data="work" />
    <volunteer-section v-if="volunteer" v-bind:data="volunteer" />
    <education-section v-if="education" v-bind:data="education" />
    <awards-section v-if="awards" v-bind:data="awards" />
    <certificates-section v-if="certificates" v-bind:data="certificates" />
    <projects-section v-if="projects" v-bind:data="projects" />
    <languages-section v-if="languages" v-bind:data="languages" />
    <interests-section v-if="interests" v-bind:data="interests" />
  </div>
</template>
<script>
import BasicSection from './sections/BasicSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import VolunteerSection from './sections/VolunteerSection.vue'
import EducationSection from './sections/EducationSection.vue'
import AwardsSection from './sections/AwardsSection.vue'
import CertificatesSection from './sections/CertificatesSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import LanguagesSection from './sections/LanguagesSection.vue'
import InterestsSection from './sections/InterestsSection.vue'

export default {
  name: 'ResumePage',
  components: {
    BasicSection,
    SkillsSection,
    ExperienceSection,
    VolunteerSection,
    EducationSection,
    AwardsSection,
    CertificatesSection,
    ProjectsSection,
    LanguagesSection,
    InterestsSection,
  },
  computed: {
    themeStyle() {
      return {
        '--primary-color': this.color,
        '--secondary-color': '#616161',
      }
    }
  },
  props: {
    basics: {
      type: Object,
      required: true
    },
    skills: {
      type: Array,
      required: false
    },
    work: {
      type: Array,
      required: false
    },
    volunteer: {
      type: Array,
      required: false
    },
    education: {
      type: Array,
      required: false
    },
    awards: {
      type: Array,
      required: false
    },
    certificates: {
      type: Array,
      required: false
    },
    projects: {
      type: Array,
      required: false
    },
    languages: {
      type: Array,
      required: false
    },
    interests: {
      type: Array,
      required: false
    },
    color: {
      type: String,
      default: 'teal',
    }
  }
}
</script>
<style>
.page {
  min-height: 1280px;
  width: 890px;
  margin: 24px auto 24px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  background-color: #fff;
  border-radius: 4px;
  padding-top: 16px;
}
@media print {
 .page {
    box-shadow: none
  }
}
</style>
