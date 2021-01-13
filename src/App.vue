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
  mounted() {
    this.fetchResume()
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  list-style: none;
}
--primary-color: #009688;
</style>
