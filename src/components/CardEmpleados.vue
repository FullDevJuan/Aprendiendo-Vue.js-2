<template>
  <div class="card-empleados">
    <h2>{{ name }}</h2>
    <p>{{ position }}</p>
    <p>{{ department }}</p>
  </div>
</template>
<script>
export default {
  name: "CardEmpleados",
  props: {
    name: String,
    position: String,
    department: String,
  },
};
</script>
<style scoped></style>
