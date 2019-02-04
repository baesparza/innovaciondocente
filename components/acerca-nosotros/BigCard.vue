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
      <nuxt-link class="button"
                 v-if="goto"
                 :to="goto">Ver más</nuxt-link>
      <div class="button"
           v-else-if="!goto && link">Ver más</div>
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
  background-color: #f1f3f4;
}
.card {
  width: 100%;
  height: 100%;
  background: var(--clr2);
  border-radius: var(--border-radius);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  display: grid;
  margin-bottom: 30px;
  grid-template-columns: 4fr 7fr;
  @media (max-width: 700px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 35px 50px;
    @media (max-width: 1000px) {
      & {
        padding: 15px 20px;
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
      // decoration
      border-radius: 7px 0px 0px 7px;
      background-color: #f1f3f4;
    }
  }
  .content {
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      padding-top: 10px;
      text-transform: uppercase;
      font-size: 15px;
    }
  }
}
</style>

