<template>
  <div class="container-users">
    <div v-for="user in users" :key="user.id" class="user-card">
      <h2>User info</h2>
      <p>Name: {{ user.name }}</p>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>
        Address: {{ user.address.street }}, {{ user.address.suite }},
        {{ user.address.city }}
      </p>
      <p v-if="user.website.split('.')[1] === 'org'">Web: {{ user.website }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    this.users = users;
  },
};
</script>

<style scoped>
.container-users {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  max-width: 300px;
}
</style>
