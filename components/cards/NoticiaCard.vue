<template>
  <nuxt-link class="card"
             :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.id}}"
             tag="div">
    <div class="card-header">
      <div class="card-header-img"
           :style="getBannerPath"></div>
      <div class="card-header-overlay">
        Noticia </div>
    </div>
    <div class="card-body">
      <span class="card-body-title">
        {{noticia.name}}
      </span>
      <span class="card-body-date">
        {{noticia.created | dateTimestamp}}
      </span>
    </div>
  </nuxt-link>
</template>


<script>
export default {
  props: ["noticia"],
  computed: {
    getBannerPath() {
      return "background-image: url(" + this.noticia.img + ");";
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";

.card {
  max-width: 100%;
  max-height: 100%;
  background-color: #d4d4d472;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  box-shadow: 2px 2px 10px #0000003e;
  overflow: hidden;
  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    .card-header-img {
      transform: scale(1.1);
    }
  }
  &-header {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-bottom: 56.2%;
    background-color: $color-primary;

    &-img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;

      // img
      background-color: $color-primary;
      background-image: url("~/static/default.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 0.5s;
    }
    &-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.664)
      );
      z-index: 10000;

      // position text
      padding: 13px 20px;
      color: white;
    }
  }
  &-body {
    padding: 13px 20px;
    &-title {
      font-size: 22px;
      font-weight: 400;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: justify;
    }
    &-date {
      font-size: 15px;
    }
  }
}
</style>
