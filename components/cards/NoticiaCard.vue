<template>
  <div class="card"
       :style="'background-image: url('+noticia.img+');'">
    <div class="overlay">
      <div class="data">
        <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.id}}"
                   tag="h4">
          {{noticia.name | capitalize}}
        </nuxt-link>
        <p>{{noticia.description}}
          <br>
          <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.id}}">
            Leer más...
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["noticia"]
};
</script>


<style lang="scss" scoped>
@import "assets/variables";

.card {
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (min-width: 576px) {
    &:nth-child(1) {
      grid-column-end: span 2;
    }
    &:nth-child(5n + 0) {
      grid-row-end: span 2;
    }
  }
  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-row-end: span 2;
    }
    &:nth-child(8n + 0) {
      grid-column-end: span 2;
    }
  }
  @media (min-width: 992px) {
    &:nth-child(1) {
      grid-column-end: span 3;
    }
    &:nth-child(10n + 0) {
      grid-column-end: span 3;
    }
  }
  .overlay {
    // transition: 0.2s ease-in-out 0.2s;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    color: $color-text-primary;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.664),
      $color-background-inverse
    );
    justify-content: flex-end;
    align-items: flex-start;
    .data {
      padding: 20px;
      max-height: 100%;
      overflow: auto;
      text-align: justify;

      h4 {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      p,
      a {
        display: none;
        color: $color-text-primary;
      }
      a {
        float: right;
      }
    }
  }
}
.overlay:hover {
  background: rgba($color-background-inverse, 0.8);
  .data {
    p,
    a {
      display: inline;
    }
  }
}
</style>
