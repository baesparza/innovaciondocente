<template>
  <div>
    <header>
      <h1>Portafolio de Cursos</h1>
    </header>
    <div class="custom-container">
      <div class="alert alert-success"
           v-if="cursos == null">
        <p>Cargando...</p>
      </div>
      <div v-else-if="cursos.length > 0">
        <div class="grid">
          <CursoCard :curso="curso"
                     v-for="curso in cursos"
                     :key="curso.id"
                     class="card" />
        </div>
      </div>
      <div class="alert alert-danger"
           v-else>
        <p>No se encontraton cursos.</p>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-primary btn-large">
        Regresar
      </button>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import CursoCard from "@/components/cards/CursoCard";

export default {
  components: { CursoCard },
  data() {
    return { cursos: null };
  },
  async mounted() {
    let cursosSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .orderBy("date", "desc")
      .get();
    this.cursos = cursosSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: "Portafolio de Cursos"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
@import "assets/alert";

.custom-container {
  padding: 15px;
}
.grid {
  padding-bottom: 15px;
  display: grid;
  grid-auto-rows: 225px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
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
