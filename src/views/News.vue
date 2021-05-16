<template>
  <main class="news_list">
    <div class="container">
      <NewsItem v-for="item in listNews" :key="item.id" :newsItem="item" />
      <router-link to="" v-if="isVisible"
        ><button @click="moreNews" class="btn btn_more">
          Еще
        </button></router-link
      >
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewsItem from "../components/NewsItem";
import axios from "axios";
export default {
  data() {
    return {
      params: {
        _limit: 8,
        _sort: "date",
        _order: "desc",
      },
      countNews: 0,
      isVisible: true,
    };
  },
  computed: {
    ...mapGetters(["listNews"]),
  },
  beforeMount() {
    this.getListNews(this.params);
    axios
      .get("http://localhost:3000/posts")
      .then((resp) => (this.countNews = resp.data.length));
  },
  methods: {
    ...mapActions(["getListNews"]),
    moreNews() {
      this.params._limit += 8;
      if (this.countNews - this.params._limit < 0) {
        this.isVisible = false;
      }
      this.getListNews(this.params);
    },
  },
  components: { NewsItem },
};
</script>

<style lang="scss">
.news_list {
  .btn {
    margin: 50px auto;
    width: 100px;
    border: none;
    &.btn_more {
      background: #00b0ff;
      &:hover {
        background: darken(#00b0ff, 10%);
      }
    }
  }
}
</style>
