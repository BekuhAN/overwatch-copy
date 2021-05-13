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
            @click="selectedTab = 1"
          >
            Обзор
          </div>
          <div
            class="hero_page__info__tabs_title__item"
            :class="{ active: selectedTab == 2 }"
            @click="selectedTab = 2"
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
              <div class="hero_name">{{ hero[0].name }}</div>
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
              <div
                class="skills__item"
                v-for="(item, index) in hero[0].skills"
                :key="index"
              >
                <figure>
                  <div class="image"><img :src="getImgUrl(item.image)" /></div>
                </figure>
                <div class="content">
                  <div class="name">{{ item.name }}</div>
                  <div class="description">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hero_page__info__tabs_content__item biography"
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
    <div class="list_heros">
      <div class="section_title">
        <div class="section_main_title">ВЫБЕРИТЕ ГЕРОЯ</div>
      </div>
      <div class="list_heros__item" v-for="item of listRoles" :key="item.id">
        <div class="title">
          <span class="line"></span><span class="text"> {{ item.name }} </span
          ><span class="line"></span>
        </div>
        <div class="list">
          <router-link
            :to="`/hero/${subItem.id}`"
            class="item"
            v-for="subItem of item.heros"
            :key="subItem.id"
          >
            <figure class="image">
              <img :src="getImgUrl(subItem.image)" />
            </figure>
            <div class="name">{{ subItem.name }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      hero: [],
      selectedTab: 1,
      // key: 1,
    };
  },
  computed: {
    ...mapGetters(["listRoles"]),
  },
  beforeMount() {
    this.getListRoles();
    this.fetchData();
  },
  methods: {
    ...mapActions(["getListRoles"]),
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
    fetchData() {
      axios
        .get(
          "http://localhost:3000/heros?id=" +
            this.$route.params.id +
            "&_expand=role"
        )
        .then((resp) => (this.hero = resp.data));
    },
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
.hero_page {
  background-size: 100% auto !important;
  background-position-x: center !important;
  background-attachment: fixed !important;
  padding: 100px 0 0;
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
        cursor: pointer;
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
        display: none;
        &.active {
          display: block;
        }
        .header {
          padding: 30px 30px 20px;
          border-bottom: 3px solid rgba(#fff, 0.15);
          .hero_name {
            font-size: 62px;
            text-align: center;
            color: #fff;
            font-family: "Big Noodle Titling";
            font-style: italic;
            margin-bottom: 20px;
          }
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
        .skills {
          padding: 20px 30px 30px;
          .title {
            margin-bottom: 20px;
          }
          &__item {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            background: rgba(#28354f, 0.6);
            figure {
              flex: 0 0 70px;
              padding: 8px 24px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              .image {
                border-radius: 50%;
                background: rgba(#405275, 0.4);
                border: 2px solid rgba(#fff, 0.15);
                display: inline-block;
                position: relative;
                width: 74px;
                height: 74px;
                img {
                  position: absolute;
                  max-width: 68%;
                  width: auto;
                  height: auto;
                  top: 50%;
                  left: 50%;
                  transform: translateX(-50%) translateY(-50%);
                }
              }
            }
            .content {
              padding: 10px 20px 10px 0px;
              .name {
                font-weight: bold;
                font-size: 18px;
                text-transform: uppercase;
                font-family: "Century Gothic";
                margin-bottom: 10px;
              }
            }
          }
        }
        &.biography {
          padding: 30px;
          .title {
            margin-bottom: 20px;
          }
          .biography_list {
            margin-bottom: 20px;
            &__item {
              display: flex;
              align-items: center;
              margin: 10px 0;
              .icon {
                margin-right: 10px;
                height: 25px;
                width: 25px;
                img {
                  height: 100%;
                }
              }
            }
          }
          .quote {
            font-size: 36px;
            color: #00c3ff;
            font-family: "Big Noodle Titling";
            font-style: italic;
            margin-bottom: 20px;
          }
          .history {
            background: rgba(#28354f, 0.8);
            padding: 20px;
            p {
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
  .list_heros {
    background: url("../assets/img/bg-list-heros.jpg") no-repeat;
    background-size: 100% auto;
    background-position-x: center;
    margin-top: 100px;
    padding: 30px 200px 100px;
    position: relative;
    .section_title {
      text-align: center;
      color: #fff;
      margin-bottom: 50px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background: url("../assets/img/bg-after-list-heros.png") no-repeat;
      background-size: 100% auto;
      background-position-y: bottom;
      transform: rotate(180deg);
    }
    &__item {
      .title {
        width: 20%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .line {
          display: block;
          width: 100%;
          height: 3px;
          background: #ccc;
        }
        .text {
          font-size: 22px;
          text-transform: uppercase;
          font-weight: bold;
          color: #ccc;
          font-family: "Century Gothic";
          text-align: center;
          margin: 0px 10px;
        }
      }
      .list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .item {
          width: 70px;
          position: relative;
          margin: 30px 5px 60px;
          &:hover {
            .image {
              background: #f06414;
              transform: scale(1.1) skew(-15deg);
              border-left: 3px solid #fff;
              border-right: 3px solid #fff;
            }
            .name {
              background: #fff;
              bottom: -20px;
              border-radius: 5px;
              color: #323232;
              padding: 0 5px;
            }
          }
          .image {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 80px;
            overflow: hidden;
            border-radius: 5px;
            background: rgba(#333, 0.8);
            border-top: 3px solid #fff;
            border-bottom: 3px solid #fff;
            transform: skew(-15deg);
            img {
              width: 100%;
              transform: skew(15deg);
            }
          }
          .name {
            font-size: 12px;
            color: #fff;
            position: absolute;
            left: 35%;
            bottom: -35px;
            display: flex;
            align-items: flex-start;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
</style>
