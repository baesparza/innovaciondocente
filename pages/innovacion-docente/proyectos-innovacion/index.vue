<template>
  <div>
    <header>
      <h1>{{getTitle}}</h1>
    </header>
    <section class="container">
      <div v-if="showCanvasControler"
           class="canvas-controler">
        <div>
          <span>Vista</span>
        </div>
        <div @click="activateCanvas"
             class="view-btn"
             :class="{ 'active': showCanvas}">
          <i class="fas fa-dot-circle"></i>
        </div>
        <div @click="activateGrid"
             class="view-btn"
             :class="{ 'active': !showCanvas}">
          <i class="fas fa-th"></i>
        </div>
      </div>
      <ProjectsCanvasSection v-if="showCanvas" />
      <ProjectsSection v-else
                       :projectType="projectType"
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
      projectType: query.type,
      projectArea: query.area,
      showCanvas: null,
      showCanvasControler: null
    };
  },
  methods: {
    init() {
      this.canShowCanvas();
      if (this.showCanvasControler)
        window.addEventListener("resize", () => this.canShowCanvas());
    },
    canShowCanvas() {
      if (window.innerWidth > 800 && this.projectType === "proyecto-actual") {
        this.showCanvasControler = true;
        this.showCanvas = true;
      } else {
        this.showCanvas = false;
        this.showCanvasControler = false;
      }
    },
    activateGrid() {
      if (this.showCanvas) {
        this.showCanvas = false;
      }
    },
    activateCanvas() {
      if (!this.showCanvas) {
        this.showCanvas = true;
      }
    }
  },
  computed: {
    getTitle() {
      if (this.projectType && this.projectType === "buena-practica")
        return "Buenas Prácticas";
      else if (this.projectType && this.projectType === "proyecto-actual")
        return "Proyectos Actuales";
      return "Proyectos Innovación";
    }
  },
  mounted() {
    this.init();
  }
};
</script>


<style lang="scss" scoped>
@import "assets/header";
@import "assets/variables";

.canvas-controler {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  .view-btn {
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
  }
}
.active {
  color: $color-primary;
}
</style>

