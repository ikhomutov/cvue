<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
  >
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    path: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>
svg {
  color: var(--primary-color);
  fill: currentColor;
  width: 1rem;
  height: 1rem;
  font-size: inherit;
  display: inline-block;
}
</style>
