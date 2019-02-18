<template>
  <div class="scroll-container">
    <div class="row">
      <div class="col-lg-3">
        <div class="scroll-bar">
          <div class="scroll-bar-container">
            <h2 class="scroll-bar-container-title">ASCENDERE</h2>
            <ul>
              <li class="scroll-bar-container-tile"
                  v-for="(section,id) in sections"
                  :key="id">
                <nuxt-link v-if="section.goto"
                           tag='a'
                           :class="{'active': section.active}"
                           :to="{name: section.goto}">
                  {{section.name}} <i class="fas fa-angle-right"></i>
                </nuxt-link>
                <a v-else-if="section.link"
                   :href="section.link"
                   target="_blank"
                   rel="noopener noreferrer">
                  {{section.name}} <i class="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- data -->
      <div class="col-lg-9 ">
        <div class="content">
          <section class="container"
                   id="cursos">
            <CursosSection :isIndex="true" />
          </section>
          <div class="spacer"></div>
          <section class="container"
                   id="encuentros">
            <EncuentrosSection />
          </section>
          <div class="spacer"></div>
          <section class="container"
                   id="InnovaTips">
            <InnovaTipsSection :isIndex="true" />
          </section>
          <div class="spacer"></div>
          <section class="container"
                   id="noticias">
            <NoticiasSection :isIndex="true" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CursosSection from "@/components/sections/CursosSection";
import InnovaTipsSection from "@/components/sections/InnovaTipsSection";
import EncuentrosSection from "@/components/sections/EncuentrosSection";
import NoticiasSection from "~/components/sections/NoticiasSection";

export default {
  components: {
    CursosSection,
    InnovaTipsSection,
    EncuentrosSection,
    NoticiasSection
  },
  data() {
    return {
      sections: {
        cursos: {
          name: "Cursos",
          active: false,
          goto: "formacion-docente-programa-formacion-cursos"
        },
        encuentros: {
          name: "Encuentros",
          active: false,
          goto: "formacion-docente-cafe-cientifico"
        },
        vitaminaI: {
          name: "Vitamina i",
          link:
            "https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FResumen%20del%20programa%20de%20formacioe%CC%8Cn%202019%20Microtalleres%202019.pdf?alt=media&token=e5ce6ae7-d0b4-4c6f-ad8a-23d88a6c37c9"
        },
        InnovaTips: {
          name: "InnovaTips",
          active: false,
          goto: "formacion-docente-programa-formacion-InnovaTips"
        },
        noticias: {
          name: "Noticias",
          active: false,
          goto: "observatorio-edutendencias-noticias"
        }
      }
    };
  },
  methods: {
    handleScroll(event) {
      const spyNot = document.querySelectorAll("#noticias");
      const spyCur = document.querySelectorAll("#cursos");
      const spyTip = document.querySelectorAll("#InnovaTips");
      const spyEnc = document.querySelectorAll("#encuentros");
      spyNot.forEach(el => {
        this.sections.noticias.active = this.validator(el);
      });
      spyCur.forEach(el => {
        this.sections.cursos.active = this.validator(el);
      });
      spyTip.forEach(el => {
        this.sections.InnovaTips.active = this.validator(el);
      });
      spyEnc.forEach(el => {
        this.sections.encuentros.active = this.validator(el);
      });
    },
    validator(el) {
      const elTop = el.getBoundingClientRect().top - 100;
      const elBottom = el.getBoundingClientRect().bottom - 100;
      return !(elTop >= 0 || elBottom <= 0);
    }
  },
  created() {
    if (process.browser) window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    if (process.browser)
      window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.scroll-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
div[class^="col-"] {
  padding: 0;
}
.scroll-bar {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: $color-text-primary;
  z-index: 100;
  background-image: linear-gradient(to bottom, #0d426b, #0d426b, #ff0266);
  border-bottom-right-radius: 50px;
  &-container {
    padding: 80px 0;
    position: sticky;
    top: 0;
    left: 0;
    &-title {
      padding-bottom: 20px;
      font-size: 1.7em;
      font-weight: 500;
      letter-spacing: 5px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    cursor: pointer;
    padding: 15px 0 10px 0;
  }
  a {
    font-size: 1.5em;
    color: $color-text-primary;
    position: relative;
    &::before {
      background: $color-secondary none repeat scroll 0 0;
      bottom: -2px;
      height: 3px;
      content: "";
      left: 0;
      position: absolute;
      width: 0%;
      transition: 0.5s;
    }
  }
  .active {
    color: $color-text-primary;
    font-weight: 600;
    text-decoration: none;
    &::before {
      width: 100%;
    }
  }
}
section {
  padding: 0;
  // height: 80vh;
}

.spacer {
  height: 80px;
}

.content {
  padding: 80px 80px;
}

@media only screen and (max-width: 992px) {
  .content {
    padding: 25px 15px;
  }
  .spacer {
    height: 20px;
  }
  .scroll-bar {
    display: none;
  }
}
</style>
