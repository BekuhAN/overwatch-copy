<template>
  <nav class="main-menu">
    <router-link class="logo" to="/"
      ><img width="40px" src="../assets/img/logo.svg" alt="logo"
    /></router-link>
    <ul class="nav">
      <li class="nav__item" v-for="item of nav" :key="item.id">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
    <div class="btn buy" @click="popupShow(3)">Приобрести</div>
    <Popup v-if="isActivePopup === 3">
      <div class="buy_content">
        <div class="buy_content__title">Выберите платформу</div>
        <div class="buy_content__sub_title">
          Подробности о получении Overwatch для определенной платформы — ниже.*
        </div>
        <div class="buy_content__items">
          <a
            href="https://shop.battle.net/ru-ru/product/overwatch?blzcmp=ow_buy_nav"
            class="item"
          >
            <figure class="image">
              <img src="../assets/img/buy-link-1.png" />
            </figure>
            <div class="link">
              <font-awesome-icon class="icon" icon="share-square" />
            </div>
          </a>
          <a
            href="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Overwatch-Legendary-Edition-1633055.html?s=countries"
            class="item"
          >
            <figure class="image">
              <img src="../assets/img/buy-link-2.png" />
            </figure>
            <div class="link">
              <font-awesome-icon class="icon" icon="share-square" />
            </div>
          </a>
          <a
            href="https://store.playstation.com/ru-ru/product/EP0002-CUSA03975_00-OWLEGENDARY00000"
            class="item"
          >
            <figure class="image">
              <img src="../assets/img/buy-link-3.png" />
            </figure>
            <div class="link">
              <font-awesome-icon class="icon" icon="share-square" />
            </div>
          </a>
          <a
            href="https://www.microsoft.com/store/p/overwatch-legendary-edition/9p2q994zwb64"
            class="item"
          >
            <figure class="image">
              <img src="../assets/img/buy-link-4.png" />
            </figure>
            <div class="link">
              <font-awesome-icon class="icon" icon="share-square" />
            </div>
          </a>
        </div>
        <div class="buy_content__meta">
          * Положения и условия для разных платформ могут отличаться.
        </div>
      </div>
    </Popup>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import Popup from "./Popup.vue";

export default {
  props: ["nav"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isActivePopup"]),
  },
  methods: {
    popupShow(arrIndex) {
      this.$store.dispatch("togglePopup", arrIndex);
    },
  },
  components: {
    Popup,
  },
};
</script>

<style lang="scss">
.main-menu {
  display: flex;
  align-items: center;
  background: #f2f1ed;
  font-family: "Century Gothic";
  .logo {
    background: #353c42;
    padding: 5px;
    width: 40px;
    height: 40px;
  }
  .nav {
    display: flex;
    list-style: none;
    &__item {
      &:hover {
        a {
          color: #f06414;
          &:after {
            left: 0;
          }
        }
      }
      a {
        display: flex;
        color: #353c42;
        align-items: center;
        height: 50px;
        border-right: 1px solid #e5e3dc;
        padding: 0px 30px;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        position: relative;
        transition: 0.2s;
        overflow: hidden;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 3px;
          background: #f06414;
          bottom: 0;
          left: -100%;
          transition: 0.2s;
        }
      }
    }
  }
}
</style>
