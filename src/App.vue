<template>
  <div v-if="isLoading">Loading...</div>
  <resume-page v-bind="data" v-else />
</template>

<script>
import ResumePage from '@/components/ResumePage'
import { resumeUrl } from '@/config'
import yaml from 'js-yaml';

export default {
  name: 'App',
  components: {
    ResumePage
  },
  data() {
    return {
      isLoading: true,
      data: null,
      error: null
    }
  },
  methods: {
    fetchResume() {
      fetch(resumeUrl)
        .then(response => {
          return response.text()
        })
        .then(data => {
          const doc = yaml.load(data)
          this.data = doc
          this.isLoading = false
        })
        .catch(error => {
          console.log('failed to load yaml', error.stack)
          this.error = 'Unable to load yaml'
          this.isLoading = false
        })
    },
  },
  /*  parseYaml(data) {*/
  /*    const requiredFields = ['name', 'title', 'contacts'];*/
  /*    const fieldMissing = [];*/

  /*    requiredFields.forEach((field) => {*/
  /*      if (!(field in doc)) {*/
  /*        fieldMissing.push(field)*/
  /*      }*/
  /*    });*/

  /*    if (fieldMissing.length) {*/
  /*      this.isLoading = false*/
  /*      this.error = `Following fields are required: ${fieldMissing.join(', ')}`*/
  /*    } else {*/
  /*      this.isLoading = false*/
  /*      this.data = doc*/
  /*    }*/
  /*  }*/
  /*},*/
  mounted() {
    this.fetchResume()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
