<template>
  <div class="hero_item">
    <figure class="hero_item__image">
      <img :src="getImgUrl(heroItem.image)" />
    </figure>
    <div class="hero_item__description">
      <div
        class="role_icon"
        :style="'background-image: url(' + getImgUrl(heroItem.roleIcon) + ')'"
      ></div>
      <div class="name">{{ heroItem.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heroItem"],
  data() {
    return {};
  },
  methods: {
    getImgUrl: function (imgName) {
      return require("../assets/img/" + imgName);
    },
  },
};
</script>

<style lang="scss">
.hero_item {
  min-width: 214px;
  height: 345px;
  margin: 5px;
  overflow: hidden;
  position: relative;
  border: 2px solid #fff;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    z-index: 2;
    .hero_item__image {
      transform: scale(1.2);
    }
    .hero_item__description {
      background: rgba(#fff, 0.9);
      .role_icon {
        background-position: top left;
      }
      .name {
        color: #28354f;
      }
    }
  }
  &__image {
    background: url("../assets/img/bg-heros.jpg");
    overflow: hidden;
    transition: 0.1s;
    img {
      width: 100%;
    }
  }
  &__description {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 80px;
    background: rgba(#28354f, 0.9);
    .role_icon {
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: top right;
      margin: 8px;
    }
    .name {
      color: #fff;
      font-family: "Big Noodle Titling";
      font-style: italic;
      font-size: 32px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      text-align: center;
    }
  }
}
</style>
