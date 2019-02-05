<template>
  <div>
    <header>
      <h1>{{getTitle}}</h1>
    </header>
    <section class="container">
      <ProjectsCanvasSection v-if="canShowCanvas" />
      <ProjectsSection :projectType="projectType"
                       :projectArea="projectArea" />
    </section>
  </div>
</template>

<script>
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectsCanvasSection from "@/components/sections/ProjectsCanvasSection";

export default {
  components: { ProjectsSection, ProjectsCanvasSection },
  watchQuery: ["type", "area"],
  watch: {
    projectType() {
      this.init();
    }
  },
  data() {
    const query = this.$route.query;
    return {
      projectType: query.type ? query.type : "proyecto-actual",
      projectArea: query.area ? query.area : null,
      showCanvas: null,
      showCanvasControler: null
    };
  },
  computed: {
    canShowCanvas() {
      return (
        window.innerWidth > 800 &&
        this.projectType === "proyecto-actual" &&
        this.projectArea === null
      );
    },
    getTitle() {
      if (this.projectType && this.projectType === "buena-practica")
        return "Buenas Prácticas";
      else if (this.projectType && this.projectType === "proyecto-actual")
        return "Proyectos Actuales";
      return "Proyectos Innovación";
    }
  },
  watchQuery: ["type", "area"]
};
</script>


<style lang="scss" scoped>
@import "assets/header";
</style>

