<template>
  <main class="admin_panel">
    <div class="container">
      <div class="admin_panel__title">Добавить новость</div>
      <div class="admin_panel__content">
        <div class="admin_panel__content__left">
          <input
            class="news_title"
            v-model="news.title"
            type="text"
            name="title"
            placeholder="Заголовок новости"
          />
          <div class="news_editor">
            <ckeditor
              :editor="editor"
              v-model="news.content"
              :config="editorConfig"
            ></ckeditor>
          </div>
        </div>
        <div class="admin_panel__content__right">
          <div class="news_btns">
            <button class="btn btn_add" @click="addNews">Добавить</button>
            <button class="btn btn_cancel">Отмена</button>
          </div>
          <div class="news_date">
            Дата:
            <input class="date" type="date" v-model="news.date" />
          </div>
          <label class="news_image_upload" for="news_image">
            <font-awesome-icon class="icon" icon="cloud-upload-alt" />
            <span>Выбрать изображение</span>
            <input
              type="file"
              id="news_image"
              name="image"
              @change="changeFile"
          /></label>
          <figure v-if="news.image" class="news_image">
            <img :src="getImgUrl(news.image)" />
          </figure>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";
export default {
  data() {
    return {
      news: {
        title: "",
        content: "",
        image: "",
        date: "",
      },
      editor: ClassicEditor,
      editorConfig: {},
    };
  },
  components: {},
  beforeMount() {
    this.news.date = moment(new Date()).format("YYYY-MM-DD");
    this.$store.dispatch("toggleAdminPanel", true);
  },
  methods: {
    changeFile(e) {
      this.news.image = e.target.files[0].name;
    },
    addNews() {
      this.$store.dispatch("addNews", this.news);
    },
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
  },
};
</script>

<style lang="scss">
.admin_panel {
  background: #f0f0f0;
  min-height: 90vh;
  padding: 50px 0;
  &__title {
    font-size: 32px;
    font-family: "Century Gothic";
    font-weight: bold;
  }
  &__content {
    display: flex;
    &__left {
      flex: 0 0 70%;
      padding-right: 30px;
      box-sizing: border-box !important;
      .news_title {
        width: 98%;
        padding-left: 15px;
        font-family: "Century Gothic";
        font-size: 18px;
        border-radius: 2px;
        border: 1px solid #c4c4c4;
        margin: 30px 0;
        height: 50px;
      }
      .news_editor {
        .ck-content {
          min-height: 600px;
        }
      }
    }
    &__right {
      flex: 0 0 30%;
      font-family: "Century Gothic";
      .news_btns {
        margin: 30px 0;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn {
          height: 50px;
          font-size: 16px;
          text-transform: none;
          width: auto;
          border: none;
          padding: 0px 20px;
          transition: 0.2s;
          border-radius: 2px;
          &.btn_cancel {
            background: #f44336;
            &:hover {
              background: darken(#f44336, 10%);
            }
          }
          &.btn_add {
            background: #00b0ff;
            &:hover {
              background: darken(#00b0ff, 10%);
            }
          }
        }
      }
      .news_date {
        margin-bottom: 30px;
        .date {
          height: 30px;
          color: #323232;
          font-family: "Century Gothic";
          border: 1px solid #c4c4c4;
          border-radius: 2px;
          margin-left: 10px;
          padding-left: 15px;
          font-size: 16px;
        }
      }
      .news_image_upload {
        height: 50px;
        background: #14a37f;
        width: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border-radius: 2px;
        margin-bottom: 30px;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          background: darken(#14a37f, 10%);
        }
        .icon {
          margin-right: 20px;
        }
        input {
          visibility: hidden;
          position: absolute;
        }
      }
      .news_image {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 200px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
