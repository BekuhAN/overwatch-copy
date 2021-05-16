<template>
  <router-link :to="`/post/${newsItem.id}`" class="news_item" v-if="newsItem">
    <figure class="news_item__image">
      <img v-if="newsItem.image" :src="getImgUrl(newsItem.image)" />
      <img v-else src="../assets/img/no-image-big.png" />
    </figure>
    <div class="news_item__content">
      <div class="title">{{ newsItem.title }}</div>
      <div v-html="newsItem.content" class="description"></div>
      <div class="date">
        {{ date }}
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from "moment";
export default {
  props: ["newsItem"],
  data() {
    return {
      date: "",
    };
  },
  beforeMount() {
    this.date = moment(this.newsItem.date).format("LL");
  },
  methods: {
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
  },
};
</script>

<style lang="scss">
.news_item {
  display: flex;
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  &__image {
    flex: 0 0 250px;
    height: 160px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    background: #fcfcfc;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    img {
      height: 100%;
      transition: 0.2s;
    }
  }
  &__content {
    padding-left: 30px;
    &:hover {
      .title {
        color: #f06414;
      }
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      font-family: "Century Gothic";
      margin-bottom: 10px;
      transition: 0.2s;
    }
    .description {
      max-height: 60px;
      overflow: hidden;
      margin-bottom: 10px;
      * {
        font-weight: normal;
        padding: 0;
        margin: 0;
      }
    }
    .date {
      color: #a4a4a4;
    }
  }
}
</style>
