<template>
  <main class="news_page">
    <div class="container">
      <div class="news" v-if="post">
        <div class="news__title">{{ post.title }}</div>
        <div class="news__date">{{ date }}</div>
        <figure v-if="post.image" class="news__image">
          <img :src="getImgUrl(post.image)" />
        </figure>
        <div v-html="post.content" class="news__content"></div>
      </div>
      <div class="latest_news">
        <div class="latest_news__title">Последние новости</div>
        <NewsItem v-for="item in listNews" :key="item.id" :newsItem="item" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewsItem from "../components/NewsItem";
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      post: [],
      params: {
        _limit: 6,
        _sort: "date",
        _order: "desc",
      },
      date: "",
    };
  },
  computed: {
    ...mapGetters(["listNews"]),
  },
  beforeMount() {
    this.fetchData();
    this.getListNews(this.params);
  },
  methods: {
    ...mapActions(["getListNews"]),
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
    fetchData() {
      axios
        .get("http://localhost:3000/posts/" + this.$route.params.id)
        .then((resp) => (this.post = resp.data));

      this.date = moment(this.post.date).format("LL");
    },
  },
  watch: {
    $route: "fetchData",
  },
  components: { NewsItem },
};
</script>

<style lang="scss">
.news_page {
  background: url("../assets/img/bg-news.jpg") no-repeat;
  background-position: center top;
  background-color: #141516;
  color: #fff;
  padding: 50px 0;
  .container {
    display: flex;
  }
  .news {
    flex: 0 0 70%;
    width: 70%;
    padding-right: 30px;
    box-sizing: border-box !important;
    &__title {
      font-weight: bold;
      font-size: 24px;
      font-family: "Century Gothic";
      margin-bottom: 15px;
    }
    &__date {
      margin-bottom: 15px;
      color: #f06414;
    }
    &__image {
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      height: 400px;
      margin-bottom: 15px;
      img {
        height: 100%;
      }
    }
    &__content {
      color: rgba(#fff, 0.8);
      line-height: 1.5;
      & > * {
        margin-bottom: 10px;
      }
      a {
        color: #f06414;
      }
      ul {
        padding-left: 30px;
      }
      h1,
      h2,
      h3 {
        font-family: "Big Noodle Titling";
      }
      h1 {
        font-size: 50px;
      }
      h2 {
        font-size: 40px;
      }
      h3 {
        font-size: 30px;
      }
    }
  }
  .latest_news {
    background: rgba(#fff, 0.05);
    border-radius: 2px;
    padding: 30px;
    flex: 0 0 30%;
    width: 30%;
    box-sizing: border-box !important;
    height: 100%;
    &__title {
      font-size: 22px;
      font-family: "Century Gothic";
      font-weight: bold;
      padding-bottom: 10px;
      border-bottom: 3px solid #fff;
    }
    .news_item {
      padding: 20px 0;
      margin: 0;
      width: 100%;
      &:last-child {
        border-bottom: none;
      }
      &__image {
        flex: 0 0 120px;
        height: 80px;
      }
      &__content {
        padding-left: 15px;
        &:hover {
          .title {
            color: darken(#f06414, 10%);
          }
        }
        .title {
          font-size: 12px;
          font-weight: normal;
          color: #f06414;
          max-height: 60px;
          overflow: hidden;
        }
        .description {
          display: none;
        }
        .date {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
