<template>
  <div>
    <SectionHeader title="Últimos InnovaTics"
                   goto='formacion-docente-programa-formacion-innovaTics'
                   name='Ver mas InnovaTics' />
    <p class="auto-break header-description"
       v-if="description">{{description}}</p>
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="innovaTics && innovaTics.length > 0">
      <InnovaTicCard v-for="innovaTic in innovaTics"
                     :key="innovaTic.id"
                     :innovaTic="innovaTic" />
    </div>
    <div v-else>
      <span>No se pudieron cargar los últimos InnovaTics. Visita nuestro Portafolio de InnovaTics</span>
    </div>
  </div>
</template>


<script>
import { AFirestore } from "~/plugins/firebase.js";
import InnovaTicCard from "@/components/cards/InnovaTicCard";
import SectionHeader from "@/components/sections/SectionHeader";

export default {
  props: ["description", "isIndex"],
  components: { InnovaTicCard, SectionHeader },
  data() {
    return { innovaTics: null, loading: true };
  },
  async mounted() {
    try {
      // use ternary operator
      const query = AFirestore.collection(
        "formacion-docente/programa-formacion/tips"
      ).orderBy("added", "desc");
      const tipsSnap = this.isIndex
        ? await query.limit(4).get()
        : await query.limit(6).get();
      if (tipsSnap.empty) throw "No data found";
      else
        this.innovaTics = tipsSnap.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        );
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-gap: 15px;
    }
  }
}
</style>
