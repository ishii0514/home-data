<template>
  <div>
    <header>
      <template v-if="isAuthentivated">
        <router-link to="/" class="header-item">Home</router-link>
        <span class="header-item" @click="logout">Logout</span>
      </template>
      <template v-if="!isAuthentivated">
        <router-link to="/login" class="header-item">Login</router-link>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthentivated() {
      return this.$store.getters.idToken !== null;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped>
.header-item {
  padding: 10px;
}
</style>
