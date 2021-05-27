<template>
  <div>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ["subtitle"],
};
</script>

<style scoped>
p {
  font-size: 12px;
}
</style>