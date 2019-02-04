<template>
  <div>
    <SectionHeader title="Últimos InnovaTips"
                   goto='formacion-docente-programa-formacion-InnovaTips'
                   name='Ver más InnovaTips' />
    <p class="auto-break header-description"
       v-if="description">{{description}}</p>
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="InnovaTips && InnovaTips.length > 0">
      <InnovaTipCard v-for="InnovaTip in InnovaTips"
                     :key="InnovaTip.id"
                     :InnovaTip="InnovaTip" />
    </div>
    <div v-else>
      <span>No se pudieron cargar los últimos InnovaTips. Visita nuestro Portafolio de InnovaTips</span>
    </div>
  </div>
</template>


<script>
import { AFirestore } from "~/plugins/firebase.js";
import InnovaTipCard from "@/components/cards/InnovaTipCard";
import SectionHeader from "@/components/sections/SectionHeader";

export default {
  props: ["description", "isIndex"],
  components: { InnovaTipCard, SectionHeader },
  data() {
    return { InnovaTips: null, loading: true };
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
        this.InnovaTips = tipsSnap.docs.map(doc =>
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
