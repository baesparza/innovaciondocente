<template>
  <div>
    <h1>JORNADA DE REFLEXIÓN ACADÉMICA</h1>
    <h3>
      <small>{{data.periodo}}</small>
    </h3>
    <small v-if="data.autor">
      <i class="fas fa-user"></i> {{data.autor}}
    </small>
    <small v-if="data.date">
      <br>
      <i class="fas fa-calendar-alt"></i> {{data.date | date}}
    </small>
    <hr>
    <div v-html="data.html"
         class="html"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion/${
        params.id
      }.json`
    );
    return { data };
  },
  head() {
    return {
      title: this.data.nombre,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/html";

h3 {
  text-transform: uppercase;
}
</style>
