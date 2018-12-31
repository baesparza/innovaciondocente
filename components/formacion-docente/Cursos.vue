<template>
  <div>
    <div class="header-row">
      <span class="header-title">{{getTitle}}</span>
      <nuxt-link class="header-more"
                 tag='span'
                 :to="{name: 'formacion-docente-programa-formacion-cursos'}">
        Portafolio de Cursos <i class="fas fa-chevron-right"></i>
      </nuxt-link>
      <p class="auto-break header-description"
         v-if="description">{{description}}</p>
    </div>
    <div class="grid"
         :class="{'index-view' :isIndex ,'normal-view' :!isIndex }"
         v-if="cursos && cursos.length > 0">
      <CursoCard :curso="curso"
                 v-for="curso in cursos"
                 :key="curso.id"
                 class="card" />
    </div>
    <div v-else>
      <span>{{getErrorMessage}} Visita nuestro Portafolio de Cursos</span>
    </div>
    <!-- TODO: move to principal page 
      <a class="btn btn-outline-primary btn-sm btn-large"
       rel="noopener"
       target="_blank"
       v-if="programFormacionDocente"
       :href="programFormacionDocente">
      <i class="fas fa-calendar-alt"></i> Programa de Formación Docente
    </a> -->
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

import CursoCard from "@/components/cards/CursoCard";
export default {
  props: ["description", "isIndex"],
  components: { CursoCard },
  data() {
    return { cursos: null };
  },
  async mounted() {
    let cursosSnap = null;
      if (this.isIndex) {
      const temp = new Date();
      const startDate = new Date(temp.getFullYear(), temp.getMonth());
      cursosSnap = await AFirestore.collection(
        "formacion-docente/programa-formacion/cursos"
      )
        .where("date", ">=", startDate)
        .orderBy("date", "desc")
        .get();
    } else {
      cursosSnap = await AFirestore.collection(
        "formacion-docente/programa-formacion/cursos"
      )
        .orderBy("date", "desc")
        .limit(4)
        .get();
    }
    this.cursos = cursosSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  computed: {
    getTitle() {
      return this.isIndex ? "Próximos Cursos" : "Últimos Cursos";
    },
    getErrorMessage() {
      return this.isIndex
        ? "No hay próximos cursos."
        : "No se pudieron cargar los últimos cursos.";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.header {
  &-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    align-items: baseline;
  }
  &-title {
    font-size: 30px;
    font-weight: 400;
    margin-right: 15px;
  }
  &-more {
    cursor: pointer;
    color: $color-primary;
    font-size: 16px;
  }
  &-description {
    padding-top: 10px;
    font-size: 16px;
  }
}

.grid {
  display: grid;
  grid-auto-rows: 225px;
  grid-auto-flow: row dense;
  grid-gap: 20px;
}

.index-view {
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-auto-rows: 200px;
    }
  }
}

.normal-view {
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-auto-rows: 200px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>


