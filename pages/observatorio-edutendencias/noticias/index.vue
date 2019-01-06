<template>
  <div>
    <header>
      <h1>Noticias</h1>
    </header>
    <section class="container">
      <NoticiasSection />
    </section>
  </div>
</template>

<script>
import NoticiasSection from "~/components/sections/NoticiasSection";

export default {
  components: { NoticiasSection },
  head() {
    return {
      title: "Noticias"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
</style>
