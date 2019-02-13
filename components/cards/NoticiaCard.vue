<template>
  <nuxt-link class="card"
             :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.id}}"
             tag="div">
    <div class="card-header">
      <img :src="noticia.img" :alt="noticia.id" class="card-header-img">
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
      return "background-image: url(" +  + ");";
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";

.card {
  width: 100%;
  height: 100%;
  background-color: #d4d4d472;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  box-shadow: 2px 2px 10px #0000003e;
  overflow: hidden;
  transition: all 0.5s;

  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    .card-header-img {
      transform: scale(1.04);
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
      object-fit: cover;

      // img background
      background-color: $color-primary;
      background-image: url("~/static/default.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 0.5s;
    }
  }
  &-body {
    padding: 20px;
    @media only screen and (max-width: 768px) {
      & {
        padding: 15px;
      }
    }
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
