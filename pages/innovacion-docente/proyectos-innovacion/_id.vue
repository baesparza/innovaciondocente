<template>
  <div>
    <!-- Title -->
    <header>
      <h1>
        {{proyecto.name}}
      </h1>
    </header>

    <section class="container">
      <!-- Img - banner -->
      <div v-if="proyecto.img">
        <div class="banner">
          <div class="banner-img"
               :style="getBannerPath"></div>
        </div>
        <div class="spacer"></div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <!-- proyect type -->
          <h2>{{getProyectoType}}</h2>
          <!-- modality -->
          <div>
            <h3>
              Modalidad {{proyecto.modality}}
            </h3>
            <div class="spacer"></div>
          </div>
          <!-- Coordinator -->
          <div>
            <h4>Coordinador de la propuesta</h4>
            <span class="data-field coordinator">{{coordinator}}</span>
            <div class="spacer"></div>
          </div>
          <!-- participants -->
          <div v-if="proyecto.participants.length > 0">
            <h4>Docentes que participan en la propuesta </h4>
            <ul>
              <li v-for="(participant,i) in proyecto.participants"
                  :key="i">{{participant.name}}</li>
            </ul>
          </div>
          <!-- areas -->
          <div v-if="proyecto.area.administrativa ||proyecto.area.biologica ||proyecto.area.sociohumanistica || proyecto.area.tecnica"
               class="areas">
            <h4>Areas</h4>
            <AreasChips class="data-field"
                        :area='proyecto.area'
                        :queryType='proyecto.type' />
            <div class="spacer"></div>
          </div>
          <!-- carreers -->
          <div v-if="proyecto.participants.length > 0">
            <h4>Titulaciones Participantes</h4>
            <ul>
              <li v-for="(carreer, i) in getProjectCarreers"
                  :key="i">{{carreer}}</li>
            </ul>
            <div class="spacer"></div>
          </div>
          <!-- Period -->
          <div v-if="proyecto.periods.length > 0">
            <h4>Período académico de ejecución</h4>
            <span class="data-field">
              {{getProjectPeriods}}
            </span>
            <div class="spacer"></div>
          </div>
          <!-- strategicLine -->
          <div v-if="proyecto.strategicLine">
            <h4>Línea estratégica que se desarrollará en la propuesta</h4>
            <span class="data-field">
              {{proyecto.strategicLine}}
            </span>
            <div class="spacer"></div>
          </div>
          <!-- subject -->
          <div v-if="proyecto.subject">
            <h4>Asignatura </h4>
            <span class="data-field">
              {{proyecto.subject}}
            </span>
            <div class="spacer"></div>
          </div>
          <!-- Downloadable -->
          <div v-if="proyecto.documents.length > 0">
            <h4>Descargables</h4>
            <ul>
              <li v-for="(document, i) in proyecto.documents"
                  :key="i"><a :href="document.url"
                   target="_blank"
                   rel="noopener noreferrer">Descargable {{i+1}}</a></li>
            </ul>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <!-- left side -->
        <!--  -->
        <!--  -->
        <div class="col-md-8">
          <!-- pdf -->
          <div class="resp-iframe">
            <iframe frameborder="1"
                    scrolling="yes"
                    :src="getPdf"
                    v-if="getPdf"></iframe>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col-md-10">
          <!-- Infografia -->
          <ImageModal v-if="proyecto.infografic"
                      :img='proyecto.infografic' />

          <!-- video -->
          <VideoModal :videoID='proyecto.videoID'
                      maxRes="true"
                      v-if="proyecto.videoID" />
        </div>
        <div class="col"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import AreasChips from "@/components/other/AreasChips";
import ImageModal from "@/components/utils/ImageModal";
import VideoModal from "@/components/utils/VideoModal";
export default {
  components: { AreasChips, ImageModal, VideoModal },
  async asyncData({ params }) {
    let proyecto = null;
    try {
      const docSnap = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .doc(params.id)
        .get();
      if (docSnap.exists) {
        proyecto = { ...docSnap.data(), id: docSnap.id };
      }
    } catch (error) {}
    return { proyecto };
  },
  computed: {
    getProyectoType() {
      return this.proyecto.proyectType == "proyecto-actual"
        ? "Proyecto Actual"
        : "Buena Práctica";
    },
    getPdf() {
      for (let i = 0; i < this.proyecto.documents.length; i++) {
        let el = this.proyecto.documents[i];
        if (el.url.includes(".pdf")) return el.url;
      }
      return null;
    },
    coordinator() {
      return this.proyecto.coordinator.toLowerCase();
    },
    getBannerPath() {
      return "background-image: url(" + this.proyecto.img + ");";
    },
    getProjectPeriods() {
      let res = "";
      for (let i = 0; i < this.proyecto.periods.length; i++) {
        res += this.proyecto.periods[i].name;
        if (i < this.proyecto.periods.length - 1) {
          res += " / ";
        }
      }
      return res;
    },
    getProjectCarreers() {
      let carreers = [];
      for (let i = 0; i < this.proyecto.participants.length; i++) {
        carreers.push(this.proyecto.participants[i].department);
      }

      return carreers.filter(function(item, pos) {
        return carreers.indexOf(item) == pos;
      });
    }
  },
  head() {
    return {
      title: this.proyecto ? this.proyecto.name : "No se encontro el proyecto"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/header";
$space-elements: 20px;
.resp-iframe {
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  @media (min-width: 768px) {
    & {
      height: 100%;
    }
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.banner {
  height: 40vmin;
  width: 100%;
  overflow: hidden;
  &-img {
    background-image: url("~/static/default.png");
    height: 100%;
    width: 100%;
    background-color: $color-primary;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
}

h1 {
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 15px;
}

.spacer {
  margin-bottom: $space-elements !important;
  margin-top: $space-elements !important;
}
ul {
  margin-bottom: $space-elements;
  padding-left: 15px;
  li {
    list-style: none;
  }
}
h2 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: $space-elements;
  color: $color-primary;
}
h3 {
  font-size: 23px;
  font-weight: 500;
}
.data-field {
  margin-left: 15px;
}
.coordinator {
  text-transform: capitalize;
}
</style>

