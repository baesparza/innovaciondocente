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
                <a :href="'#'.id"
                   :class="{'active': section.active}">{{section.name}} <i class="fas fa-angle-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- data -->
      <div class="col-md-8">

        <section id="noticias">
          <h3 class="section-name">
            Ultimas Noticias
          </h3>
          <div class="card-container">

            <div class="card">
              <h4 class="card-title">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid possimus.
              </h4>
            </div>
            <div class="card">
              ashfsfasd
            </div>
            <div class="card">
              ashfsfasd
            </div>
            <div class="card">
              ashfsfasd
            </div>
          </div>
        </section>
        <section id="cursos">
          <h3 class="section-name">
            Proximos Cursos
          </h3>
          <div class="card-container">

            <div class="card">
              <h4 class="card-title">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid possimus.
              </h4>
              
            </div>
            <div class="card">
              ashfsfasd
            </div>
            <div class="card">
              ashfsfasd
            </div>
            <div class="card">
              ashfsfasd
            </div>
          </div>
        </section>
        <section id="innovaTips">
          <h3 class="section-name">
            Ultimos Tips
          </h3>
          <div class="card-container">

            <div class="card">
              <h4 class="card-title">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid possimus.
              </h4>
            </div>
            <div class="card">
              ashfsfasd
            </div>
            <div class="card">
              ashfsfasd
            </div>
            <div class="card">
              ashfsfasd
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

export default {
  data() {
    let noticia = {
      type: "Noticia",
      title: null,
      description: null,
      img: null,
      key: {
        name: "observatorio-edutendencias-noticias-id",
        id: null
      }
    };
    let curso = {
      type: "Curso",
      title: null,
      description: null,
      img: null,
      key: {
        name: "formacion-docente-programa-formacion-id",
        id: null
      }
    };
    let tips = {
      type: "Tips de Expertos",
      title: null,
      description: null,
      img: null,
      key: {
        name: "https://www.utpl.edu.ec",
        key: null
      }
    };
    return {
      noticia,
      curso,
      tips,
      sections: {
        noticias: {
          name: "Noticias",
          active: false
        },
        cursos: {
          name: "Cursos",
          active: false
        },
        innovaTips: {
          name: "InnovaTips",
          active: false
        }
      }
    };
  },
  async mounted() {
    let noticiasSnap = await AFirestore.collection(
      "observatorio/edutendencias/noticias"
    )
      .orderBy("created", "desc")
      .limit(1)
      .get();
    noticiasSnap.docs.map(doc => {
      let noticia = { id: doc.id, ...doc.data() };
      this.noticia.title = noticia.name;
      this.noticia.description = noticia.description;
      this.noticia.img = noticia.img;
      this.noticia.key.id = noticia.id;
      return;
    });
    let cursosSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .orderBy("date", "desc")
      .limit(1)
      .get();
    cursosSnap.docs.map(doc => {
      let curso = { id: doc.id, ...doc.data() };
      this.curso.title = curso.name;
      this.curso.description = curso.description;
      this.curso.img = curso.img;
      this.curso.key.id = curso.id;
      return;
    });
    const tipsSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    )
      .orderBy("added", "desc")
      .limit(1)
      .get();
    tipsSnap.docs.map(doc => {
      let tip = doc.data();
      this.tips.title = tip.name;
      this.tips.description = tip.description;
      this.tips.key = {
        name: `https://youtu.be/${doc.id}`
      };
      this.tips.img = `https://i.ytimg.com/vi/${doc.id}/mqdefault.jpg`;
    });
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
  padding: 20px;
}
.card-container {
  display: grid;
  grid-auto-rows: 400px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
}
</style>
