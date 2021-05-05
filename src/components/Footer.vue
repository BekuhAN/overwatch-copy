<template>
  <footer>
    <div class="footer_item">
      <div class="btn">Приобрести</div>
    </div>
    <div class="footer_item social_icons">
      <div class="title">БУДЬТЕ НА СВЯЗИ!</div>
      <div class="social_icons__item">
        <font-awesome-icon class="icon" :icon="['fab', 'vk']" />
      </div>
      <div class="social_icons__item">
        <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
      </div>
      <div class="social_icons__item">
        <font-awesome-icon class="icon" :icon="['fab', 'youtube']" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background: url("../assets/img/bg-footer.jpg") no-repeat;
  background-position: center;
  .footer_item {
    padding: 30px 0;
    .btn {
      margin: 0 auto;
    }
  }
  .social_icons {
    border-top: 2px solid rgba(#fff, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .title {
      min-width: 100%;
      text-align: center;
      font-family: "Big Noodle Titling";
      font-weight: bold;
      color: #fff;
      font-size: 28px;
      font-style: italic;
      margin-bottom: 20px;
    }
    &__item {
      width: 64px;
      height: 64px;
      border: 1px solid rgba(#fff, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 20px;
      position: relative;
      transition: 0.2s;
      cursor: pointer;
      &:not(:nth-child(2)):before {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          position: absolute;
          background: rgba(#fff, 0.5);
          top: 50%;
          transform: translateY(-50%);
          left: -20px;
      }
      &:hover {
        border-color: #f06414;
        .icon {
          path {
            fill: #f06414;
          }
        }
      }
      .icon {
        font-size: 26px;
        path {
          transition: 0.2s;
          fill: rgba(#fff, 0.5);
        }
      }
    }
  }
}
</style>