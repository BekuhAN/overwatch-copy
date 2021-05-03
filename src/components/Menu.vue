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
    <div class="btn buy">Приобрести</div>
  </nav>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {};
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
  .buy {
    font-weight: bold;
    margin-left: auto;
  }
  .btn {
    display: flex;
    align-items: center;
    padding: 0px 30px;
    text-transform: uppercase;
    font-size: 18px;
    background: #f06414;
    height: 50px;
    color: #fff;
    transition: .2s;
    cursor: pointer;
    &:hover {
      background: darken(#f06414, 5%);
    }
  }
}
</style>