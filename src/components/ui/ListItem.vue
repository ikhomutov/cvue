<template>
  <div class="list-item">
    <span class="list-bullet"></span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.list-item .list-bullet {
  box-sizing: border-box;
  display: inline-block;
  width: 8px;
  height: 1px;
  border: 1px solid;
  border-color: var(--primary-color);
  margin-right: 8px;
}
</style>
