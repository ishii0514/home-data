<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <template v-if="isAuthentivated">
        <router-link to="/" tag="div">
          <v-btn text color="white">Graph</v-btn>
        </router-link>
        <router-link to="/realtime-graph" tag="div">
          <v-btn text color="white">RealtimeGraph</v-btn>
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
