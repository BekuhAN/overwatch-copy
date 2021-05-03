<template>
  <div class="modal_popup">
    <div class="modal_popup__header">
      <i class="material-icons" @click="close">close</i>
    </div>
    <div class="modal_popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["close"],
};
</script>

<style lang="scss">
.modal_popup {
  background: rgba(#000, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  backdrop-filter: blur(6px);
  &__header {
    height: 70px;
    width: 100%;
    background: rgba(#000, 0.3);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    i {
      font-size: 36px;
      margin-right: 15px;
      color: rgba(#fff, 0.7);
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        color: #fff;
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