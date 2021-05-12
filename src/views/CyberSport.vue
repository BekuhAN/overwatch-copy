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
            width="800"
            height="400"
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
      <div class="accordion">
        <div
          class="accordion__item"
          :class="{ active: isActiveAccordion == 1 }"
          @mousemove="isActiveAccordion = 1"
        >
          <figure class="image">
            <img src="../assets/img/esports-logo-1.png" />
          </figure>
          <div class="content">
            <div class="title">ОТКРЫТЫЙ ДИВИЗИОН</div>
            <div class="description">
              В играх Oткрытого дивизиона Overwatch (на PC) могут участвовать
              игроки любого уровня. Вы сами выбираете, за какой регион вы хотите
              играть: за Европу, за Северную Америку, за Южную Америку, за
              Китай, Корею, Австралию или Тихоокеанский регион. Если вы любите
              азартные состязания и хотите испытать свои силы в организованном
              турнире — это для вас!
            </div>
            <a
              href="https://playoverwatch.com/ru-ru/esports/open-division/"
              class="btn"
              >ПОДРОБНЕЕ ОБ ОТКРЫТОМ ДИВИЗИОНЕ
              <font-awesome-icon class="icon" icon="share-square"
            /></a>
          </div>
        </div>
        <div
          class="accordion__item"
          :class="{ active: isActiveAccordion == 2 }"
          @mousemove="isActiveAccordion = 2"
        >
          <figure class="image">
            <img src="../assets/img/esports-logo-2.png" />
          </figure>
          <div class="content">
            <div class="title">CONTENDERS TRIALS</div>
            <div class="description">
              По окончании каждого сезона 4 команды Contenders будут встречаться
              с 4 сильнейшими командами из Открытого дивизиона Overwatch (т.е.
              всего 8 команд) в региональном отборочном туре Contenders Trials;
              победители пройдут в Overwatch Contenders.
            </div>
            <a href="https://worldcup.playoverwatch.com/" class="btn"
              >ПОДРОБНЕЕ О CONTENDERS TRIALS
              <font-awesome-icon class="icon" icon="share-square"
            /></a>
          </div>
        </div>
        <div
          class="accordion__item"
          :class="{ active: isActiveAccordion == 3 }"
          @mousemove="isActiveAccordion = 3"
        >
          <figure class="image">
            <img src="../assets/img/esports-logo-3.png" />
          </figure>
          <div class="content">
            <div class="title">CONTENDERS</div>
            <div class="description">
              Попадание в ряды Overwatch Contenders — большой успех для
              начинающего профессионала. Каждый из семи регионов будет проводить
              сезонные турниры в течение года, в которых примут участие лучшие
              игроки, распределенные на 12 команд. Победители этих турниров
              будут замечены владельцами команд Overwatch League.
            </div>
            <a href="https://worldcup.playoverwatch.com/" class="btn"
              >ПОДРОБНЕЕ О CONTENDERS
              <font-awesome-icon class="icon" icon="share-square"
            /></a>
          </div>
        </div>
        <div
          class="accordion__item"
          :class="{ active: isActiveAccordion == 4 }"
          @mousemove="isActiveAccordion = 4"
        >
          <figure class="image">
            <img src="../assets/img/esports-logo-4.png" />
          </figure>
          <div class="content">
            <div class="title">OVERWATCH LEAGUE</div>
            <div class="description">
              Лига Overwatch — первая престижная киберспортивная лига
              международного масштаба. В ней участвуют команды из разных городов
              — лучшие из лучших! Пока в их состав входят только сильнейшие
              профессионалы, но команды продолжают отбирать самых талантливых
              игроков из соревнования Overwatch Contenders: так в Лиге всегда
              поддерживается высочайший уровень. Игры проводятся весь год.
              Участие в Лиге для игроков означает фиксированную зарплату,
              льготы... и шанс выиграть миллионы!
            </div>
            <a href="https://worldcup.playoverwatch.com/" class="btn"
              >ПОДРОБНЕЕ ОБ OVERWATCH LEAGUE
              <font-awesome-icon class="icon" icon="share-square"
            /></a>
          </div>
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
      isActiveAccordion: 1,
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
  background-size: auto 100%;
  background-position-x: center;
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
  .accordion {
    display: flex;
    margin-top: 100px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    background: #fff;
    &__item {
      background: #fff;
      display: flex;
      flex: 0 0 120px;
      height: 360px;
      overflow: hidden;
      border: 1px solid #ccc;
      padding: 30px;
      transition: 0.2s;
      &.active {
        flex: 0 0 532px;
        background: #eee;
        .content {
          opacity: 1;
          transition-delay: 0.2s;
        }
      }
      .image {
        flex: 0 0 120px;
        margin-right: 30px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        flex: 0 0 382px;
        transition: 0.5s;
        .title {
          font-size: 22px;
          font-weight: bold;
          font-family: "Century Gothic";
        }
        .description {
          margin: 15px 0;
        }
        .btn {
          width: auto;
          height: 40px;
          font-size: 16px;
          font-weight: normal;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon {
            margin-left: 10px;
          }
        }
      }
    }
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
