<template>
  <div>
    <Header />
    <section>
      <div class="container">
        <div class="col-6 section_video">
          <!-- src="https://www.youtube.com/embed/FK3CfjJ857g" -->
          <figure class="video">
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
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
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

.section_main_title {
  font-style: italic;
  font-size: 50px;
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 16px;
}
.section_description {
  font-size: 21px;
}
</style>