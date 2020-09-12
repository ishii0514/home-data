<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="Email"
            v-model="email"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="Passowrd"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
          <v-card-actions>
            <v-btn class="info" @click="login">Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
    },
  },
};
</script>
