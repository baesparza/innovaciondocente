<template>
  <div>
    <AreasChips :area='activeAreas'
                :queryType='projectType'
                :clean="projectArea"
                class="AreasChips" />
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="proyectos && proyectos.length > 0">
      <ProjectCard v-for="proyecto in proyectos"
                   :key="proyecto.id"
                   :proyecto="proyecto" />
    </div>
    <div v-else>
      <span>No se encontraron Proyectos para mostrar, vuelve a intentarlo.</span>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import ProjectCard from "@/components/cards/ProjectCard";
import AreasChips from "@/components/other/AreasChips";

export default {
  components: { ProjectCard, AreasChips },
  props: ["projectType", "projectArea"],
  data() {
    return {
      proyectos: null,
      loading: true,
      activeAreas: {
        administrativa: true,
        biologica: true,
        sociohumanistica: true,
        tecnica: true
      }
    };
  },
  watch: {
    projectType() {
      this.fetchData();
    },
    projectArea() {
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.proyectos = null;
      try {
        // validate input
        if (!this.projectType) throw "Invalid input";

        // query data
        const proyectosCollection = AFirestore.collection(
          "/innovacion-docente/proyectos-innovacion/proyectos"
        )
          .orderBy("name")
          .where("type", "==", this.projectType);
        const porjectsSnap = this.projectArea
          ? await proyectosCollection
              .where(`area.${this.projectArea}`, "==", true)
              .get()
          : await proyectosCollection.get();

        // validate date
        if (porjectsSnap.empty) throw "No data found";
        else
          this.proyectos = porjectsSnap.docs.map(doc =>
            Object.assign({ id: doc.id }, doc.data())
          );
      } catch (error) {
        console.error(error);
      }
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.AreasChips {
  padding-bottom: 20px;
  @media only screen and (max-width: 992px) {
    & {
      padding-bottom: 10px;
    }
  }
}
.grid {
  display: grid;
  grid-gap: 40px;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));

  @media only screen and (max-width: 1400px) {
    & {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-gap: 15px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }
}
</style>

