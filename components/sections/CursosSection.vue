<template>
  <div>
    <SectionHeader :title="getTitle"
                   goto='formacion-docente-programa-formacion-cursos'
                   name='Portafolio de Cursos' />
    <p class="auto-break header-description"
       v-if="description">{{description}}</p>
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         :class="{'index-view' :isIndex ,'normal-view' :!isIndex }"
         v-else-if="cursos && cursos.length > 0">
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
import SectionHeader from "@/components/sections/SectionHeader";

export default {
  props: ["description", "isIndex"],
  components: { CursoCard, SectionHeader },
  data() {
    return { cursos: null, loading: true };
  },
  async mounted() {
    try {
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
      if (cursosSnap.empty) throw "No data found";
      else
        this.cursos = cursosSnap.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        );
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
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
.grid {
  display: grid;
  grid-auto-rows: 225px;
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


