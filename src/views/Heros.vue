<template>
  <main class="heros_page">
    <div class="container">
      <div class="section_title">
        <h2 class="section_main_title">ГЕРОЯ ВЫЗЫВАЛИ?</h2>
        <div class="section_description">
          В Overwatch вы найдете множество ярких героев из разных стран, у
          каждого из которых есть своя история. Познакомьтесь с героями
          Overwatch!
        </div>
      </div>
      <div class="heros_list">
        <div class="filter_nav">
          <div
            class="filter_nav__item"
            @click="selectRole(null)"
            :class="{ filtered: activeRole === null }"
          >
            Все
            <span class="count">
              {{ listHeros.length }}
            </span>
          </div>
          <div
            class="filter_nav__item"
            v-for="role of listRoles"
            :key="role.id"
            @click="selectRole(role)"
            :class="{ filtered: activeRole === role }"
          >
            <span
              class="icon"
              :style="'background-image: url(' + getImgUrl(role.icon) + ')'"
            ></span>
            {{ role.name }}
            <span class="count">
              {{ role.heros.length }}
            </span>
          </div>
        </div>
        <div class="heros_list__items">
          <HeroCart
            v-for="hero of sortedHeros"
            :heroItem="hero"
            :key="hero.id"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeroCart from "../components/HeroCart";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      popupVisible: [],
      activeRole: null,
      sortHeros: [],
      isLoading: false,
    };
  },
  name: "Heros",
  computed: {
    ...mapGetters(["listHeros", "listRoles", "isActivePopup"]),
    sortedHeros() {
      if (this.sortHeros.length) {
        return this.sortHeros;
      } else {
        return this.listHeros;
      }
    },
  },
  async beforeMount() {
    await this.getListHeros();
    await this.getListRoles();
    this.isLoading = true;
  },
  components: {
    HeroCart,
  },
  methods: {
    popupShow(arrIndex) {
      this.$store.dispatch("togglePopup", arrIndex);
    },
    ...mapActions(["getListHeros", "getListRoles"]),
    countPage(arr, itemsCount) {
      return Math.ceil(arr.length / itemsCount);
    },
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
    selectRole(role) {
      this.activeRole = role;
      this.sortHeros = [];
      let th = this;
      console.log(role);
      if (role !== null) role.heros.map((item) => th.sortHeros.push(item));
    },
  },
};
</script>

<style lang="scss">
.heros_page {
  padding: 100px 0;
  .section_title {
    width: 50%;
  }
  .heros_list {
    width: 100%;
    .filter_nav {
      display: flex;
      font-family: "Century Gothic";
      margin: 50px 0;
      &__item {
        background: #28354f;
        padding: 10px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        margin-left: 5px;
        opacity: 0.5;
        font-size: 14px;
        transition: 0.4s;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-repeat: no-repeat;
          background-size: auto 100%;
          background-position: top right;
          margin-right: 5px;
        }
        .count {
          margin-left: 5px;
          color: #aaa;
        }
        &.filtered {
          opacity: 1;
        }
      }
    }
    &__items {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
