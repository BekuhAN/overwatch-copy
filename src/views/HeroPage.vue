<template>
  <main
    class="hero_page"
    :style="{
      background: 'url(' + getImgUrl(hero[0].bgImage) + ')',
    }"
  >
    <div class="container">
      <div class="hero_page__info">
        <div class="hero_page__info__tabs_title">
          <div
            class="hero_page__info__tabs_title__item"
            :class="{ active: selectedTab == 1 }"
          >
            Обзор
          </div>
          <div
            class="hero_page__info__tabs_title__item"
            :class="{ active: selectedTab == 2 }"
          >
            История
          </div>
        </div>
        <div class="hero_page__info__tabs_content">
          <div
            class="hero_page__info__tabs_content__item"
            :class="{ active: selectedTab == 1 }"
          >
            <div class="header">
              <div class="role">
                <div class="title">Роль</div>
                <span class="name">
                  {{ hero[0].role.name }}
                  <div
                    class="icon"
                    :style="{
                      background: 'url(' + getImgUrl(hero[0].roleIcon) + ')',
                    }"
                  ></div>
                </span>
              </div>
              <div class="difficulty">
                <div class="title">Сложность</div>
                <div class="difficulty__count">
                  <div class="difficulty__count__bg">
                    <font-awesome-icon class="icon" icon="star" />
                    <font-awesome-icon class="icon" icon="star" />
                    <font-awesome-icon class="icon" icon="star" />
                  </div>
                  <div class="difficulty__count__front">
                    <font-awesome-icon
                      class="icon"
                      icon="star"
                      v-for="index in hero[0].difficulty"
                      :key="index"
                    />
                  </div>
                </div>
              </div>
              <div class="description">{{ hero[0].description }}</div>
            </div>
            <div class="skills">
              <div class="title">Способности</div>
              <div class="skills__item"></div>
            </div>
          </div>
          <div
            class="hero_page__info__tabs_content__item"
            :class="{ active: selectedTab == 2 }"
          >
            <div class="title">Биография</div>
            <div class="biography_list">
              <div
                class="biography_list__item"
                v-for="(item, index) in hero[0].biography"
                :key="index"
              >
                <img
                  :src="getImgUrl('biography-' + (index + 1) + '.png')"
                  class="icon"
                />
                <div class="text">{{ item }}</div>
              </div>
            </div>
            <div class="quote">
              {{ hero[0].quote }}
            </div>
            <div class="history">
              <p v-for="(item, index) in hero[0].history" :key="index">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hero: [],
      selectedTab: 1,
    };
  },
  computed: {},
  beforeMount() {
    axios
      .get(
        "http://localhost:3000/heros?id=" +
          this.$route.query.id +
          "&_expand=role"
      )
      .then((resp) => (this.hero = resp.data));
  },
  methods: {
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
  },
};
</script>

<style lang="scss">
.hero_page {
  background-size: auto 100% !important;
  background-position-x: center !important;
  padding: 100px 0;
  &__info {
    width: 60%;
    &__tabs_title {
      display: flex;
      margin: 0px -5px;
      &__item {
        width: 100%;
        background: rgba(#fff, 0.7);
        margin: 0px 5px;
        height: 50px;
        border-radius: 10px 10px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
        text-transform: uppercase;
        &.active {
          background: rgba(#28354f, 0.9);
          color: #fff;
        }
      }
    }
    &__tabs_content {
      &__item {
        background: rgba(#28354f, 0.9);
        color: #fff;
        .header {
          padding: 30px;
          .role,
          .difficulty {
            width: 50%;
            display: inline-block;
            vertical-align: top;
          }
          .difficulty {
            &__count {
              font-size: 35px;
              padding-top: 10px;
              position: relative;
              &__bg {
                .icon path {
                  fill: rgba(#ffe75b, 0.2);
                }
              }
              &__front {
                position: absolute;
                top: 10px;
                left: 0;
                .icon path {
                  fill: #ffe75b;
                }
              }
            }
          }
          .description {
            padding-left: 20px;
            border-left: 5px solid #00c3ff;
            line-height: 1.5;
          }
          .role {
            .name {
              font-size: 60px;
              font-family: "Big Noodle Titling";
              font-style: italic;
              position: relative;
              .icon {
                position: absolute;
                right: -40px;
                top: 10px;
                width: 20px;
                height: 20px;
                background-size: auto 100% !important;
                background-position-x: right !important;
              }
            }
          }
        }
        .title {
          color: #00c3ff;
          font-size: 24px;
          text-transform: uppercase;
          font-weight: bold;
          font-family: "Century Gothic";
        }
      }
    }
  }
}
</style>
