<template>
  <section class="container">
    <!-- TODO: move to pages this component -->
    <div class="grid">
      <ProjectCard :proyecto="proyecto"
                   v-for="proyecto in proyectos"
                   :key="proyecto.id" />
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/cards/ProjectCard";
export default {
  props: ["proyectos"],
  components: { ProjectCard }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 40px;
  grid-auto-rows: 450px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1400px) {
    & {
      grid-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-gap: 10px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-auto-rows: auto;
    }
  }
}
</style>

