<template>
  <main class="admin_panel">
    <input v-model="news.title" type="text" name="title" />
    <input type="file" name="image" @change="changeFile" />
    <ckeditor
      :editor="editor"
      v-model="news.content"
      :config="editorConfig"
    ></ckeditor>
    <button @click="addNews">Оправить</button>
  </main>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      news: {
        title: "",
        content: "",
        image: "",
      },
      editor: ClassicEditor,
      editorConfig: {},
    };
  },
  beforeMount() {
    this.$store.dispatch("toggleAdminPanel", true);
  },
  methods: {
    changeFile(e) {
      this.news.image = e.target.files[0].name;
    },
    addNews() {
      this.$store.dispatch("addNews", this.news);
    },
  },
};
</script>

<style></style>
