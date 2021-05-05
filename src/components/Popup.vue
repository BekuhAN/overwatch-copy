<template>
  <div class="modal_popup">
    <div class="modal_popup__header">
      <font-awesome-icon class="icon" @click="close" icon="times" />
    </div>
    <div class="modal_popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch("togglePopup", null);
    },
  },
};
</script>

<style lang="scss">
.modal_popup {
  background: rgba(#000, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(2px);
  &__header {
    height: 70px;
    width: 100%;
    background: rgba(#000, 0.3);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .icon {
      font-size: 36px;
      margin-right: 30px;
      cursor: pointer;
      path {
        fill: rgba(#fff, 0.7);
        transition: 0.2s;
      }
      &:hover {
        path {
          fill: #fff;
        }
      }
    }
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
  }
}
</style>
