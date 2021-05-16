<template>
  <main class="admin_panel">
    <div class="container">
      <div class="admin_panel__title">Управление новостями</div>
      <div class="admin_panel__nav">
        <label for="search" class="admin_panel__nav__search"
          ><font-awesome-icon class="icon" icon="search" />
          <input
            v-model="params.q"
            type="text"
            id="search"
            placeholder="Поиск"
            @input="search"
          />
        </label>
        <router-link to="/addNews" class="btn btn_add">Добавить</router-link>
      </div>
      <div class="admin_panel__list">
        <div
          class="admin_panel__list__item"
          v-for="item in listNews"
          :key="item.id"
        >
          <div class="admin_panel__list__item__id">ID = {{ item.id }}</div>
          <figure class="admin_panel__list__item__image">
            <img v-if="item.image" :src="getImgUrl(item.image)" />
            <img v-else src="../assets/img/no-image-big.png" />
          </figure>
          <div class="admin_panel__list__item__content">
            <div class="title">{{ item.title }}</div>
            <div v-html="item.content" class="description"></div>
            <div class="date">{{ formatedDate(item.date) }}</div>
          </div>
          <div class="admin_panel__list__item__btns">
            <font-awesome-icon
              @click="changeNews(item)"
              class="icon btn_change"
              icon="pencil-alt"
            />
            <font-awesome-icon
              @click="deletePost(item)"
              class="icon btn_delete"
              icon="trash-alt"
            />
          </div>
        </div>
      </div>
      <div class="admin_panel__pagination">
        <div
          class="admin_panel__pagination__item"
          v-for="index in countPages"
          :key="index"
          @click="selectPage(index)"
        >
          <router-link
            :class="{ active: activePage == index }"
            :to="{ path: '/admin', params: { _page: index } }"
          >
            {{ index }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      params: {
        _limit: 8,
        _sort: "date",
        _order: "desc",
        _page: 1,
        q: "",
      },
      countPages: 1,
      activePage: 1,
    };
  },
  computed: {
    ...mapGetters(["listNews"]),
  },
  beforeMount() {
    this.fetchData();
    this.$store.dispatch("toggleAdminPanel", true);
    axios
      .get("http://localhost:3000/posts")
      .then((resp) => (this.countPages = Math.ceil(resp.data.length / 8)));
  },
  methods: {
    ...mapActions(["getListNews"]),
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
    formatedDate(date) {
      return moment(date).format("LL");
    },
    selectPage(page) {
      this.params._page = page;
      this.activePage = page;
      this.fetchData();
    },
    async deletePost(post) {
      try {
        await axios.delete("http://localhost:3000/posts/" + post.id);
        await this.fetchData();
        alert("Удалено!");
      } catch (error) {
        alert(error);
      }
    },
    changeNews(post) {
      this.$router.push({ path: `/changeNews/${post.id}` });
    },
    search() {
      this.fetchData();
      axios
        .get("http://localhost:3000/posts?q=" + this.params.q)
        .then((resp) => (this.countPages = Math.ceil(resp.data.length / 8)));
    },
    async fetchData() {
      this.getListNews(this.params);
    },
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
.admin_panel {
  &__nav {
    display: flex;
    margin: 30px 0;
    &__search {
      position: relative;
      .icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        color: #555;
      }
      #search {
        width: 500px;
        padding-left: 50px;
        font-family: "Century Gothic";
        font-size: 18px;
        border-radius: 2px;
        border: 1px solid #c4c4c4;
        height: 48px;
      }
    }
    .btn {
      height: 50px;
      font-size: 16px;
      text-transform: none;
      width: 100px;
      border: none;
      padding: 0px 20px;
      transition: 0.2s;
      border-radius: 2px;
      margin-left: auto;
      &.btn_add {
        background: #00b0ff;
        &:hover {
          background: darken(#00b0ff, 10%);
        }
      }
    }
  }
  &__list {
    &__item {
      display: flex;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0px 0px 8px 0px #e2e2e2;
      margin-bottom: 20px;
      align-items: center;
      padding: 30px 0;
      position: relative;
      &__id {
        flex: 0 0 160px;
        text-align: center;
        font-family: "Century Gothic";
      }
      &__image {
        flex: 0 0 200px;
        height: 140px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        background: #fcfcfc;
        border: 1px solid #e0e0e0;
        img {
          height: 100%;
        }
      }
      &__content {
        padding: 0 200px 0 30px;
        .title {
          font-size: 18px;
          font-family: "Century Gothic";
          font-weight: bold;
          margin-bottom: 10px;
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
      &__btns {
        display: flex;
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
        .icon {
          font-size: 18px;
          margin-left: 20px;
          cursor: pointer;
          transition: 0.2s;
          &.btn_change {
            color: #14a37f;
            &:hover {
              color: darken(#14a37f, 10%);
              transform: scale(1.5);
            }
          }
          &.btn_delete {
            color: #f44336;
            &:hover {
              color: darken(#f44336, 10%);
              transform: scale(1.5);
            }
          }
        }
      }
    }
  }
  &__pagination {
    display: flex;
    margin-top: 30px;
    height: 50px;
    align-items: center;
    justify-content: center;
    &__item {
      a {
        padding: 8px 15px;
        background: #fff;
        border-radius: 5px;
        margin: 0 5px;
        transition: 0.2s;
        &:hover {
          background: #f06414;
          color: #fff;
        }
        &.active {
          background: #f06414;
          color: #fff;
        }
      }
    }
  }
}
</style>
