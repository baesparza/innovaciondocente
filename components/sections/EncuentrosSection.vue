<template>
  <div>
    <SectionHeader title="Próximos Encuentros"
                   goto='formacion-docente-cafe-cientifico'
                   name='Ver más Encuentros' />
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="encuentros && encuentros.length > 0">
      <div class="aspect-ratio"
           v-for="encuentro in encuentros"
           :key="encuentro.id">
        <EncuentroCard :encuentro="encuentro"
                       class="card" />
      </div>
    </div>
    <div v-else>
      <span>No hay próximos Encuentros. Visita nuestra Pagina de Encuentros</span>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import SectionHeader from "@/components/sections/SectionHeader";
import EncuentroCard from "@/components/cards/EncuentroCard";

export default {
  components: { SectionHeader, EncuentroCard },
  data() {
    return {
      encuentros: null,
      loading: true
    };
  },
  async mounted() {
    try {
      const temp = new Date();
      const startDate = new Date(temp.getFullYear(), temp.getMonth());
      const querySnapshot = await AFirestore.collection(
        "formacion-docente/cafe-cientifico/encuentros"
      )
        .where("date", ">=", startDate)
        .orderBy("date", "desc")
        .get();
      if (!querySnapshot.isEmpty)
        this.encuentros = querySnapshot.docs.map(doc =>
          Object.assign({ id: doc.id, ...doc.data() })
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
.aspect-ratio {
  width: 100%;
  padding-top: 70%;
  position: relative;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  @media only screen and (max-width: 960px) {
    & {
      grid-template-columns: 1fr;
    }
  }
}
</style>
