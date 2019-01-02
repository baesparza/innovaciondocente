<template>
  <div>
    <header>
      <h1>Noticias</h1>
    </header>
    <section class="container">
      <NoticiaSection />
    </section>
  </div>
</template>

<script>
import NoticiaSection from "~/components/sections/NoticiaSection";

export default {
  components: { NoticiaSection },
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
