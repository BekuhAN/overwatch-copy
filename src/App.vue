<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
  color: #28354f;
  box-sizing: content-box !important;
  line-height: 1.3;
}
#app {
  font-family: Roboto, sans-serif;
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
  min-width: 33.333333%;
  padding: 0px 15px;
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
</style>
