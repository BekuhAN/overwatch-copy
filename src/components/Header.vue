<template>
  <header>
    <div class="container">
      <Menu :nav="listMenu" />
      <h1 v-if="title" class="page_title">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Menu from "./Menu";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["listMenu"]),
  },
  beforeMount() {
    this.getListMenu();
  },
  methods: {
    ...mapActions(["getListMenu"]),
  },
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
header {
  background: url("../assets/img/bg.jpg");
  margin: 0;
  padding: 50px 0;
  .page_title {
    font-family: "Big Noodle Titling";
    font-style: italic;
    text-align: center;
    font-size: 56px;
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 30px;
  }
}
</style>
