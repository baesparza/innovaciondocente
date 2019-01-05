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
                <a :href="'#'+id"
                   :class="{'active': section.active}">{{section.name}} <i class="fas fa-angle-right"></i></a>
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
                   id="innovaTics">
            <InnovaTicsSection :isIndex="true" />
          </section>
          <div class="spacer"></div>
          <section class="container"
                   id="noticias">
            <NoticiaSection :isIndex="true" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CursosSection from "@/components/sections/CursosSection";
import InnovaTicsSection from "@/components/sections/InnovaTicsSection";
import NoticiaSection from "~/components/sections/NoticiaSection";

export default {
  components: { CursosSection, InnovaTicsSection, NoticiaSection },
  data() {
    return {
      sections: {
        cursos: {
          name: "Cursos",
          active: false
        },
        innovaTics: {
          name: "InnovaTics",
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
      const spyTip = document.querySelectorAll("#innovaTics");
      spyNot.forEach(el => {
        this.sections.noticias.active = this.validator(el);
      });
      spyCur.forEach(el => {
        this.sections.cursos.active = this.validator(el);
      });
      spyTip.forEach(el => {
        this.sections.innovaTics.active = this.validator(el);
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
  padding: 80px 20px;
}

@media only screen and (max-width: 992px) {
  .content {
    padding: 15px;
  }
  .spacer {
    height: 20px;
  }
  .scroll-bar{
    display: none;
  }
}
</style>
