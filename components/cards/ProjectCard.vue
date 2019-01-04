<template>
  <div>
    <nuxt-link class="card-item"
               :to="{name: 'innovacion-docente-proyectos-innovacion-id', params: {id: proyecto.id}}"
               tag="div">
      <div class="card-header">
        <div v-if="proyecto.img"
             class="card-banner"
             :style="getBannerPath"></div>
        <div v-else
             class="card-banner"></div>
      </div>
      <div class="card-details">
        <span class="card-title">{{proyecto.name | slice(0,75)}}</span>
        <div class="card-spacer"></div>
        <span><b>Coordinador: </b>{{proyecto.coordinator}}</span>
        <div class="card-spacer"></div>
        <span><b>Participantes: </b>{{proyecto.participants.length}}</span>
        <div class="card-spacer"></div>
        <AreasChips :area='proyecto.area'
                    :queryType='queryType' />
        <div class="card-spacer"></div>
        <span class="card-btn">Ver Proyecto</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import AreasChips from "@/components/innovacion-docente/proyectos-innovacion/AreasChips";

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

.card {
  &-item {
    background-color: #f5f5f5;
    border-radius: 3px;
    box-shadow: 2px 2px 10px #0000003e;
    height: 100%;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 10px #00000072;
      .card-banner {
        transform: scale(1.1);
      }
    }
  }

  &-header {
    width: 100%;
    height: 40%;
    overflow: hidden;
    .card-banner {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      background-image: url("~/static/default.png");
      border-radius: 3px 3px 0px 0px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      background-color: $color-primary;
    }
  }
  &-details {
    padding: 15px;
    font-size: 14px;
    height: 60%;
    display: flex;
    flex-direction: column;
  }
  &-spacer {
    height: 8px;
  }

  &-title {
    display: block;
    font-size: 20px !important;
    line-height: 32px;
  }

  &-btn {
    color: $color-primary;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: auto;
  }
}
</style>

