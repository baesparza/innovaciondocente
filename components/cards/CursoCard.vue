<template>
  <nuxt-link class="card-container"
             :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.id}}"
             tag="div"
             :style="getBackgroundColor">
    <span class="card-type">{{getCursoType}}</span>
    <div class="expanded"></div>
    <h4 class="card-title">
      {{curso.name |slice(0,50)}}
    </h4>
    <span class="card-date">
      {{curso.date | dateTimestamp}}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["curso"],
  computed: {
    getCursoType: function() {
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
        return "background-image: linear-gradient(to bottom right,#1d9e97,#41b8c0)";
      if (txt.includes("investigacion"))
        return "background-image: linear-gradient(to bottom right,#f36a22,#f89a1c)";
      if (txt.includes("tic"))
        return "background-image: linear-gradient(to bottom right,#1291c6,#44b0de)";
      return "background-image: linear-gradient(to bottom right,#364d9d,#1ea3de)";
    }
  }
};
</script>


<style lang="scss">
.card {
  &-container {
    height: 100%;
    box-shadow: 15px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  &-type {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }
  &-title {
    display: block;
    font-size: 24px !important;
    line-height: 32px;
    font-weight: 400;
  }
  &-date {
  }
}

.expanded {
  flex-grow: 1;
}
</style>

