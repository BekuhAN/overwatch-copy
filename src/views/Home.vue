<template>
  <div>
    <Header />
    <section>
      <div class="container">
        <div class="col-6 section_video">
          <Popup :close="popupClose" v-if="popupVisible">
            <iframe
              width="1140"
              height="620"
              src="https://www.youtube.com/embed/FK3CfjJ857g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Popup>
          <figure class="video" @click="popupShow">
            <img src="../assets/img/video-1.jpg" />
            <span class="video_play">
              <span class="video_play_icon"></span>
            </span>
          </figure>
        </div>
        <div class="col-6">
          <div class="section_title">
            <h2 class="section_main_title">Добро пожаловать в OVERWATCH!</h2>
            <div class="section_description">
              Overwatch — яркий командный шутер с разнообразным составом героев.
              Выбирайте своего героя, путешествуйте по миру, сражайтесь за
              объекты и ведите свою команду к победе.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="heros">
      <div class="container">
        <div class="section_title">
          <h2 class="section_main_title">ВЫБОР ГЕРОЯ!</h2>
          <div class="section_description">
            Прежде чем начать игру, вам предстоит выбрать героя. Может, вы
            хотите управлять вооруженной до зубов разумной гориллой с Луны? Или
            мечтаете перемещаться во времени? А может, вам больше нравится
            боевой диджей? Кем бы вы ни хотели быть, в Overwatch вы найдете
            героя по вкусу.
          </div>
        </div>
        <div class="heros_carousel">
          <div class="filter_nav">
            <div
              class="filter_nav__item"
              @click="selectRole(null)"
              :class="{ filtered: activeRole === null }"
            >
              Все
              <span class="count">
                {{ listHeros.length }}
              </span>
            </div>
            <div
              class="filter_nav__item"
              v-for="role of listRoles"
              :key="role.id"
              @click="selectRole(role)"
              :class="{ filtered: activeRole === role }"
            >
              <span
                class="icon"
                :style="'background-image: url(' + getImgUrl(role.icon) + ')'"
              ></span>
              {{ role.name }}
              <span class="count">
                {{ role.heros.length }}
              </span>
            </div>
          </div>
          <Carousel :itemCount="countPage(sortedHeros, 6)">
            <HeroCart
              v-for="hero of sortedHeros"
              :heroItem="hero"
              :key="hero.id"
            />
          </Carousel>
        </div>
      </div>
    </section>
    <section class="about_role">
      <div class="container">
        <div class="section_title">
          <h2 class="section_main_title">ОСОБЕННОСТИ РОЛЕЙ</h2>
        </div>
        <div class="about_role__items">
          <div class="item col-4">
            <div class="figure">
              <img src="../assets/img/role-1.png" alt="" />
            </div>
            <div class="name">Танк</div>
            <div class="description">
              Танки могут выдержать огромное количество урона и прорваться
              сквозь укрепленные позиции, например, через группу героев
              противника или тесные проходы. В роли танка вам предстоит вести за
              собой всю команду.
            </div>
          </div>
          <div class="item col-4">
            <div class="figure">
              <img src="../assets/img/role-2.png" alt="" />
            </div>
            <div class="name">Урон</div>
            <div class="description">
              Герои категории «Урон» призваны находить противников, ввязываться
              в бой и устранять их, используя свои умения и способности. Этим
              грозным, но хрупким бойцам нужна поддержка.
            </div>
          </div>
          <div class="item col-4">
            <div class="figure">
              <img src="../assets/img/role-3.png" alt="" />
            </div>
            <div class="name">Поддержка</div>
            <div class="description">
              Герои поддержки усиливают своих союзников, исцеляют и укрывают их
              щитами, увеличивают их урон, а также выводят из строя противников.
              В роли героя поддержки вы отвечаете за выживание вашей команды.
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Carousel from "../components/Carousel";
import HeroCart from "../components/HeroCart";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      popupVisible: false,
      activeRole: null,
      sortHeros: [],
      isLoading: false,
    };
  },
  name: "Home",
  computed: {
    ...mapGetters(["listHeros", "listRoles"]),
    sortedHeros() {
      if (this.sortHeros.length) {
        return this.sortHeros;
      } else {
        return this.listHeros;
      }
    },
  },
  async beforeMount() {
    await this.getListHeros();
    await this.getListRoles();
    this.isLoading = true;
  },
  components: {
    Header,
    Footer,
    Popup,
    Carousel,
    HeroCart,
  },
  methods: {
    popupShow() {
      this.popupVisible = true;
    },
    popupClose() {
      this.popupVisible = false;
    },
    ...mapActions(["getListHeros", "getListRoles"]),
    countPage(arr, itemsCount) {
      return Math.ceil(arr.length / itemsCount);
    },
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
    selectRole(role) {
      this.activeRole = role;
      this.sortHeros = [];
      let th = this;
      console.log(role);
      if (role !== null) role.heros.map((item) => th.sortHeros.push(item));
    },
  },
};
</script>

<style lang="scss">
.section_video {
  .video {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
    .video_play {
      display: flex;
      position: absolute;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      background: #f06414;
      &_icon {
        border-color: transparent transparent transparent #f2f1ed;
        border-style: solid;
        border-width: 10px 0 10px 17px;
      }
    }
    img {
      width: 100%;
    }
  }
}

.heros {
  background: url("../assets/img/bg-heros.jpg") no-repeat;
  background-size: auto 100%;
  .container {
    flex-direction: column;
  }
  .section_title {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    .section_main_title {
      color: #fff;
      margin-top: 0;
    }
    .section_description {
      color: #fff;
    }
  }
  .heros_carousel {
    width: 100%;
    .filter_nav {
      display: flex;
      font-family: "Century Gothic";
      margin: 30px 0 15px;
      &__item {
        background: #fff;
        padding: 10px;
        color: #28354f;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        margin-left: 5px;
        opacity: 0.5;
        font-size: 14px;
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-repeat: no-repeat;
          background-size: auto 100%;
          background-position: top left;
          margin-right: 5px;
        }
        .count {
          margin-left: 5px;
          color: #aaa;
        }
        &.filtered {
          opacity: 1;
        }
      }
    }
  }
}

.about_role {
  .container {
    flex-direction: column;
  }
  .section_main_title {
    text-align: center;
  }
  &__items {
    display: flex;
    margin-top: 50px;
    .item {
      .figure {
        display: flex;
        overflow: hidden;
        justify-content: center;
      }
      .name {
        font-family: "Century Gothic";
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        margin: 20px 0;
      }
      .description {
        font-size: 18px;
        text-align: center;
      }
    }
  }
}
</style>