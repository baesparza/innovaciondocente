<template>
  <div>
    <SectionHeader v-if="isIndex"
                   title="Últimas Noticias"
                   goto='observatorio-edutendencias-noticias'
                   name='Ver mas Noticas' />
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         :class="{'index-view' :isIndex ,'normal-view' :!isIndex }"
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
      const querySnapshot = this.isIndex
        ? await query.limit(4).get()
        : await query.get();
      this.noticias = querySnapshot.docs.map(doc =>
        Object.assign({ id: doc.id }, doc.data())
      );
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  },
  head() {
    return {
      title: "Noticias"
    };
  }
};
</script>
 
 <style lang="scss" scoped>
.grid {
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  grid-gap: 10px;
}
.index-view {
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

.normal-view {
  grid-template-columns: repeat(5, 1fr);
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (max-width: 992px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 576px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
 
