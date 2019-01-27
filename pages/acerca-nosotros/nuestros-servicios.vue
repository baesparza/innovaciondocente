<template>

  <body ref="body">

    <div class="wrapper "
         ref="wrap"
         v-on:click="presentationMode">
      <div class="wrap">

        <div class="arrow animated bounce"
             ref="arrow"
             v-on:click="arrowFunction"></div>

        <header>
          <Navbar />
        </header>

        <Quote />

        <section class="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>

        <Quote />

        <section>
          <BigCard />
          <BigCard />
          <BigCard />
        </section>

      </div>
    </div>

    <footer >
      <Navbar />
    </footer>

  </body>
</template>

<script>
import Navbar from "@/components/acerca-nosotros/Navbar";
import Card from "@/components/acerca-nosotros/Card";
import Quote from "@/components/acerca-nosotros/Quote";
import BigCard from "@/components/acerca-nosotros/BigCard";

export default {
  layout: "empty",
  components: { Navbar, Card, BigCard, Quote },
  async asyncData() {
    return {};
  },
  mounted() {
    if (process.client) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + window.innerHeight >
          this.$refs.wrap.offsetHeight
        ) {
          this.$refs.body.classList.add("tight");
          this.$refs.arrow.style.display = "none";
        } else {
          this.$refs.body.classList.remove("tight");
          this.$refs.arrow.style.display = "block";
        }
      });
    }
  },
  methods: {
    arrowFunction() {
      window.scrollTo({
        top: this.$refs.wrap.offsetHeight,
        behavior: "smooth"
      });
    },
    presentationMode() {
      if (this.$refs.body.classList.contains("tight"))
        window.scrollTo({
          top: this.$refs.wrap.offsetHeight - window.innerHeight,
          behavior: "smooth"
        });
    }
  },
  head() {
    return {
      title: "Vicerrectorado Académico",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Enmarcado en el Plan Estratégico de Desarrollo Institucional 2011 - 2020, el Vicerrectorado Académico, a través de su Dirección de Innovación, Formación y Evaluación Docente, trabaja e impulsa actividades innovadoras en la docencia y en la planificación docente; define un modelo integral para todas las titulaciones en el programa de innovación académica"
        }
      ]
    };
  }
};
</script>


 <style lang="scss" scoped>
:root {
  --clr1: #ddd;
  --clr2: #fff;
  --clr3: #fff; /*00a5c4*/
  --clr4: #fff /*fba919*/;
  --border-radius: 7px;
  --text-radius: 50em;
}

.wrap {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}

header {
  padding: 50px;
  max-width: 100%;
  border-radius: var(--border-radius);
  background-color: #f1f3f4;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  @media (max-width: 728px) {
    & {
      padding: 10px;
    }
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 50px;
}

body {
  text-rendering: optimizelegibility;
  margin: 0px;
  padding: 0px;
  height: 100%;
}

.wrapper {
  transform-origin: center bottom 0px;
  transition: all 0.5s ease 0s;
  box-shadow: 0px 22px 54px rgba(0, 0, 0, 0.3);
  padding: 25px;
}

body.tight .wrapper {
  transform: translateY(-60px) scale(0.9);
  cursor: pointer;
}

footer {
  width: 90%;
  max-width: 1440px;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 50px;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
.arrow {
  position: fixed;
  bottom: 50px;
  left: 50%;
  cursor: pointer;
  margin-left: -20px;
  width: 20px;
  height: 20px;
  padding: 20px;
  z-index: 99;
  background-color: #fba919;
  border-radius: 50em;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=);
  background-size: 20px 15px;
  background-repeat: no-repeat;
  background-position: center;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
</style>
