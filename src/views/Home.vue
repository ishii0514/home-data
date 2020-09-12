<template>
  <v-app>
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
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  created() {
    axios
      .get("/test_data", {
        headers: {
          Authorization: `Bearer ${this.idToken}`,
        },
      })
      .then((responce) => {
        this.posts = responce.data.documents;
      });
  },
};
</script>
