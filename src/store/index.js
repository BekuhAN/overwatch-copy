import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listMenu: [],
    listHeros: [],
  },
  getters: {
    listMenu(state) {
      return state.listMenu;
    },
    listHeros(state) {
      return state.listHeros;
    },
  },
  mutations: {
    updateListMenu(state, payload) {
      state.listMenu = payload;
    },
    updateListHeros(state, payload) {
      state.listHeros = payload;
    },
  },
  actions: {
    getListMenu({ commit }) {
      axios
        .get("http://localhost:3000/menu")
        .then(({ data }) => commit("updateListMenu", data));
    },
    getListHeros({ commit }) {
      axios
        .get("http://localhost:3000/heros")
        .then(({ data }) => commit("updateListHeros", data));
    },
  },
  modules: {},
});
