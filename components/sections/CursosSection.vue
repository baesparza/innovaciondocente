<template>
  <div>
    <SectionHeader :title="getTitle"
                   goto='formacion-docente-programa-formacion-cursos'
                   name='Portafolio de Cursos' />
    <p class="header-description"
       v-if="description || programFormacionDocente">
      <span class="auto-break"
            v-if="description">{{description}}</span>
      <a rel="noopener"
         target="_blank"
         v-if="programFormacionDocente"
         :href="programFormacionDocente">
        Descarga el Programa de Formación Docente | {{getDate}}
      </a>
    </p>
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="cursos && cursos.length > 0">
      <CursoCard :curso="curso"
                 v-for="curso in cursos"
                 :key="curso.id"
                 class="card" />
    </div>
    <div v-else>
      <span>{{getErrorMessage}} Visita nuestro Portafolio de Cursos</span>
    </div>

  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import CursoCard from "@/components/cards/CursoCard";
import SectionHeader from "@/components/sections/SectionHeader";

export default {
  props: ["description", "isIndex", "programFormacionDocente"],
  components: { CursoCard, SectionHeader },
  data() {
    return { cursos: null, loading: true};
  },
  async mounted() {
    try {
      let cursosSnap = null;
        const temp = new Date();
        const startDate = new Date(temp.getFullYear(), temp.getMonth());
        cursosSnap = await AFirestore.collection(
          "formacion-docente/programa-formacion/cursos"
        )
          .where("date", ">=", startDate)
          .orderBy("date", "desc")
          .get();
      // } else {
      //   cursosSnap = await AFirestore.collection(
      //     "formacion-docente/programa-formacion/cursos"
      //   )
      //     .orderBy("date", "desc")
      //     .limit(4)
      //     .get();
      // }
      if (!cursosSnap.empty)
        this.cursos = cursosSnap.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        );
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
  },
  computed: {
    getDate() {
return new Date().getFullYear();
    },
    getTitle() {
      return this.isIndex ? "Próximos Cursos" : "Cursos Actuales";
    },
    getErrorMessage() {
      return this.isIndex
        ? "No hay próximos cursos."
        : "No se pudieron cargar los cursos Actuales.";
    }
  }
};
</script>

<style lang="scss" scoped>
.header-description {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.grid {
  display: grid;
  grid-auto-rows: 225px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  @media only screen and (max-width: 768px) {
    & {
      grid-auto-rows: 200px;
      grid-gap: 15px;
    }
  }
}
</style>


