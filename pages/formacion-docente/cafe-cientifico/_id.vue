<template>
  <div>
    <div v-if="encuentro">
      <header>
        <h1>{{encuentro.name}}</h1>
      </header>
      <section class="container">
        <!-- notification -->
        <div class="alert alert-success"
             v-if="canIncribe">
          <i class="fas fa-calendar-alt"></i>
          Inscríbete hasta el
          <b>{{encuentro.postulations | dateTimestamp}}</b>
        </div>
        <div class="alert alert-danger"
             v-else>
          Las inscripciones para este Encuentro han finalizado
        </div>
        <div v-if="encuentro.banner">
          <img :src="encuentro.banner"
               alt="Banner Encuentro">
          <br>
          <br>
        </div>
        <!-- encuentro -->
        <small>
          <i class="fas fa-calendar-alt"></i> {{encuentro.date | dateTimestamp}}</small>
        <hr>
        <p class="auto-break">{{encuentro.description}}</p>
        <div v-if="encuentro.guests">
          <h2>
            <i class="fas fa-users"></i> Invitados
          </h2>
          <div class="row">
            <div class="col-md-6"
                 v-for="(guest, index) in encuentro.guests"
                 :key="index">
              <strong>{{guest.name}}: </strong>
              <p class="auto-break">{{guest.description}}</p>
            </div>
          </div>
        </div>
        <span v-if="encuentro.participation">
          <b>Participa: </b>{{encuentro.participation}}
        </span>
        <div class="row">
          <div :class="[{'col-6': canIncribe}, {'col-12': !canIncribe}]">
            <button @click="$router.go(-1)"
                    class="btn btn-outline-primary btn-large">Regresar</button>
          </div>
          <div class="col-6"
               v-if="canIncribe">
            <nuxt-link class="btn btn-primary btn-large"
                       :to="{name: 'formacion-docente-cafe-cientifico-inscripcion', query: {id: encuentro.id}}">Inscríbete</nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <section v-else
             class="container">
      <p>
        No se encontro el encuentro
      </p>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
export default {
  async asyncData({ params }) {
    let encuentro = null;
    let canIncribe = false;
    try {
      const docSnap = await AFirestore.collection(
        "formacion-docente/cafe-cientifico/encuentros"
      )
        .doc(params.id)
        .get();
      if (docSnap.exists) {
        encuentro = { ...docSnap.data(), id: docSnap.id };
        const temp = new Date();
        const endDate = new Date(encuentro.postulations.seconds * 1000);
        const todayDate = new Date(
          temp.getFullYear(),
          temp.getMonth(),
          temp.getDate()
        );
        canIncribe = endDate >= todayDate;
      }
    } catch (error) {}
    return {
      encuentro,
      canIncribe
    };
  },

  head() {
    return {
      title: this.encuentro
        ? this.encuentro.name
        : "No se encontro el encuentro",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.encuentro
            ? this.encuentro.description
            : "No se encontro el encuentro"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
@import "assets/alert";
</style>
