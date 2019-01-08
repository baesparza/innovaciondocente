<template>
  <section>
    <div class="container">
      <SectionHeader title="Proyectos Actuales"
                     goto="innovacion-docente-proyectos-innovacion"
                     name="Atrevete" />
      <div class="row">
        <div class=" col-md-5 flex-content">
          <span>Ascendere crea y motiva a las nuevas generaciones a poner en práctica, explorar
            nuevas areas con el fin de crear cosas simples pero asombrosas, tienes dudas pues te
            invitamos a explorar cada uno de los proyectos. <b>QUIENES SOMOS</b> A través de
            iniciativas
            como Encuentro Café Científico, Jornadas de Reflexión Académica, el Plan de Formación
            Docente , entre otras, busca instaurar un sello de calidad para todos los programas
            formativos de la Universidad Técnica Particular de Loja.
          </span>
        </div>
        <div class="col-md-7">
          <div v-if="loading">
            <span>Cargando...</span>
          </div>
          <div class="cards-container"
               v-else-if="proyectos && proyectos.length > 0">
            <ProjectCard v-for="proyecto in proyectos"
                         :key="proyecto.id"
                         :proyecto="proyecto"
                         class="ProjectCard" />
          </div>
          <div v-else>
            <span>No se encontraron Proyectos para mostrar, vuelve a intentarlo.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeader from "@/components/sections/SectionHeader";
export default {
  components: { ProjectCard, SectionHeader },
  data() {
    return {
      proyectos: null,
      loading: true
    };
  },
  async mounted() {
    try {
      // query data
      const porjectsSnap = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .orderBy("name")
        .where("type", "==", "proyecto-actual")
        .limit(2)
        .get();

      if (!porjectsSnap.empty)
        this.proyectos = porjectsSnap.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        );
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

b {
  font-weight: 500;
}

.cards-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  .ProjectCard {
    flex-grow: 1;
    flex-basis: 0;
    margin: 10px;
    &:nth-child(even) {
      align-self: flex-end;
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      flex-direction: column;
    }
    .ProjectCard {
      max-width: 80%;
      flex-basis: auto;
    }
  }
  @media only screen and (max-width: 576px) {
    .ProjectCard {
      align-self: center !important;
      max-width: 100%;
    }
  }
}

.flex-content {
  display: flex;
  max-height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>
