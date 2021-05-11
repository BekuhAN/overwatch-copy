<template>
  <main>
    <section>
      <div class="container">
        <div class="col-6 section_video">
          <Popup v-if="isActivePopup === 0">
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
          <figure class="video" @click="popupShow(0)">
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
              <img src="../assets/img/role-1.png" />
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
              <img src="../assets/img/role-2.png" />
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
              <img src="../assets/img/role-3.png" />
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
    <section class="gamemodes">
      <div class="container">
        <div class="section_title">
          <h2 class="section_main_title">РЕЖИМЫ ИГРЫ</h2>
          <div class="section_description">
            В Overwatch можно играть по-разному. Мы рекомендуем для начала
            освоить главные принципы игры в режиме тренировки, а потом уже
            выбрать в главном меню что-нибудь новое.
          </div>
        </div>
        <div class="gamemodes__items">
          <div class="item">
            <figure class="image">
              <img src="../assets/img/gamemode-1.jpg" />
            </figure>
            <div class="icon">
              <img src="../assets/img/gamemode-1-icon.png" />
            </div>
            <div class="name">АРКАДА</div>
            <div class="description">
              Экспериментальные матчи с уникальными сезонными правилами... и
              еженедельными наградами!
            </div>
          </div>
          <div class="item">
            <figure class="image">
              <img src="../assets/img/gamemode-2.jpg" />
            </figure>
            <div class="icon">
              <img src="../assets/img/gamemode-2-icon.png" />
            </div>
            <div class="name">СОРЕВНОВАТЕЛЬНАЯ ИГРА</div>
            <div class="description">
              Померьтесь силами с другими игроками в борьбе за высшие места в
              рейтинге!
            </div>
          </div>
          <div class="item">
            <figure class="image">
              <img src="../assets/img/gamemode-3.jpg" />
            </figure>
            <div class="icon">
              <img src="../assets/img/gamemode-3-icon.png" />
            </div>
            <div class="name">СВОЯ ИГРА</div>
            <div class="description">
              Здесь вы можете менять правила игры с помощью настроек: запретить
              тех или иных героев, увеличить скорость заряда суперспособности и
              пр.
            </div>
          </div>
          <div class="item">
            <figure class="image">
              <img src="../assets/img/gamemode-4.jpg" />
            </figure>
            <div class="icon">
              <img src="../assets/img/gamemode-4-icon.png" />
            </div>
            <div class="name">УЧЕБНЫЙ ПОЛИГОН</div>
            <div class="description">
              Отработайте способности своих героев в игре против компьютера. Это
              идеальный режим, чтобы отточить свои навыки или подучиться играть
              новым героем.
            </div>
          </div>
          <div class="item">
            <figure class="image">
              <img src="../assets/img/gamemode-5.jpg" />
            </figure>
            <div class="icon">
              <img src="../assets/img/gamemode-5-icon.png" />
            </div>
            <div class="name">ИГРА ПРОТИВ КОМПЬЮТЕРА</div>
            <div class="description">
              Вы играете против героев под управлением компьютера на любом поле
              боя по вашему выбору. В этом режиме вы можете освоиться с новыми
              полями боя и персонажами, которые вам еще не знакомы.
            </div>
          </div>
          <div class="item">
            <figure class="image">
              <img src="../assets/img/gamemode-6.jpg" />
            </figure>
            <div class="icon">
              <img src="../assets/img/gamemode-6-icon.png" />
            </div>
            <div class="name">БЫСТРАЯ ИГРА</div>
            <div class="description">
              Сражайтесь с игроками аналогичного уровня.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="workshop">
      <div class="workshop__title">
        <div class="section_title">
          <h2 class="section_main_title">МАСТЕРСКАЯ</h2>
          <h3 class="section_sub_title">
            В ОСНОВЕ ЛЮБЫХ ОТКРЫТИЙ ЛЕЖИТ ВООБРАЖЕНИЕ
          </h3>
          <div class="section_description">
            Благодаря гибким инструментам для написания скриптов в «Мастерской»
            можно создавать самые необычные режимы игры и делиться ими со всем
            сообществом!
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col-6 section_video">
          <Popup v-if="isActivePopup === 1">
            <iframe
              width="1140"
              height="620"
              src="https://www.youtube.com/embed/66jcoebnXsM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Popup>
          <figure class="video" @click="popupShow(1)">
            <img src="../assets/img/video-2.png" />
            <span class="video_play">
              <span class="video_play_icon"></span>
            </span>
          </figure>
        </div>
        <div class="col-6">
          <div class="workshop__items">
            <div class="item">
              <div class="icon"><img src="../assets/img/workshop-1.png" /></div>
              <div class="content">
                <div class="title">ПОЛУЧИТЕ КОНТРОЛЬ НАД ИГРОЙ</div>
                <div class="description">
                  Настраивайте правила, события, условия и действия и создавайте
                  собственные режимы игры.
                </div>
              </div>
            </div>
            <div class="item">
              <div class="icon"><img src="../assets/img/workshop-2.png" /></div>
              <div class="content">
                <div class="title">БЕЗГРАНИЧНЫЕ ВОЗМОЖНОСТИ</div>
                <div class="description">
                  В браузере матчей вы найдете творения, созданные в
                  «Мастерской» другими игроками. Играйте и вдохновляйтесь!
                </div>
              </div>
            </div>
            <div class="item">
              <div class="icon"><img src="../assets/img/workshop-3.png" /></div>
              <div class="content">
                <div class="title">ДЕЛИТЕСЬ СВОИМИ ТВОРЕНИЯМИ</div>
                <div class="description">
                  Сохраняйте свои творения и делитесь ими с другими игроками с
                  помощью браузера матчей.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="reputation_title">
      <div class="section_title">
        <h2 class="section_main_title">РЕПУТАЦИЯ</h2>
        <div class="section_description">
          В Overwatch множество замечательных игроков, и теперь им наконец-то
          можно отдать должное! По завершении матча вы можете похвалить как
          союзников, так и противников, которые положительно повлияли на игру.
          Миру нужны герои — помогите их создать!
        </div>
      </div>
    </section>
    <section class="reputation_items">
      <div class="container">
        <div class="reputation_item">
          <figure class="title" style="background: #f19512">
            <div class="icon"><img src="../assets/img/reputation-1.png" /></div>
            <div class="name">ИНИЦИАТИВНОСТЬ</div>
            <div class="sub_name">Лидерство</div>
          </figure>
          <div class="description">
            Придумывайте и помогайте осуществить тактические маневры, чтобы
            получить похвалу в категории «Инициативность».
          </div>
        </div>
        <div class="reputation_item">
          <figure class="title" style="background: #c918f4">
            <div class="icon"><img src="../assets/img/reputation-2.png" /></div>
            <div class="name">ВЕРНОСТЬ КОМАНДЕ</div>
            <div class="sub_name">Помощь и общение</div>
          </figure>
          <div class="description">
            Игроков, которые эффективно работают на команду, можно похвалить в
            категории «Верность команде».
          </div>
        </div>
        <div class="reputation_item">
          <figure class="title" style="background: #3ece44">
            <div class="icon"><img src="../assets/img/reputation-3.png" /></div>
            <div class="name">СПОРТИВНЫЙ ДУХ</div>
            <div class="sub_name">Вежливость и позитив</div>
          </figure>
          <div class="description">
            Игроков, которые оказывают положительное влияние на окружающих,
            можно похвалить в категории «Спортивный дух».
          </div>
        </div>
      </div>
    </section>
    <section class="reputation_levels">
      <div class="container">
        <div class="col-6">
          <div class="section_title">
            <h2 class="section_main_title">УРОВНИ РЕПУТАЦИИ</h2>
            <div class="section_description">
              Изначально уровень репутации всех игроков равен 1, а максимально
              возможный уровень — 5. Получение похвалы влияет на уровень
              репутации. Также вы будете получать небольшое количество опыта,
              когда хвалите других игроков. С высоким уровнем репутации вам
              будет проще найти группу через «Поиск группы».
            </div>
          </div>
          <div class="reputation_levels__item">
            <div class="title">ПОДДЕРЖАНИЕ УРОВНЯ РЕПУТАЦИИ</div>
            <div class="description">
              Если вас какое-то время не хвалят или вы покидаете матчи до их
              завершения, ваш уровень репутации будет падать. Кроме того, при
              получении санкций репутация игрока может упасть до 0.
            </div>
          </div>
          <div class="reputation_levels__item">
            <div class="title">НАГРАДЫ ЗА РЕПУТАЦИЮ</div>
            <div class="description">
              При высоком уровне репутации вы можете время от времени получать
              контейнеры (их количество будет зависеть от уровня). Во время
              особых событий вы будете получать контейнеры события (например,
              контейнеры Летних игр).
            </div>
          </div>
        </div>
        <div class="col-6 section_video">
          <Popup v-if="isActivePopup === 2">
            <iframe
              width="1140"
              height="620"
              src="https://www.youtube.com/embed/t5n8BhD5nxg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Popup>
          <figure class="video" @click="popupShow(2)">
            <img src="../assets/img/video-3.jpg" />
            <span class="video_play">
              <span class="video_play_icon"></span>
            </span>
          </figure>
        </div>
      </div>
    </section>
    <section class="banner"></section>
    <section class="new_levels">
      <div class="container">
        <div class="section_title">
          <h2 class="section_main_title">НОВЫЕ УРОВНИ</h2>
          <div class="section_description">
            По мере игры вы будете получать новые уровни, а за них — наградные
            контейнеры с разными предметами, которые позволяют придать персонажу
            индивидуальности. Управлять внешним видом героев можно в разделе
            «Коллекция» в главном меню.
          </div>
        </div>
        <div class="new_levels__item">
          <div class="content">
            <div class="title">НАГРАДЫ</div>
            <div class="description">
              При получении нового уровня вам выдается контейнер, в котором
              содержится набор случайных предметов для изменения внешнего вида
              героев. Контейнеры также можно приобрести во внутриигровом
              магазине. В них может также содержаться валюта для покупки
              конкретных косметических предметов на ваш выбор. Каждые 10 уровней
              вы будете получать рамку для портрета, пока не откроете все
              возможные варианты.
            </div>
          </div>
          <figure class="image">
            <img src="../assets/img/newlvl-2.png" />
          </figure>
        </div>
        <div class="new_levels__item">
          <figure class="image">
            <img src="../assets/img/newlvl-1.png" />
          </figure>
          <div class="content">
            <div class="title">ДОСТИЖЕНИЯ И НАГРАДЫ</div>
            <div class="description">
              Если в бою вам удается так или иначе продемонстрировать
              мастерство, вас награждают медалью. Подробный список достижений и
              полученных наград, уровень опыта, а также игровые предпочтения
              можно просмотреть в разделе «Сводка» игрового профиля (в главном
              меню игры или в верхнем меню на сайте). Вы можете поделиться
              своими успехами с друзьями.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="paty_search">
      <div class="container">
        <div class="col-6">
          <figure class="image"><img src="../assets/img/looking.png" /></figure>
        </div>
        <div class="col-6">
          <div class="section_title">
            <h2 class="section_main_title">ПОИСК ГРУППЫ</h2>
            <div class="section_description">
              Играйте так, как удобно вам, с помощью функции «Поиск группы»!
              Теперь у вас есть возможность контролировать игру, настроив группу
              под себя: можно ограничить доступ к ней по уровню репутации,
              прежде чем запускать «Быструю игру», «Тренировку с ИИ» или любой
              соревновательный режим. Найдите команду единомышленников или
              создайте свою.
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Popup from "../components/Popup";
import Carousel from "../components/Carousel";
import HeroCart from "../components/HeroCart";
import { mapGetters, mapActions } from "vuex";

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
    Popup,
    Carousel,
    HeroCart,
  },
  methods: {
    popupShow(arrIndex) {
      this.$store.dispatch("togglePopup", arrIndex);
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
        transition: 0.4s;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
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
  background: #f2f1ed;
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

.gamemodes {
  background: url("../assets/img/bg-1.jpg") no-repeat top/cover;
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    .item {
      width: 340px;
      margin: 20px;
      background: #fff;
      border-radius: 5px;
      overflow: hidden;
      .image {
        width: 100%;
        display: flex;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .icon {
        margin: 15px auto;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        img {
          height: 100%;
        }
      }
      .name {
        font-size: 24px;
        text-align: center;
        font-weight: bold;
        margin: 15px;
        font-family: "Century Gothic";
      }
      .description {
        margin: 0 20px 20px;
        text-align: center;
      }
    }
  }
  .container {
    flex-direction: column;
  }
  .section_title {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
}

.workshop {
  padding-top: 0;
  background: #f2f1ed;
  &__title {
    background: url("../assets/img/bg-workshop.jpg") no-repeat top/cover;
    margin-bottom: 100px;
    .section_title {
      width: 40%;
      text-align: center;
      color: #fff;
      padding: 50px;
      margin: 0 auto;
      .section_main_title {
        margin: 0;
      }
      .section_sub_title {
        margin: 15px 0;
      }
      .section_description,
      .section_sub_title,
      .section_main_title {
        color: #fff;
      }
    }
  }
  &__items {
    width: 100%;
    .item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      .icon {
        min-width: 80px;
        height: 80px;
        background: #28354f;
        border-radius: 50%;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        .title {
          font-size: 18px;
          font-weight: bold;
          font-family: "Century Gothic";
          margin-bottom: 10px;
        }
      }
    }
  }
}

.reputation_title {
  .section_title {
    width: 40%;
    text-align: center;
    margin: 0px auto;
    .section_main_title {
      margin: 0;
    }
  }
}
.reputation_items {
  background: #f2f1ed;
  .reputation_item {
    width: 340px;
    margin: 20px;
    .title {
      border-radius: 5px;
      text-align: center;
      padding: 30px;
      .icon {
        width: 80px;
        height: 80px;
        display: flex;
        margin: 0 auto;
        align-items: center;
        img {
          width: 100%;
        }
      }
      .name {
        font-size: 22px;
        font-family: "Century Gothic";
        font-weight: bold;
        color: #fff;
        margin-bottom: 5px;
      }
      .sub_name {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
    }
    .description {
      text-align: center;
      padding: 20px;
    }
  }
}

.reputation_levels {
  &__item {
    margin-top: 30px;
    .title {
      font-size: 22px;
      font-family: "Century Gothic";
      font-weight: bold;
      margin-bottom: 10px;
    }
    .description {
      font-size: 18px;
    }
  }
}

.banner {
  background: url("../assets/img/banner.jpg") no-repeat;
  background-size: auto 100%;
  background-position: center;
  height: 320px;
}

.new_levels {
  .container {
    flex-direction: column;
  }
  .section_title {
    width: 60%;
    text-align: center;
    margin: 0 auto 50px;
  }
  &__item {
    display: flex;
    margin-top: 60px;
    align-items: center;
    padding: 0px 50px;
    .image {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 50px;
      min-width: 250px;
      height: 250px;
      img {
        width: 100%;
      }
    }
    .content {
      .title {
        font-size: 24px;
        font-family: "Century Gothic";
        font-weight: bold;
        margin-bottom: 20px;
      }
      .description {
        font-size: 18px;
      }
    }
  }
}

.paty_search {
  background: #f2f1ed;
  position: relative;
  z-index: -2;
  .container {
    align-items: center;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    background: #f7931e;
    left: -70px;
    top: 0;
    width: 50%;
    height: 100%;
    transform: skewX(-15deg);
    z-index: -1;
  }
  .image {
    display: flex;
    align-items: center;
    width: 300px;
    height: 300px;
    img {
      width: 100%;
    }
  }
}
</style>
