<template>
  <nuxt-link class="card"
             :to="goto"
             tag="div">
    <div class="stack">
      <!-- img -->
      <div class="img"
           :style="getImage"></div>
      <!-- gradient -->
      <div class="gradient"></div>
      <!-- content -->
      <div class="content">
        <h3>{{encuentro.name}}</h3>
        <span class="date">{{encuentro.created | dateTimestamp}}</span>

      </div>
    </div>
  </nuxt-link>

</template>
<script>
export default {
  props: ["encuentro"],
  computed: {
    getImage() {
      return `background-image: url(${this.encuentro.img} );`;
    },
    goto() {
      if (this.encuentro.postulations)
        return {
          name: "formacion-docente-cafe-cientifico-id",
          params: { id: this.encuentro.id }
        };
      return {
        name: "formacion-docente-cafe-cientifico"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.card {
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 10px #0000003e;
  transition: all 0.5s;
  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    .img {
      transform: scale(1.03);
    }
  }
  .stack {
    position: relative;
    width: 100%;
    height: 100%;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      // decoration
      background-color: $color-primary;
      background-image: url("~/static/default.png");
      border-radius: 3px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      transition: all 0.5s;
    }

    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: linear-gradient(to bottom, transparent 60%, black);
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      // position el inside
      display: flex;
      justify-content: flex-end;
      padding: 20px;

      flex-direction: column;
      color: $color-text-primary;
      h3 {
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: lowercase;
        &::first-letter {
          text-transform: capitalize;
        }
      } 
      .date {
        font-size: 15px;
      }
    }
  }
}
</style>

