<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <template v-if="isAuthenticated">
        <router-link to="/" tag="div">
          <v-btn text color="white">Temperature graph</v-btn>
        </router-link>
        <v-btn text color="white" @click="logout">Logout</v-btn>
      </template>
    </v-app-bar>
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
    isAuthenticated() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
