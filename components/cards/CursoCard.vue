<template>
  <nuxt-link class="card"
             :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.id}}"
             tag="div"
             :style="getBackgroundColor">
    <span class="card-type">{{getCursoType}}</span>
    <div class="expanded"></div>
    <h4 class="card-title">
      {{curso.name |slice(0,50)}}
    </h4>
    <span class="card-date"
          v-if="curso.endDate">
      {{curso.date | smallDateTimestamp}} hasta el {{curso.endDate | smallDateTimestamp}}
    </span>
    <span class="card-date"
          v-else>
      {{curso.date | dateTimestamp}}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["curso"],
  computed: {
    getCursoType() {
      let txt = this.curso.img;
      if (txt.includes("gestion")) return "Gestión académica";
      if (txt.includes("gestion-proyectos")) return "Gestión de proyectos";
      if (txt.includes("identidad")) return "Identidad UTPL";
      if (txt.includes("pedagogia")) return "Pedagogía";
      if (txt.includes("investigacion")) return "Investigación";
      if (txt.includes("tic")) return "Tic's";
      return "No definido";
    },
    getBackgroundColor() {
      let txt = this.curso.img;

      if (txt.includes("gestion"))
        return "background-image: linear-gradient(to bottom right,#364d9d,#1ea3de)";
      if (txt.includes("gestion-proyectos"))
        return "background-image: linear-gradient(to bottom right,#2aa9dc,#2bb4e2)";
      if (txt.includes("identidad"))
        return "background-image: linear-gradient(to bottom right,#d6332e,#f0706f)";
      if (txt.includes("pedagogia"))
        return "background-image: linear-gradient(to bottom right,#07b5d6,#00a5c4)";
      if (txt.includes("investigacion"))
        return "background-image: linear-gradient(to bottom right,#ffb31b,#ffaa00)";
      if (txt.includes("tic"))
        return "background-image: linear-gradient(to bottom right,#1291c6,#44b0de)";
      return "background-image: linear-gradient(to bottom right,#364d9d,#1ea3de)";
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  box-shadow: 15px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 2px 10px #0000003e;
  height: 100%;
  transition: all 0.5s;

  @media only screen and (max-width: 768px) {
    & {
      padding: 15px;
    }
  }
  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    cursor: pointer;
    .card-banner {
      transform: scale(1.1);
    }
  }
  &-type {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
  &-title {
    display: block;
    font-size: 20px !important;
    line-height: 32px;
    font-weight: 400;
  }
  &-date {
    display: block;
    font-size: 16px !important;
  }
}

.expanded {
  flex-grow: 1;
}
</style>

