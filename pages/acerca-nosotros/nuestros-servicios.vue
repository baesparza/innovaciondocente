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

        <Quote :text="projectDesc" />

        <section class="cards">
          <Card title="Master Class Vitamina I"
                description="Master Class Vitamina I, son espacios en el que varios docentes compartirán sus experiencias y conocimientos sobre metodologías docentes que están aplicando en el aprendizaje de nuestros estudiantes. Conoce nuestra oferta."
                image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2Ftres_nuevos_sellos_PFD_febrero_2019%20(4).png?alt=media&token=03d0e8a0-3365-44fc-886e-dc91f1af1573" />
          <Card title="Nuestro debate estudiantil"
                description="Espacio de diálogo dónde se problematizan temáticas diversas o se abordan temas de actualidad, y se desafía a estudiantes universitarios y de bachillerato a que propongan soluciones creativas, bajo la guía de docentes de la UTPL."
                link="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FCalendario%20Nuestro.png?alt=media&token=acbde1b1-d84a-463b-bb9b-ca8988b6ff23"
                image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2Ftres_nuevos_sellos_PFD_febrero_2019%20(2).png?alt=media&token=72d8d189-6542-49b3-9362-0028c96f6fdb" />
          <Card title="Talleres académicos ¡Potenciate UTPL!"
                link="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FCalendario%20Talleres.png?alt=media&token=e8caf314-9c7e-43de-bc24-d65c1505ff5b"
                description="Talleres prácticos en los que estudiantes de bachillerato a través de un aprendizaje basado en retos, se involucran activamente en problemáticas reales acordes a los perfiles profesionales de las diferentes carreras de la UTPL, bajo la guía de docentes y estudiantes universitarios. Estos espacios se convierten además en un medio para orientar a los participantes en sus intereses vocacionales y futuro profesional."
                image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2Ftres_nuevos_sellos_PFD_febrero_2019%20(3).png?alt=media&token=e39fb1db-ef66-4162-b77a-104c6e587410" />

          <Card title="Docentes Ascenders"
                description="Semanalmente los profesores de Modalidad Presencial, Abierta y Postrados. Presentan su propuesta de Buenas Prácticas Docentes para potenciar el uso creativo de diferentes herramientas dentro y fuera del aula"
                :goto="{name: 'innovacion-docente-proyectos-innovacion', query:{
              type:'proyecto-actual',
            }}"
                image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2Finovacion.png?alt=media&token=42a68471-70c1-4c30-a8f5-9dfd8a0b0bef" />
          <Card title="Programa de Formación"
                description="El programa de Formación agrupa un conjunto de módulos que se dictan por medio de cursos, seminarios o talleres formativos, con el objetivo de potenciar la formación del profesorado de la universidad a través del uso de metodologías y herramientas adecuadas que garanticen la adquisición de las competencias necesarias para el desarrollo de la docencia e investigación de calidad."
                :goto="{name: 'formacion-docente-programa-formacion'}"
                image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2Fformacion.png?alt=media&token=873c00e4-f329-48e7-9e2f-19d21f965f54" />
          <Card title="Cafe Científico"
                description="Cada último jueves del mes en la UTPL, expertos y profesionales en diferentes campos dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad es escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despiertan una entretenida discusión"
                :goto="{name: 'formacion-docente-cafe-cientifico'}"
                image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2Farte_jarro_cafe_cientifico_enero_2018.png?alt=media&token=8a251586-c55e-4407-892d-b8a03e0d3405" />
        </section>

        <section>
          <BigCard title="Laboratorio de Innovacion e investigacion Docente"
                   description="Un espacio de la UTPL orientado al desarrollo de la innovación e investigación educativa a nivel local, nacional e internacional. Busca canalizar y potenciar todas las iniciativas de la comunidad universitaria que potencien el aprendizaje y la enseñanza con el uso de las nuevas tecnologías."
                   image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/icons%2Fthumbnail_sello_laboratorio_investigacion_innovacion_feb_2018.png?alt=media&token=81b8fb6b-5f9e-4338-a6cc-e20ae8783e9e" />
          <BigCard title="Página Web del Proyecto Ascendere"
                   description="Compendio de las iniciativas de innovación y formación docente de la utpl y recursos para la enseñanzas de los mejores observatorios educativos"
                   :goto="{name: 'index'}"
                   image="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FUntitled-1.png?alt=media&token=e3423830-67df-4aab-9a4a-17717e18f9c7" />
        </section>

      </div>
    </div>

    <footer>
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
    return {
      projectDesc: `ASCENDERE evoca la consigna “Recuerda Superarte Siempre”, para reafirmar el compromiso de la UTPL de contar con docentes que inspiran a sus alumnos, innovadores, vinculados con la práctica de su profesión y que se encuentren a la vanguardia de la disciplina.
      
      El Proyecto Ascendere nació con el propósito de trabajar y agrupar aquellas iniciativas que potencien las competencias de los docentes a través de la innovación académica e investigación sobre las nuevas metodologías de educación y uso de las TIC. `
    };
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
  --clr3: #00a5c4; /*00a5c4*/
  --clr4: #fba919 /*fba919*/;
  --border-radius: 7px;
  --text-radius: 50em;
}

.wrap {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}

header {
  padding: 50px 90px;
  max-width: 100%;
  border-radius: var(--border-radius);
  background-color: #00a5c4;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  @media (max-width: 450px) {
    & {
      padding: 10px;
    }
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 50px;
  @media (max-width: 820px) {
    & {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
}

body {
  text-rendering: optimizelegibility;
  margin: 0px;
  padding: 0px;
  height: 100%;
  background-color: #fba919;
}

.wrapper {
  transform-origin: center bottom 0px;
  transition: all 0.5s ease 0s;
  box-shadow: 0px 22px 54px rgba(0, 0, 0, 0.3);
  padding: 25px;
  padding-bottom: 75px;
  background-color: white;
  @media (max-width: 450px) {
    & {
      padding: 15px !important;
    }
  }
}

body.tight .wrapper {
  transform: translateY(-60px) scale(0.9);
  cursor: pointer;
}

footer {
  width: 90%;
  max-width: 1200px;
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
section {
  display: block;
}
</style>
