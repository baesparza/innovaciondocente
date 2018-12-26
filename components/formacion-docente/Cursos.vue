<template>
  <section class="container">
    <div class="header-row">
      <span class="header-title">Próximos Cursos</span>
      <nuxt-link class="header-more"
                 tag='span'
                 :to="{name: 'formacion-docente-programa-formacion-cursos'}">
        Portafolio de Cursos <i class="fas fa-chevron-right"></i>
      </nuxt-link>
    </div>
    <div class="grid"
         v-if="cursos && cursos.length > 0">
      <CursoCard :curso="curso"
                 v-for="curso in cursos"
                 :key="curso.id"
                 class="card" />
    </div>
    <div v-else>
      <p>No hay Cursos Próximos. Visita nuestro Portafolio de Cursos</p>
    </div>
    <!-- TODO: move to principal page 
      <a class="btn btn-outline-primary btn-sm btn-large"
       rel="noopener"
       target="_blank"
       v-if="programFormacionDocente"
       :href="programFormacionDocente">
      <i class="fas fa-calendar-alt"></i> Programa de Formación Docente
    </a> -->
  </section>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

import CursoCard from "@/components/cards/CursoCard";
export default {
  components: { CursoCard },
  data() {
    return { cursos: null };
  },
  async mounted() {
    const temp = new Date();
    const startDate = new Date(temp.getFullYear(), temp.getMonth());
    const cursosSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .where("date", ">=", startDate)
      .orderBy("date", "desc")
      .get();
    this.cursos = cursosSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
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
  }
  &-title {
    font-size: 30px;
    font-weight: 400;
  }
  &-more {
    cursor: pointer;
    color: $color-primary;
    font-size: 16px;
  }
}

.grid {
  display: grid;
  grid-auto-rows: 225px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
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
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>


