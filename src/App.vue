<template>
  <div id="app">
    <Header v-if="!isAdminPanel" @scroll="alert(123)" />
    <router-view />
    <Footer v-if="!isAdminPanel" />
    <back-to-top class="scroll_top" visibleoffset="500"><font-awesome-icon class="icon" icon="arrow-alt-circle-up" /></back-to-top>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from 'vue-backtotop';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isScrollToTop: false,
    };
  },
  computed: {
    ...mapGetters(["isAdminPanel"]),
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  components: {
    Header,
    Footer,
    BackToTop,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Big Noodle Titling";
  src: local("Big Noodle Titling"),
    url("~@/assets/fonts/Big Noodle Titling.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Century Gothic";
  src: local("Century Gothic"),
    url("~@/assets/fonts/Century Gothic.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: content-box !important;
  color: inherit;
}
body {
  line-height: 1.3;
}
#app {
  color: #28354f;
  font-family: Roboto, sans-serif;
  position: relative;
}

.container {
  width: 1140px;
  margin: 0 auto;
}

section {
  padding: 100px 0;
  .container {
    display: flex;
  }
}

.col-6 {
  width: 50%;
  padding: 0px 30px;
}

.col-4 {
  flex: 0 0 33.3333%;
  width: 33.333%;
}

.section_title {
  width: 100%;
  .section_main_title {
    font-style: italic;
    font-size: 64px;
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 15px;
    margin-bottom: 16px;
    font-family: "Big Noodle Titling";
    line-height: 1;
  }
  .section_sub_title {
    font-size: 24px;
    font-family: "Century Gothic";
  }
  .section_description {
    font-size: 21px;
  }
}

.buy {
  margin-left: auto;
}
.btn {
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 18px;
  background: #f06414;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
  min-width: 120px;
  width: 180px;
  height: 50px;
  &:hover {
    background: darken(#f06414, 5%);
  }
}

.buy_content {
  text-align: center;
  &__title {
    color: #fff;
    font-weight: bold;
    font-family: "Century Gothic";
    font-size: 24px;
    text-transform: uppercase;
  }
  &__sub_title {
    color: #fff;
    font-size: 18px;
    margin: 20px 0;
  }
  &__meta {
    color: rgba(#fff, 0.8);
    font-style: italic;
    margin-top: 20px;
  }
  &__items {
    display: flex;
    .item {
      min-width: 250px;
      height: 250px;
      margin: 15px;
      background: #fff;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
      &:first-child {
        .image img {
          height: 50px;
          width: auto;
        }
      }
      .image {
        height: 210px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 180px;
        }
      }
      .link {
        width: 100%;
        height: 40px;
        background: #f06414;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon path {
          fill: #fff;
        }
      }
    }
  }
}

.scroll_top {
  position: fixed;
  left: 30px;
  bottom: 30px;
  font-size: 40px;
  color: #f06414;
  transition: 0.2s;
  &:hover {
    color: #28354f;
  }
}
</style>
