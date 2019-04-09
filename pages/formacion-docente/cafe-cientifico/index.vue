<template>
  <div>
    <header class="header"
            v-if="ultimoEncuentro">
      <div class="header-overlay"></div>
      <div class="background-banner">
        <img :src="ultimoEncuentro.img"
             alt="img-background">
      </div>
      <div class="header-content"
           @click="click">
        <nuxt-link :to="goto"
                   tag="div"
                   class="container"
                   style="cursor:pointer">
          <h1>{{ultimoEncuentro.name}}</h1>
          <small v-if="ultimoEncuentro.date ">
            <i class="fas fa-calendar-alt"></i>
            {{ultimoEncuentro.date | dateTimestamp}}</small>
          <div class="row">
            <ul class="col-lg-5 no-mobile"
                v-if="ultimoEncuentro.guests && ultimoEncuentro.guests.length > 0">
              <h3>
                <i class="fas fa-users"></i> Invitados
              </h3>
              <li v-for="(guest, index) in ultimoEncuentro.guests"
                  :key="index">{{ guest.name }}</li>
            </ul>
            <div class="col-lg-7">
              <p v-if="ultimoEncuentro.desciption"
                 class="no-mobile auto-break">{{ultimoEncuentro.description | slice(0,700)}}</p>
              <p v-if="ultimoEncuentro.desciption"
                 class="no-desktop auto-break">{{ultimoEncuentro.description | slice(0,300)}}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </header>

    <!-- encuentros portfolio -->
    <section>
      <div v-if="encuentros"
           id="encuentros"
           ref="encuentros"
           class="container">

        <div class="header-row">
          <h2 class="header-title">
            Portafolio de Encuentros
          </h2>
          <div class="actions">
            <a @click="scrollLeft"
               class="arrow">
              <i class="fas fa-arrow-left"></i>
            </a>
            <div class="spacer"></div>
            <a @click="scrollRight"
               class="arrow">
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="vertical-list"
             ref="scroll">
          <EncuentroCard class="card"
                         v-for="encuentro in encuentros"
                         :key="encuentro.id"
                         :encuentro="encuentro" />

        </div>
      </div>
    </section>
    <!--Susciption section-->
    <SuscripcionSection title="Suscríbete a nuestro Café Científico"
                        :description="description"
                        blue="true" />
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import SuscripcionSection from "@/components/sections/SuscripcionSection";
import EncuentroCard from "@/components/cards/EncuentroCard";

export default {
  async asyncData() {
    const description =
      "Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despiertan una entretenida discusión.";

    // load encuentros
    const querySnapshot = await AFirestore.collection(
      "formacion-docente/cafe-cientifico/encuentros"
    )
      .orderBy("date", "desc")
      .limit(6)
      .get();
    const encuentros = querySnapshot.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
    return { description, encuentros };
  },
  methods: {
    scrollLeft() {
      this.$refs.scroll.scrollBy({
        left: -330,
        behavior: "smooth"
      });
    },
    scrollRight() {
      this.$refs.scroll.scrollBy({
        left: 330,
        behavior: "smooth"
      });
    },
    click() {
      if (!this.encuentros[0].postulations)
        alert("Este encuentro aun no esta disponible");
    }
  },
  computed: {
    ultimoEncuentro() {
      if (!this.encuentros) return null;
      return this.encuentros[0];
    },
    goto() {
      if (this.encuentros[0].postulations)
        return {
          name: "formacion-docente-cafe-cientifico-id",
          params: { id: this.encuentros[0].id }
        };
      return {
        name: "formacion-docente-cafe-cientifico"
      };
    }
  },
  components: { SuscripcionSection, EncuentroCard },
  head() {
    return {
      title: "Café Científico",
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
@import "assets/card";

@media (max-width: 767px) {
  .no-mobile {
    display: none;
  }
}
@media (min-width: 768px) {
  .no-desktop {
    display: none;
  }
}

.header {
  object-fit: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: $color-text-primary;
  text-align: center;
  overflow: hidden;
}
.background-banner {
  left: 0;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  position: absolute;
  background-color: $color-primary;

  z-index: -2;
  -webkit-filter: blur(10px);
  filter: blur(10px);
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    opacity: 1;
    position: relative;
    overflow: hidden;
  }
}
.header-overlay {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  background: $color-primary;
  opacity: 0.4;
  z-index: -1;
}
.header-content {
  margin: auto;
  h1 {
    color: $color-text-primary !important;
    font-weight: 400;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}

.header-title {
  font-size: 30px;
  font-weight: 400;
  margin-right: 15px;
}
.header-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  .actions {
    display: flex;
    flex-direction: row;
    .arrow {
      color: $color-primary;
      cursor: pointer;
    }
    .spacer {
      width: 15px;
    }
  }
}
section {
  background-color: $color-background;
}

#encuentros {
  background-color: $color-background;
  width: 100%;
  .vertical-list {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    width: 100%;
    .card {
      min-width: 350px;
      height: 230px;
      margin-right: 15px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
