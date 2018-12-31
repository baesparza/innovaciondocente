<template>
  <div>
    <header>
      <h1>Convocatoria de Proyectos de Innovación Docente</h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-3">

          <!-- sidebar -->
          <section class="sticky">
            <h3>Convocatorias Anteriores</h3>
            <div v-for="(convocatoria, key) in convocatorias"
                 v-if="convocatoria"
                 :key="key">
              <a class="btn btn-outline-dark btn-large"
                 :href="convocatoria.url"
                 target="_blank">
                <i class="fas fa-file-pdf"></i>
                {{convocatoria.fecha}}
              </a>
            </div>
          </section>
        </div>

        <!-- Main Content -->
        <section class="col-md-9">
          <div class="alert alert-success"
               v-if="canPostulate">
            <h3 class="alert-heading">
              Plazo para presentación de Propuestas
            </h3>
            <p>
              <i class="fas fa-calendar-alt"></i>
              El plazo para presentar las propuestas es hasta el
              <b>
                {{ultimaConvocatoria.postulaciones.fecha | date}}.
              </b>
              La postulación debe realizarze a través del siguiente
              <a :href="ultimaConvocatoria.postulaciones.url"
                 class="alert-link">
                link.
              </a>
            </p>
            <p>
              {{description}}
            </p>
            <!-- <div class="vid-container">
            <iframe :src="ultimaConvocatoria.vidUrl"
                    frameborder="0"
                    title="video"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
          </div> -->
          </div>
          <div class="embed-container">
            <embed name="plugin"
                   id="plugin"
                   :src="ultimaConvocatoria.url"
                   type="application/pdf"
                   internalinstanceid="423">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias.json"
    );
    const description =
      "Esta convocatoria es una invitación a todos los docentes de la Universidad para que participen e implementen nuevas estrategias de enseñanza aprendizaje, potenciando el uso creativo de diferentes herramientas dentro y fuera del aula, implicando a los estudiantes activamente en su proceso de aprendizaje, planificando, desarrollando y evaluando las competencias necesarias para contribuir con el perfil de egreso de la titulación.";

    let convocatorias = [];
    for (const key in data) {
      convocatorias.push({ key: key, ...data[key] });
    }
    convocatorias.sort(function(a, b) {
      return ("" + b.key).localeCompare(a.key);
    });

    // validate date
    let ultimaConvocatoria = convocatorias[0];
    let fecha_postulacion = new Date(ultimaConvocatoria.postulaciones.fecha);
    let canPostulate = fecha_postulacion.getTime() >= new Date().getTime();
    return {
      data,
      description,
      convocatorias,
      ultimaConvocatoria,
      canPostulate
    };
  },
  head() {
    return {
      title: "Convocatorias",
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
@import "assets/header";
@import "assets/variables";
@import "assets/alert";
.btn {
  font-size: 12px;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
  }
}

.vid-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.embed-container {
  position: relative;
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
