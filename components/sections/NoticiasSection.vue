<template>
  <div>
    <SectionHeader v-if="isIndex"
                   title="Últimas Noticias"
                   goto='observatorio-edutendencias-noticias'
                   name='Ver más Noticas' />
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="noticias && noticias.length > 0">
      <NoticiaCard :noticia="noticia"
                   v-for="(noticia, i ) in noticias"
                   :key="i" />

    </div>
    <div v-else>
      <span>No se pudieron cargar las últimas Noticias. Prueba visitando nuestra pagina de Noticias</span>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import NoticiaCard from "~/components/cards/NoticiaCard";
import SectionHeader from "@/components/sections/SectionHeader";

export default {
  props: ["isIndex"],
  components: { NoticiaCard, SectionHeader },
  data() {
    return { noticias: null, loading: true };
  },
  async mounted() {
    try {
      const query = AFirestore.collection(
        "observatorio/edutendencias/noticias"
      ).orderBy("created", "desc");
      const noticiaSnap = this.isIndex
        ? await query.limit(4).get()
        : await query.get();
      if (noticiaSnap.empty) throw "No data found";
      else
        this.noticias = noticiaSnap.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        );
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
};
</script>
 
 <style lang="scss" scoped>
.grid {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  @media only screen and (max-width: 768px) {
    & {
      grid-gap: 15px;
    }
  }
}
</style>
 
