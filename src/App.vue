<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
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
  min-width: 50%;
  width: 50%;
  padding: 0px 30px;
}
</style>
