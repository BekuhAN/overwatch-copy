<template>
  <div class="carousel_wrapper">
    <div class="carousel" :style="cssProps">
      <transition-group
        name="carousel_complete"
        tag="div"
        class="carousel__items"
      >
        <slot></slot>
      </transition-group>
      <button class="carousel__prev" @click="carouselPrev">
        <font-awesome-icon class="icon" icon="angle-left" />
      </button>
      <button class="carousel__next" @click="carouselNext">
        <font-awesome-icon class="icon" icon="angle-right" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemCount", "role"],
  data() {
    return {
      currentCountPage: 0,
      margin: 0,
    };
  },
  beforeMount() {},
  computed: {
    cssProps: function () {
      return {
        "--margin-left": this.margin + "%",
      };
    },
  },
  methods: {
    carouselPrev() {
      if (this.currentCountPage > 0) {
        this.currentCountPage--;
      } else {
        this.currentCountPage = this.itemCount - 1;
      }
      this.margin = -100 * this.currentCountPage;
    },
    carouselNext() {
      if (this.currentCountPage < this.itemCount - 1) {
        this.currentCountPage++;
      } else {
        this.currentCountPage = 0;
      }
      this.margin = -100 * this.currentCountPage;
    },
    selectRole() {
      this.margin = 0;
    },
  },
  watch: {
    role: "selectRole",
  },
};
</script>

<style lang="scss">
.carousel_wrapper {
  position: relative;
  .carousel {
    overflow: hidden;
    &_complete-item {
      transition: 2s;
    }
    &_complete-enter,
    &_complete-leave-to {
      transform: scale(0.6) translateY(150px);
    }
    &__items {
      display: flex;
      margin-left: var(--margin-left);
      transition: 0.5s;
    }
    &__prev,
    &__next {
      position: absolute;
      display: block;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      font-size: 50px;
      transition: 0.2s;
      cursor: pointer;
      background: none;
      border: none;
      .icon {
        path {
          transition: 0.2s;
          fill: #fff;
        }
      }
      &:focus {
        outline: none;
      }
      &:hover {
        .icon {
          path {
            fill: #f06414;
          }
        }
      }
    }
    &__prev {
      left: -50px;
    }
    &__next {
      right: -50px;
    }
  }
}
</style>
