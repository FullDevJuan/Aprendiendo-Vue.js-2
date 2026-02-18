<template>
  <div class="post-card" @click="$emit('click')">
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "PostsCards",
  props: {
    title: String,
    body: String,
  },
};
</script>

<style scoped>
.post-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  max-width: 300px;
  cursor: pointer;
}
</style>
