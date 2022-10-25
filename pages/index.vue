<template>
  <div>
    <h1>Mammamia test</h1>
    <br />
    <h2>submit posts</h2>
    name
    <div>
      <input type="text" v-model="name" />
    </div>
    comment
    <div>
      <textarea v-model="comment"></textarea>
    </div>
    <br />
    <button @click="submitPosts">submit</button>
    <br /><br />
    <h2>getting back posts</h2>
    <div v-for="post in posts" :key="post.name">
      <hr />
      <br />
      <p>name: {{ post.fields.name.stringValue }}</p>
      <br />
      <p>comment: {{ post.fields.comment.stringValue }}</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: "",
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    submitPosts() {
      this.$axios
        .$post(
          "https://firestore.googleapis.com/v1/projects/testing-code-c4b64/databases/(default)/documents/posts",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              comment: {
                stringValue: this.comment,
              },
            },
          }
        )
        .then(() => {
          this.name = "";
          this.comment = "";
          this.getPosts();
        });
    },
    getPosts() {
      this.$axios
        .$get(
          "https://firestore.googleapis.com/v1/projects/testing-code-c4b64/databases/(default)/documents/posts"
        )
        .then((res) => {
          this.posts = res.documents;
        });
    },
  },
};
</script>
