<script>
import HelloWorld from "./components/HelloWorld.vue";
import PostsCards from "./components/PostsCards.vue";
// import UserCard from "./components/UserCard.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    PostsCards,
    // UserCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    this.posts = posts;
  },
};
</script>

<template>
  <div id="app">
    <HelloWorld
      msg="Welcome to my first interaction with Vue.js 2"
    ></HelloWorld>
    <!-- <UserCard></UserCard> -->
    <div class="container-posts">
      <PostsCards
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :body="post.body"
      ></PostsCards>
    </div>
  </div>
</template>

<style>
.container-posts {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
body {
  font-family: monospace;
}
</style>
