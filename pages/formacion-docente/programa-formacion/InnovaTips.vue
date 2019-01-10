<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <div class="grid">
      <InnovaTipCard v-for="InnovaTip in InnovaTips"
                     :key="InnovaTip.id"
                     :InnovaTip="InnovaTip" />
    </div>
    <div class="container">
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import InnovaTipCard from "@/components/cards/InnovaTipCard";

export default {
  async asyncData({ params }) {
    let title = "InnovaTips";
    return { title };
  },
  data() {
    return { InnovaTips: null };
  },
  async mounted() {
    const tipsSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    )
      .orderBy("added", "desc")
      .get();
    this.InnovaTips = tipsSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: this.title
    };
  },
  components: { InnovaTipCard }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
.grid {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: auto;
  @media only screen and (max-width: 1400px) {
    & {
      grid-gap: 15px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-gap: 10px;
      // grid-auto-rows: 90px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
