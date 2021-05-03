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
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Popup from "../components/Popup.vue";

export default {
  data() {
    return {
      popupVisible: false,
    };
  },
  name: "Home",
  components: {
    Header,
    Footer,
    Popup,
  },
  methods: {
    popupShow() {
      this.popupVisible = true;
    },
    popupClose() {
      this.popupVisible = false;
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
  background: url('../assets/img/bg-heros.jpg');
  .section_title {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    .section_main_title  {
      color: #fff;
      margin-top: 0;
    }
    .section_description {
      color: #fff;
    }
  }
}
</style>