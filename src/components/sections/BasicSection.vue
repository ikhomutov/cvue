<template>
  <section-item>
    <div class="basic">
      <div class="basic-info">
        <h1 class="name">{{ data.name }}</h1>
        <h2 class="title">{{ data.title }}</h2>
        <p class="summary" v-if="data.summary">{{ data.summary }}</p>
      </div>
      <div class="basic-photo" v-if="data.photo">
        <img width="168" height="168" alt="profile photo" v-bind:src="data.photo"/>
      </div>
      <div class="basic-contacts" v-if="data.contacts">
        <contact-item
          v-for="(value, key) in data.contacts"
          v-bind:key="key"
          v-bind:type="key"
          v-bind:value="value"
        />
      </div>
    </div>
  </section-item>
</template>

<script>
import SectionItem from '../SectionItem.vue'
import ContactItem from '../ContactItem.vue'

export default {
  name: 'BasicSection',
  components: {
    SectionItem,
    ContactItem,
  },
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    test() {
      return {
        one: 'one',
        two: 'two',
      }
    }
  }
}
</script>

<style>
.basic {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.basic-info {
  width: 33%;
}
.basic-info .name {
  font-size: 34px;
  color: var(--primary-color);
  margin-top: 16px;
  margin-bottom: 8px;
}
.basic-info .title {
  font-size: 18px;
  color: var(--secondary-color);
}
.basic-photo {
  width: 168px;
  height: 168px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
}
.basic-photo > img {
  text-align: center;
}
.basic-contacts {
  width: 33%;
}


</style>
