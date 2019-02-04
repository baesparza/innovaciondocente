<template>
  <nuxt-link class="card"
             :to="{name: 'innovacion-docente-proyectos-innovacion-id', params: {id: proyecto.id}}"
             tag="div">
    <!-- img -->
    <div class="aspect-ratio">
      <div v-if="proyecto.img"
           class="card-banner"
           :style="getBannerPath"></div>
      <div v-else
           class="card-banner"></div>
    </div>
    <!-- details -->
    <div class="card-details">
      <span class="card-title">{{proyecto.name.toLowerCase()}}</span>
      <div class="spacer"></div>
      <span class="card-coordinator"><b>Coordinador: </b>{{proyecto.coordinator.toLowerCase()}}</span>
      <div class="spacer"></div>
      <span><b>Participantes: </b>{{proyecto.participants.length}}</span>
      <div class="spacer"></div>
      <AreasChips :area='proyecto.area'
                  :queryType='proyecto.type' />
      <div class="expanded"></div>
      <!-- goto btn -->
      <span class="card-btn">Ver Proyecto</span>
    </div>
  </nuxt-link>
</template>

<script>
import AreasChips from "@/components/other/AreasChips";

export default {
  props: ["proyecto"],
  components: { AreasChips },
  computed: {
    getBannerPath() {
      return "background-image: url(" + this.proyecto.img + ");";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.aspect-ratio {
  position: relative;
  width: 100%;
  padding-top: 50%;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}

.card {
  // card style
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #dfdfdf72;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #0000003e;
  transition: all 0.5s;
  overflow: hidden;

  // position elements
  display: grid;
  grid-template-rows: auto 1fr;
  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    .card-banner {
      transform: scale(1.04);
    }
  }

  .card-banner {
    // position
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    // style
    background-color: $color-primary;
    background-image: url("~/static/default.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.5s;
  }
  &-details {
    max-height: 100%;
    max-width: 100%;
    padding: 15px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
      & {
        padding: 10px;
      }
    }
  }
  b {
    font-weight: 500;
  }

  &-title {
    font-size: 20px !important;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: capitalize;
  }
  &-coordinator {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: capitalize;
  }

  &-btn {
    color: $color-primary;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }
}
.expanded {
  flex-grow: 1;
}
.spacer {
  height: 10px;
}
</style>

