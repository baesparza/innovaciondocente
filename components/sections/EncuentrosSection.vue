<template>
  <div>
    <SectionHeader title="Próximos Encuentros"
                   goto='formacion-docente-cafe-cientifico'
                   name='Ver mas Encuentros' />
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div class="grid"
         v-else-if="encuentros && encuentros.length > 0">
      <div class="aspect-ratio">

        <EncuentroCard :encuentro="encuentro"
                       v-for="encuentro in encuentros"
                       :key="encuentro.id"
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
        // .where("date", ">=", startDate)
        .orderBy("date", "desc")
        .limit(1)
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
<!--
<template>
  <div>
    <SectionHeader title="Próximos Encuentros"
                   goto='formacion-docente-cafe-cientifico'
                   name='Ver mas Encuentros' />
    <div v-if="loading">
      <span>Cargando...</span>
    </div>
    <div v-else-if="encuentros && encuentros.length > 0">
      <div class="card"
           v-for="encuentro in encuentros"
           :key="encuentro.id">
        <div class="row">
          <div class="col-md-6 content">
            <h4>{{encuentro.name}}</h4>
            <small>{{encuentro.date | dateTimestamp}}</small>
            <p class="auto-break">{{encuentro.description|slice(0,400)}}</p>
            <div class="expanded"></div>
            <a href=""
               class="btn-goto">Leer mas...</a>
          </div>
          <div class="col-md-6">
            <div class="aspect-ratio">
              <img :src="encuentro.img"
                   :alt="encuentro.name">
            </div>
          </div>
        </div>
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
        // .where("date", ">=", startDate)
        .orderBy("date", "desc")
        .limit(1)
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
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .btn-goto {
    align-self: flex-end;
  }
}

@media screen and (max-width: 960px) {
  .btn-goto {
    margin-bottom: 15px;
  }
}
.expanded {
  flex-grow: 1;
}

.aspect-ratio {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

 -->