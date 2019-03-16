<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <section class="container">
      <article>
        <h2>
          SOLICITUD DE AVAL ACADÉMICO PARA CURSOS ESPECÍFICOS
        </h2>
        <p>
          Pasos a seguir para presentar solicitudes en la realiación de cursos específicos:
        </p>
        <ol class="list-group vertical-steps">
          <li class="list-group-item">
            Oficio dirigido al Dr. Santiago Acosta Vicerrector Académico de la UTPL, solicitando el aval académico
            del curso que desarrollará el Área o Departamento.
          </li>
          <li class="list-group-item">
            Adjuntar los contenidos del curso en el formato establecido
            <a target="_blank"
               rel="noopener"
               href="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/formacion-docente%2Fprograma-formacion%2FCursos%20Espec%C3%ADficos%2FFormato%20Pliego%20Datos%20Curso.docx?alt=media&token=523960df-4022-498c-8288-6c64e669e126">
              (Descargar aquí)
              <i class="fas fa-file-word"></i>
            </a>
          </li>
          <li class="list-group-item">
            Adjuntar presupuesto en caso de requerir
            <a target="_blank"
               rel="noopener"
               href="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/formacion-docente%2Fprograma-formacion%2FCursos%20Espec%C3%ADficos%2FFormato%20Presupuesto%20Curso%20Especifico.xlsx?alt=media&token=13b86269-6451-4202-8c6b-91941bcdc40c">
              (Descargar aquí)
              <i class="fas fa-file-excel"></i>
            </a>
          </li>
          <li class="list-group-item">
            Adjuntar listado de participantes al curso con firmas de respaldo con lo cual el docente confirma su
            participación al mismo.
          </li>
          <li class="list-group-item">
            Presentar o adjuntar copia del Acta de junta de Área o Departamento donde se aprueba la realización del
            curso específico.
          </li>
          <li class="list-group-item">
            Adjuntar un resumen del currículo del docente que dictará o que impartirá la formación.
          </li>
        </ol>
      </article>
      <article>
        <h2>
          EMISIÓN DE CERTIFICADOS DE CURSOS ESPECÍFICOS
        </h2>
        <p>
          Durante la realización del curso el Área o Departamento organizador se encargan del control de asistencia
          a los participantes como requisito para poder realizar la solicitud de impresión de certificados.
        </p>
        <p>
          Los certificados serán impresos en la plantilla autorizada únicamente por el Vicerrectorado Académico
          misma que tendra que ser solicitada al Gestor de Formación Docente (Ing. Nuve Briceño).
        </p>
      </article>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    return { title: "Cursos Específicos" };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>


<style lang="scss" scoped>
@import "assets/header";
@import "assets/list";
</style>
