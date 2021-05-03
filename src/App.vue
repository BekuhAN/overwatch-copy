<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Big Noodle Titling';
  src: local('Big Noodle Titling'),
    url('~@/assets/fonts/Big Noodle Titling.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Century Gothic';
  src: local('Century Gothic'),
    url('~@/assets/fonts/Century Gothic.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #353c42;
  box-sizing: content-box !important;
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

.section_main_title {
  font-style: italic;
  font-size: 56px;
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 16px;
  font-family: "Big Noodle Titling";
}
.section_description {
  font-size: 21px;
  line-height: 1.3;
}
</style>
