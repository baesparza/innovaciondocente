<template>
  <div class="scroll-container">
    <div class="row">
      <div class="col-md-4">
        <div class="scroll-bar">
          <div class="scroll-bar-container">
            <h2 class="scroll-bar-container-title">ASCENDERE IN</h2>
            <ul>
              <li v-for="(section,id) in sections"
                  :key="id">
                <a :href="'#'+id"
                   :class="{'active': section.active}">{{section.name}} <i class="fas fa-angle-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- data -->
      <div class="col-md-8">

        <section class="container"
                 id="cursos">
          <Cursos :isIndex="true" />
        </section>
        <section class="container"
                 id="innovaTips">
          <Videos :isIndex="true" />
        </section>
        <section class="container"
                 id="noticias">
          <NoticiaSection :isIndex="true" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Cursos from "@/components/formacion-docente/Cursos";
import Videos from "@/components/formacion-docente/Videos";
import NoticiaSection from "~/components/sections/NoticiaSection";

export default {
  components: { Cursos, Videos, NoticiaSection },
  data() {
    return {
      sections: {
        cursos: {
          name: "Cursos",
          active: false
        },
        innovaTips: {
          name: "InnovaTips",
          active: false
        },
        noticias: {
          name: "Noticias",
          active: false
        }
      }
    };
  },
  methods: {
    handleScroll(event) {
      const spyNot = document.querySelectorAll("#noticias");
      const spyCur = document.querySelectorAll("#cursos");
      const spyTip = document.querySelectorAll("#innovaTips");
      spyNot.forEach(el => {
        this.sections.noticias.active = this.validator(el);
      });
      spyCur.forEach(el => {
        this.sections.cursos.active = this.validator(el);
      });
      spyTip.forEach(el => {
        this.sections.innovaTips.active = this.validator(el);
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
div[class^="col-md-"] {
  padding: 0;
}
.scroll-bar {
  width: 100%;
  height: 100%;
  color: $color-text-primary;
  z-index: 100;
  background-image: linear-gradient(
    143deg,
    #2980b9 0,
    #2471a3 8%,
    #1f618d 18%,
    #044a80 100%
  );
  &-container {
    padding: 80px 40px 60px 20%;
    position: sticky;
    top: 0;
    left: 0;
    &-title {
      padding-bottom: 20px;
      font-size: 1.7em;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    cursor: pointer;
  }
  a {
    font-size: 1.5em;
    color: $color-text-primary;
  }
  .active {
    color: $color-secondary;
    font-weight: 700;
    text-decoration: none;
    cursor: default;
  }
}
section {
  padding-top: 25px;
  padding-bottom: 15px;
}
</style>
