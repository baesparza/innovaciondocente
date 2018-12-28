<template>
  <div>

    <div class="card"
         v-on:click='openVideoModal'>
      <div class="card-img">
        <div class="card-img-container"
             :style="getImage"></div>
      </div>
      <div class="card-content">
        <span class="card-content-title">{{innovaTic.name|slice(0,25)}}</span>
        <p class="auto-break card-content-description">{{innovaTic.added| dateTimestamp}}</p>
      </div>
      <div class="card-play">
        <i class="fas fa-play-circle"></i>
      </div>
    </div>
    <transition name="fade">
      <div class="modal"
           ref="modal"
           @keyup.esc="close"
           v-if="activeModal">
        <div class="container">

          <div class="modal-header">
            <a class="modal-header-title"
               :href="getLink"
               target="_blank">{{innovaTic.name}}</a>
            <i class="fas fa-times modal-header-close"
               @click="close"></i>
          </div>
          <div class="modal-embed-container">
            <iframe :src="getVideoSrc"
                    frameborder="0"
                    :title="innovaTic.name"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
          </div>
          <p class="auto-break">{{innovaTic.description}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["innovaTic"],
  data: () => {
    return {
      activeModal: false
    };
  },
  computed: {
    getImage() {
      let url = `https://i.ytimg.com/vi/${this.innovaTic.id}/hqdefault.jpg`;
      return `background-image: url(${url} );`;
    },
    getVideoSrc() {
      return `https://www.youtube.com/embed/${
        this.innovaTic.id
      }?enablejsapi=1&html5=1`;
    },
    getLink() {
      return `https://youtu.be/${this.innovaTic.id}`;
    }
  },
  methods: {
    openVideoModal() {
      this.activeModal = true;
      document.documentElement.style.overflow = "hidden";
    },
    close() {
      this.activeModal = false;
      document.documentElement.style.overflow = "auto";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 10px;
  background-color: #dfdfdf72;
  border-radius: 5px;
  height: 100%;
  cursor: pointer;
  align-items: center;
  box-shadow: 2px 2px 10px #0000003e;
  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    cursor: pointer;
  }

  &-img {
    flex: 0 0 130px;
    @media only screen and (max-width: 768px) {
      & {
        flex: 0 0 100px;
      }
    }
    &-container {
      background-color: $color-primary;
      width: 100%;
      padding-top: 56.25%;
      background-image: url("~/static/default.png");
      border-radius: 3px 3px 0px 0px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
    }
  }
  &-content {
    flex-grow: 1;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    &-title {
      max-lines: 1;
      font-weight: 500;
    }
    &-description {
      max-lines: 3;
      margin: 0;
      font-size: 14px;
    }
  }
  &-play {
    color: $color-primary;
  }
}
.modal {
  display: block;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: auto;
  background-color: rgb(255, 255, 255);
  overflow: auto;
  padding-bottom: 15px;
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 30px 0 15px 0;
    border-bottom: solid;
    border-bottom-width: 1px;
    align-items: baseline;
    transition: 0.3s;

    &-title {
      font-size: 24px;
      font-weight: 500;
      text-decoration: none;
      padding-right: 15px;
    }
    &-close {
      font-size: 30px;
      transition: 0.3s;
      &:hover,
      &:focus {
        color: $color-primary;
        cursor: pointer;
      }
    }
  }
  &-embed-container {
    width: 100%;
    padding-top: 56.25%;

    position: relative;
    overflow: hidden;
    margin: 15px 0 15px 0;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}
</style>
