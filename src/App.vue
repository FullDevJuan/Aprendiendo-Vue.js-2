<script>
import HelloWorld from "./components/HelloWorld.vue";
import UserCard from "./components/UserCard.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    UserCard,
  },
};
</script>

<template>
  <div id="app">
    <HelloWorld
      msg="Welcome to my first interaction with Vue.js 2"
    ></HelloWorld>
    <UserCard></UserCard>
  </div>
</template>

<style>
body {
  font-family: monospace;
}
</style>
