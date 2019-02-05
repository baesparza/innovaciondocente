<template>

  <div class="card">
    <div class="aspect-ratio">
      <div class="image-container">

        <img :src="image"
             :alt="title"
             v-if="image">
        <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image"
             :alt="title"
             v-else>
      </div>
    </div>
    <div class="content">
      <div class="headline"
           v-if="title">{{title}}</div>
      <div class="text"
           v-if="description">{{description}}</div>
      <div class="expanded"></div>
      <nuxt-link class="button"
                 v-if="goto"
                 :to="goto">Ver más</nuxt-link>
      <a class="button"
         v-else-if="!goto && link"
         :href="link"
         target="_blank"
         rel="noopener noreferrer">Conoce nuestra oferta</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "image", "goto", "link"]
};
</script>

<style lang="scss" scoped>
.aspect-ratio {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background-color: #f1f3f4;
}
.card {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 7px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  display: grid;
  grid-template-rows: auto 1fr;
  @media (max-width: 780px) {
    & {
      grid-template-rows: auto 1fr;
    }
  }
  .image-container {
    @media (max-width: 780px) {
      & {
        padding: 20px;
      }
    }
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f1f3f4;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
      // decoration
      border-radius: 7px 0px 0px 7px;
      background-color: #f1f3f4;
    }
  }
  .content {
    padding: 40px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 780px) {
      & {
        padding: 20px 15px;
      }
    }
    .headline {
      font-size: 24px;
      font-weight: 500;
      margin-top: 0;
      line-height: 1.2;
    }
    .text {
      line-height: 20px;
      margin-top: 8px;
    }
    .button {
      color: #00a5c4;
      padding-top: 20px;
      text-transform: uppercase;
      font-size: 15px;
    }
  }
}
.expanded {
  flex-grow: 1;
}
</style>
