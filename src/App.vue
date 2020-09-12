<template>
  <v-app>
    <v-app-var app color="gray accent-4" dark>
      <template v-if="isAuthentivated">
        <v-btn text color="primary" @click="logout">Logout</v-btn>
      </template>
    </v-app-var>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
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
