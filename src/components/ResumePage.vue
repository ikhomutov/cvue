<template>
  <basic-section v-bind:data="basic" />
  <skills-section v-if="skills" v-bind:data="skills" />
  <experience-section v-if="experience" v-bind:data="experience" />
  <education-section v-if="education" v-bind:data="education" />
  <certificates-section v-if="certificates" v-bind:data="certificates" />
  <courses-section v-if="courses" v-bind:data="courses" />
  <projects-section v-if="projects" v-bind:data="projects" />
  <languages-section v-if="languages" v-bind:data="languages" />
  <interests-section v-if="interests" v-bind:data="interests" />
</template>
<script>
import BasicSection from './sections/BasicSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import CertificatesSection from './sections/CertificatesSection'
import CoursesSection from './sections/CoursesSection'
import ProjectsSection from './sections/ProjectsSection'
import LanguagesSection from './sections/LanguagesSection'
import InterestsSection from './sections/InterestsSection'

export default {
  name: 'ResumePage',
  components: {
    BasicSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    CertificatesSection,
    CoursesSection,
    ProjectsSection,
    LanguagesSection,
    InterestsSection,
  },
  props: {
    basic: {
      type: Object,
      required: true
    },
    contacts: {
      type: Object,
      required: false
    },
    skills: {
      type: Object,
      required: false
    },
    experience: {
      type: Array,
      required: false
    },
    education: {
      type: Array,
      required: false
    },
    certificates: {
      type: Array,
      required: false
    },
    courses: {
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
  }
}
</script>
