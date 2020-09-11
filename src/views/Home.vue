<template>
  <div>
    <h3>home</h3>
    <div v-for="post in posts" :key="post.name">
      <div>{{ post.fields.name.stringValue }}</div>
      <div>{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
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
