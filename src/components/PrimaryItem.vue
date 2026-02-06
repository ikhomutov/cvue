<template>
  <div class="primary-item">
    <h4 class="title">
      {{ title }}
    </h4>
    <div class="dates" v-if="dates">
      {{ dates }}
    </div>
    <div class="company-info">
      {{ company }}<span v-if="place">, {{ place }}</span>
    </div>
    <div class="description" v-if="description" v-html="descriptionHTML"></div>
    <div class="list" v-if="listItems">
      <div class="list-title">
        {{ listTitle }}
      </div>
      <list-item
        v-for="(item, index) in listItems"
        v-bind:key="index"
        v-bind:text="item"
      />
    </div>
    <div class="keywords" v-if="keywords">
      <div
        v-for="(keyword, index) in keywords"
        v-bind:key="index"
        class="keyword"
      >
        <span>{{ keyword }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import ListItem from './ui/ListItem.vue'

export default {
  name: 'PrimaryItem',
  components: {
    ListItem,
  },
  props: {
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    place: {
      type: String,
    },
    dates: {
      type: String,
    },
    description: {
      type: String,
    },
    listTitle: {
      type: String,
    },
    listItems: {
      type: Array,
    },
    keywords: {
      type: Array,
    },
  },
  computed: {
    descriptionHTML() {
      return marked.parse(this.description)
    }
  }
}
</script>
<style>
.primary-item {
  margin-bottom: 24px;
}
.primary-item .title {
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 8px 0;
}
.primary-item .dates {
  color: var(--primary-color);
  margin-bottom: 4px;
}
.primary-item .company-info {
  margin-bottom: 4px;
}
.primary-item .description {
  color: var(--secondary-color);
  margin-bottom: 8px;
}
.primary-item .description > * {
  margin-top: 4px;
  margin-bottom: 4px;
}
.primary-item .description h5 {
  font-size: 16px;
  margin-top: 6px;
}
.primary-item .description ul {
  list-style: circle;
  padding-left: 25px;
}
.primary-item .list-title {
  font-style: italic;
  margin-bottom: 4px;
}
.primary-item .keywords {
  display: inline-flex;
  gap: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.primary-item .keywords .keyword {
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

@media print {
  .primary-item {
    page-break-inside: avoid;
  }
}
</style>
