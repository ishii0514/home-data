<template>
  <v-card>
    <v-card-title>
      <h1 class="display-1">Home</h1>
    </v-card-title>
    <v-card-text>
      <div v-for="post in posts" :key="post.name">
        <div>Name: {{ post.fields.name.stringValue }}</div>
        <div>Comment: {{ post.fields.comment.stringValue }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "../axios-data";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
      is_auth: true,
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  created() {
    axios.get("/test_data", this.auth_header()).then((responce) => {
      this.posts = responce.data.documents;
    });
  },
  methods: {
    auth_header() {
      return this.is_auth
        ? {
            headers: {
              Authorization: `Bearer ${this.idToken}`,
            },
          }
        : {};
    },
  },
};
</script>
