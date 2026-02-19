<template>
  <div id="crud">
    <h1 style="text-align: center">CRUD - Computadores (localStorage)</h1>
    <Computadores></Computadores>
  </div>
</template>
<script>
import Computadores from "./components/Computadores.vue";
export default {
  name: "CRUD",
  components: {
    Computadores,
  },
};
</script>
<style></style>
