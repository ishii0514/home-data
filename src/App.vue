<template>
  <div>
    <header>
      <template v-if="isAuthentivated">
        <span class="header-item" @click="logout">Logout</span>
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
