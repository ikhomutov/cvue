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
  padding-bottom: 16px;
}
.section-title {
  color: var(--primary-color);
  text-align: center;
  font-size: 24px;
  padding: 6px 37px;
  margin-top: 0px;
  margin-bottom: 16px;
  text-transform: uppercase;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
}
.section-content {
  padding-left: 32px;
  padding-right: 32px;
}
@media print {
  .section-title {
    page-break-after: avoid;
  }
}
</style>
