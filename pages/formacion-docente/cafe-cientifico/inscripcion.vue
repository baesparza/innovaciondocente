<template>
  <section class="container">
    <h1>Inscríbete al Curso</h1>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nombre">Nombre</label>
        <input v-model="forma.nombre"
               type="text"
               name="nombre"
               class="form-control"
               placeholder="Nombre"
               v-validate="'required'">
        <span v-show="errors.has('nombre')"
              class="alert alert-danger">Nombre es requerido</span>
      </div>
      <div class="form-group col-md-6">
        <label for="apellido">Apellido</label>
        <input v-model="forma.apellido"
               type="text"
               name="apellido"
               class="form-control"
               placeholder="Apellido"
               v-validate="'required'">
        <span v-show="errors.has('apellido')"
              class="alert alert-danger">Apellido es requerido</span>
      </div>
    </div>
    <div class="form-group">
      <label for="titulacion">Titulación</label>
      <input v-model="forma.titulacion"
             type="text"
             name="titulacion"
             class="form-control"
             placeholder="Titulación"
             v-validate="'required'">
      <span v-show="errors.has('titulacion')"
            class="alert alert-danger">Titulación es requerido</span>
    </div>
    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input v-model="forma.email"
             class="form-control"
             name="email"
             type="text"
             placeholder="Email"
             v-validate="'required|email'">
      <span v-show="errors.has('email')"
            class="alert alert-danger">Tiene que ser un email válido</span>
    </div>
    <div class="form-group">
      <label for="telefono">Teléfono Celular</label>
      <input v-model="forma.telefono"
             class="form-control"
             name="telefono"
             type="text"
             placeholder="Número de telefono"
             v-validate="'required|numeric'">
      <span v-show="errors.has('telefono')"
            class="alert alert-danger">Tiene que ser un número válido</span>
    </div>
    <div class="form-group">
      <label for="universidad">Universidad</label>
      <input v-model="forma.universidad"
             class="form-control"
             name="universidad"
             type="text"
             placeholder="Universidad"
             v-validate="'required'">
      <span v-show="errors.has('universidad')"
            class="alert alert-danger">Universidad es requerido</span>
    </div>
    <div class="form-group">
      <label for="ciudad">Ciudad</label>
      <select v-model="forma.ciudad"
              class="form-control"
              name="ciudad">
        <option value="Loja">Loja</option>
        <option value="Cuenca">Cuenca</option>
        <option value="Guayaquil">Guayaquil</option>
        <option value="Quito">Quito</option>
      </select>
    </div>
    <div class="form-group form-check">
      <input v-model="forma.whatsapp"
             type="checkbox"
             class="form-check-input"
             name="whatsapp">
      <label class="form-check-label"
             for="whatsapp">¿Desearías que la información de los eventos de formación e innovación
        docente te lleguen por medio
        de WhatsApp?</label>
    </div>
    <div class="form-row">
      <div class="col-6">
        <button class="btn btn-outline-danger btn-large"
                @click="$router.go(-1)">Cancelar</button>
      </div>
      <div class="col-6">
        <button @click="submit"
                class="btn btn-success btn-large"
                type="submit"
                v-bind:class="{ disabled: errors.items.length > 0 }">
          Inscribete
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { AFirestore } from "~/plugins/firebase.js";

export default {
  asyncData({ query }) {
    return { key: query.id };
  },
  data() {
    let forma = {
      nombre: null,
      apellido: null,
      ciudad: "Loja",
      telefono: null,
      whatsapp: true,
      titulacion: null,
      universidad: "UTPL"
    };
    return {
      forma
    };
  },
  head() {
    return {
      title: "Inscripcion Café Científico  "
    };
  },
  methods: {
    submit(e) {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            // only if valid
            AFirestore.collection("formacion-docente")
              .doc("cafe-cientifico")
              .collection("encuentros")
              .doc(this.key)
              .collection("inscripciones")
              .add(this.forma)
              .then(function(response) {
                alert("Completado");
                window.$nuxt.$router.go(-1);
              })
              .catch(function(error) {
                console.log(error);
                alert(
                  "HA OCURRIDO UN ERROR, Por favro envianos un correo a narencoret@utpl.edu.ec "
                );
              });
          }
        })
        .catch(e => {
          console.log(e);
          alert(
            "HA OCURRIDO UN ERROR, Por favro envianos un correo a narencoret@utpl.edu.ec "
          );
        });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/form";
@import "assets/alert";
</style>
