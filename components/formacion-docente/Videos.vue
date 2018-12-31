<template>
  <div>
    <div class="header-row">
      <span class="header-title">Últimos InnovaTics</span>
      <nuxt-link class="header-more"
                 tag='span'
                 :to="{name: 'formacion-docente-programa-formacion-innovaTics'}">
        Ver mas InnovaTics <i class="fas fa-chevron-right"></i>
      </nuxt-link>
      <p class="auto-break header-description"
         v-if="description">{{description}}</p>
      <!-- TODO: fix this section 
        <span class="header-title">#InnovaciónenlaUTPL</span>
      <a target="_blank"
         rel="noopener"
         class="header-more"
         href="https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg">
        Innovación Docente en YouTube
      </a> -->
    </div>
    <div class="grid"
         :class="{'index-view' :isIndex ,'normal-view' :!isIndex }"
         v-if="innovaTics && innovaTics.length > 0">
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
import VideoModal from "@/components/utils/VideoModal";
import InnovaTicCard from "@/components/cards/InnovaTicCard";

export default {
  props: ["description", "isIndex"],
  components: { VideoModal, InnovaTicCard },
  data() {
    return { innovaTics: null };
  },
  async mounted() {
    // use ternary operator
    const query = AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    ).orderBy("added", "desc");
    const tipsSnap = this.isIndex
      ? await query.limit(4).get()
      : await query.limit(6).get();
    this.innovaTics = tipsSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.header {
  &-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    align-items: baseline;
    margin-bottom: 20px;
  }
  &-title {
    font-size: 30px;
    font-weight: 400;
    margin-right: 15px;
  }
  &-more {
    cursor: pointer;
    color: $color-primary;
    font-size: 16px;
  }
  &-description {
    padding-top: 10px;
    font-size: 16px;
  }
}

.grid {
  display: grid;
  grid-auto-flow: row dense;
  grid-gap: 20px;
  grid-auto-rows: auto;
}

.index-view {
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 992px) {
    & {
      grid-gap: 15px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
    }
  }
}

.normal-view {
  grid-template-columns: repeat(3, 1fr);
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
    }
  }
}
</style>
