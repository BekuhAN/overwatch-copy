import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listMenu: [],
    listHeros: [],
    listRoles: [],
    activePopup: null,
  },
  getters: {
    listMenu(state) {
      return state.listMenu;
    },
    listHeros(state) {
      return state.listHeros;
    },
    listRoles(state) {
      return state.listRoles;
    },
    isActivePopup(state) {
      return state.activePopup;
    },
  },
  mutations: {
    updateListMenu(state, payload) {
      state.listMenu = payload;
    },
    updateListHeros(state, payload) {
      state.listHeros = payload;
    },
    updateListRoles(state, payload) {
      state.listRoles = payload;
    },
    updateActivePopup(state, payload) {
      state.activePopup = payload;
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
    getListRoles({ commit }) {
      axios
        .get("http://localhost:3000/roles?_embed=heros")
        .then(({ data }) => commit("updateListRoles", data));
    },
    togglePopup({ commit }, payload) {
      commit("updateActivePopup", payload);
    },
  },
  modules: {},
});
