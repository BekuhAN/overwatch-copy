<template>
  <div class="modal_popup">
    <div class="modal_popup__header">
      <font-awesome-icon class="icon" @click="close(itemId)" icon="times" />
    </div>
    <div class="modal_popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["close", "itemId"],
};
</script>

<style lang="scss">
.modal_popup {
  background: rgba(#000, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  backdrop-filter: blur(1px);
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