<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <template v-if="isAuthentivated">
        <router-link to="/" tag="div">
          <v-btn text color="white">RealtimeGraph</v-btn>
        </router-link>
      </template>
      <v-btn text color="white" @click="logout">Logout</v-btn>
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
      return this.$store.getters.idAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
