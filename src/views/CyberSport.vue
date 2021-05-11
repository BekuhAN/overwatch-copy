<template>
  <main class="cybersport_page">
    <div class="container">
      <div class="section_title">
        <h2 class="section_main_title">КИБЕРСПОРТ OVERWATCH</h2>
        <div class="section_description">
          Киберспорт Overwatch — это для всех! Множество разных турниров для
          игроков любого уровня, напряженные игры с комментариями лучших
          специалистов, талантливые команды со всего мира.
        </div>
      </div>

      <div class="section_video">
        <Popup v-if="isActivePopup === 5">
          <iframe
            width="1140"
            height="620"
            src="https://www.youtube.com/embed/zcWaCUyWKEQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Popup>
        <figure class="video" @click="popupShow(5)">
          <img src="../assets/img/video-4.jpg" />
          <span class="video_play">
            <span class="video_play_icon"></span>
          </span>
        </figure>
      </div>

      <div class="section_title">
        <h2 class="section_main_title">КАК СТАТЬ ПРОФЕССИОНАЛОМ</h2>
        <div class="section_description">
          Ваш путь к профессиональному киберспорту Overwatch начинается в
          соревновательной игре, а финальный этап — Overwatch League. Ветеран ли
          вы профессиональной сцены или организованная командная игра вам в
          новинку — для вас всегда найдется турнир Overwatch. Смотрите... или
          участвуйте!
        </div>
      </div>
    </div>
    <section class="world_cup">
      <div class="container">
        <div class="world_cup__item">
          <figure class="image">
            <img src="../assets/img/esports-logo-5.png" />
          </figure>
          <div class="content">
            <div class="title">ЧЕМПИОНАТ МИРА ПО OVERWATCH</div>
            <div class="description">
              В турнире Overwatch World Cup участвуют национальные сборные
              разных стран. Но главное здесь — непосредственное участие
              сообщества. Сборные формируются представителями своей страны; этих
              представителей определяет голосование зрителей. Затем сборные
              сражаются друг с другом, а завершает соревнование финал на
              BlizzCon.
            </div>
            <a href="https://worldcup.playoverwatch.com/" class="btn"
              >ВСЕ ОБ OVERWATCH WORLD CUP
              <font-awesome-icon class="icon" icon="share-square"
            /></a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Popup from "../components/Popup";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      popupVisible: [],
      activeRole: null,
      sortHeros: [],
      isLoading: false,
    };
  },
  name: "Home",
  computed: {
    ...mapGetters(["listHeros", "listRoles", "isActivePopup"]),
  },
  components: {
    Popup,
  },
  methods: {
    popupShow(arrIndex) {
      this.$store.dispatch("togglePopup", arrIndex);
    },
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
  },
};
</script>

<style lang="scss">
.cybersport_page {
  padding: 100px 0 0;
  background: url("../assets/img/bg-cybersport.jpg") no-repeat;
  background-size: 100% auto;
  .section_title {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    color: #fff;
  }
  .section_video {
    width: 60%;
    margin: 80px auto;
  }
  .world_cup {
    background: url("../assets/img/bg-2.jpg") no-repeat;
    background-size: auto 100%;
    background-position-x: center;
    margin-top: 100px;
    padding: 100px 0;
    &__item {
      display: flex;
      .image {
        flex: 0 0 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 100%;
        }
      }
      .content {
        color: #fff;
        .title {
          font-size: 24px;
          font-weight: bold;
          font-family: "Century Gothic";
        }
        .description {
          font-size: 18px;
          margin: 20px 0;
        }
        .btn {
          width: 330px;
          font-size: 16px;
          font-weight: normal;
          height: 40px;
          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
