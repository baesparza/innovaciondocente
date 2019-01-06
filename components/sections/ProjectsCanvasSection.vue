<template>
  <div>
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <CanvasSection v-else-if="proyectos && proyectos.length > 0"
                   :proyectos="proyectos" />
    <div v-else>
      <span>No se encontraron Proyectos para mostrar, vuelve a intentarlo.</span>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import CanvasSection from "@/components/other/CanvasSection";

export default {
  components: { CanvasSection },
  data() {
    return {
      proyectos: null,
      loading: true
    };
  },
  async mounted() {
    try {
      // query data
      const porjectsSnap = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .orderBy("name")
        .where("type", "==", "proyecto-actual")
        .get();

      // validate date
      if (porjectsSnap.empty) throw "No data found";
      else
        this.proyectos = porjectsSnap.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        );
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
  }
};
</script>

