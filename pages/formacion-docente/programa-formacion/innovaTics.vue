<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <div class="grid">
      <InnovaTicCard v-for="innovaTic in innovaTics"
                     :key="innovaTic.id"
                     :innovaTic="innovaTic" />
    </div>
    <div class="container">
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import InnovaTicCard from "@/components/cards/InnovaTicCard";

export default {
  async asyncData({ params }) {
    let title = "Tips de Expertos";
    return { title };
  },
  data() {
    return { innovaTics: null };
  },
  async mounted() {
    const tipsSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    )
      .orderBy("added", "desc")
      .get();
    this.innovaTics = tipsSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: this.title
    };
  },
  components: { InnovaTicCard }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
.grid {
  padding: 20px;
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  // grid-auto-rows: 140px;
  grid-auto-rows: auto;
  @media only screen and (max-width: 1400px) {
    & {
      grid-gap: 15px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      padding: 10px;
      grid-gap: 10px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
