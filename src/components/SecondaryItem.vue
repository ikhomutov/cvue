<template>
  <div class="secondary-item">
    <h4 class="title">
      {{ title }}
      <a class="link" v-if="link" v-bind:href="link">
        <svg-icon v-bind:path="linkPath" />
      </a>
    </h4>
    <div class="dates" v-if="dates">
      {{ dates }}
    </div>
    <div class="company" v-if="company">
      {{ company }}
    </div>
    <div class="description" v-if="description">
      {{ description }}
    </div>
    <div class="list" v-if="listItems">
      <list-item
        v-for="(item, index) in listItems"
        v-bind:key="index"
        v-bind:text="item"
      />
    </div>
  </div>
</template>

<script>
import ListItem from './ui/ListItem.vue'
import SvgIcon from './ui/SvgIcon.vue'
import { iconExternalLink } from '@/icons'

export default {
  name: 'SecondaryItem',
  components: {
    ListItem,
    SvgIcon,
  },
  data() {
    return {
      linkPath: iconExternalLink
    }
  },
  props: {
    title: {
      type: String,
    },
    place: {
      type: String,
    },
    link: {
      type: String,
    },
    dates: {
      type: String,
    },
    company: {
      type: String,
    },
    description: {
      type: String,
    },
    listItems: {
      type: Array
    },
  },
}
</script>
<style>
.secondary-item {
  margin-bottom: 24px;
}
.secondary-item .title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 4px;
}
.secondary-item .title .link {
  font-size: 1rem;
}
.secondary-item .dates {
  color: var(--primary-color);
  margin-bottom: 4px;
}
.secondary-item .description {
  color: var(--secondary-color);
  margin-bottom: 4px;
}

@media print {
  .secondary-item {
    page-break-inside: avoid;
  }
  .secondary-item .link {
    display: none;
  }
}
</style>
