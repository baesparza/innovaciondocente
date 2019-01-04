<template>
  <div>
    <header class="parallax"
            :style="'background-image: url('+banner+');'">
      <div class="header-content">
        <h1>
          {{title}}
        </h1>
        <p class="container auto-break">{{description}}</p>
      </div>
    </header>
    <div class="container">

      <!--Cursos section-->
      <section>
        <Cursos :programFormacionDocente="programFormacionDocente"
                :description="description"></Cursos>
      </section>

      <!--Videos section-->
      <section>
        <Videos :description="tips.description"></Videos>
      </section>

      <!--PDF sections-->
      <div class="row">
        <section class="col-md-6"
                 v-if="validateFormacion">
          <SectionHeader title="Válida tu formación Docente - Pedagógica" />
          <p>
            Intructivo para validar tus cursos del Programa de Formación Docente - Pedagógica en
            el Sistema de Información Académica Científica (SIAC).
          </p>
          <a class="btn btn-outline-primary btn-large"
             target="_blank"
             rel="noopener"
             :href="validateFormacion">
            <i class="fas fa-file-pdf"></i>
            Descargar intructivo</a>
        </section>
        <section class="col-md-6">
          <SectionHeader title="Cursos Específicos"
                         goto='formacion-docente-programa-formacion-cursos-especificos'
                         name='Ver Más' />
          <p>
            Pasos a seguir para presentar solicitudes en la realización de Cursos Específicos y
            Emisión de certificados.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import SectionHeader from "@/components/sections/SectionHeader";

import Cursos from "@/components/formacion-docente/Cursos";
import Videos from "@/components/formacion-docente/Videos";
export default {
  async asyncData() {
    const programaFormacionSnap = await AFirestore.collection(
      "formacion-docente"
    )
      .doc("programa-formacion")
      .get();
    if (programaFormacionSnap.exists)
      return { ...programaFormacionSnap.data() };
  },
  components: { Cursos, Videos, SectionHeader },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
header {
  height: 100vh;
  width: 100%;
  display: flex;
}

section {
  padding-top: 25px;
  padding-bottom: 20px;
}

.header-content {
  text-align: center;
  h1 {
    color: $color-text-primary;
    font-weight: 400;
  }
  margin: auto;
  p {
    text-align: center;
    color: $color-text-primary;
  }
}
@media screen and (min-width: 768px) {
  .header-content {
    text-align: center;
    h1 {
      font-size: 300%;
      letter-spacing: 0.3em;
    }
  }
}
</style>
