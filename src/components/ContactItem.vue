<template>
  <a v-if="item" class="contact" :href="item.link">
    <svg-icon v-bind:path="item.icon" />
    <span class="contact-text">{{ value }}</span>
  </a>
</template>
<script>
import SvgIcon from './ui/SvgIcon.vue'
import { mdiWeb, mdiTelegram, mdiGithub, mdiEmail, mdiPhone, mdiLinkedin, mdiTwitter, mdiSkype, mdiMapMarker } from '@mdi/js'

export default {
  name: 'ContactItem',
  components: {
    SvgIcon,
  },
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    item() {
      let item;
      switch(this.type) {
        case 'website':
          item = {
            link: `https://${this.value}`,
            icon: mdiWeb,
          }
          break
        case 'telegram':
          item = {
            link: `https://t.me/${this.value}`,
            icon: mdiTelegram,
          }
          break
        case 'email':
          item = {
            link: `mailto:${this.value}`,
            icon: mdiEmail,
          }
          break
        case 'github':
          item = {
            link: `https://github.com/${this.value}`,
            icon: mdiGithub,
          }
          break
        case 'phone':
          item = {
            link: `tel:${this.value}`,
            icon: mdiPhone,
          }
          break
        case 'linkedin':
          item = {
            link: `https://linkedin.com/in/${this.value}`,
            icon: mdiLinkedin,
          }
          break
        case 'twitter':
          item = {
            link: `https://twitter.com/${this.value}`,
            icon: mdiTwitter,
          }
          break
        case 'skype':
          item = {
            link: `skype:${this.value}?chat`,
            icon: mdiSkype,
          }
          break
        case 'address':
          item = {
            link: `https://maps.google.com/?q=${this.value}`,
            icon: mdiMapMarker,
          }
          break
        default: 
          item = null
      }
      return item
    }
  }
}
</script>
<style>
.contact {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 8px;
  color: inherit;
  gap: 4px;
  font-size: 1rem;
}
.contact-spacer {
  margin-left: 4px;
  margin-right: 4px;
}
</style>
