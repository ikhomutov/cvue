<template>
  <section class="section">
    <h3 v-if="title" class="section-title">{{ title }}</h3>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionItem',
  props: {
    title: {
      type: String,
    }
  }
}
</script>
<style>
.section {
  padding-bottom: 10px;
}
  
.section-title {
  text-align: center;
  font-size: 24px;
  padding: 6px 37px;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
}

.section-content: {
  padding-left: 24px;
  padding-right: 24px;
}
</style>
