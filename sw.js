importScripts('/innovaciondocente/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "innovaciondocente",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/innovaciondocente/_nuxt/app.135fa548d4ad50239c07.js",
    "revision": "956c88718057631a2bc96cfeef4c16cf"
  },
  {
    "url": "/innovaciondocente/_nuxt/app.5c2abe9708b947e81467696a9ab6dbc9.css",
    "revision": "5c2abe9708b947e81467696a9ab6dbc9"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/default.a6b7a9a8c63d790d70d4.js",
    "revision": "40457e3f37dd8165beb8ece7ec17384a"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/empty.7626a7da077b8decd7c7.js",
    "revision": "e26d3ca4f409c38066e52ecdbc7580ad"
  },
  {
    "url": "/innovaciondocente/_nuxt/manifest.01c62d16cf6b44b4c9c8.js",
    "revision": "5fbb6c0e5146d9b2fca49d65ec15c950"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/index.d42cae12540de7a693d1.js",
    "revision": "9adfba411f33aaff28734a136f6063f2"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestro-equipo.fef35a07cba365ec6679.js",
    "revision": "0f5ff462dcc163d0ffbf0fe66420323e"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestros-servicios.4b2becb1418d8c05bf07.js",
    "revision": "38977815e9f38f60b7c6cbb5eb2dfa30"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/_id.6cb03689dfe8b07e0672.js",
    "revision": "e4ddfa37b462068aaf38187a4e45aaf5"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/index.5c3375952daa5ecd2de0.js",
    "revision": "102ec845ba8638acd70ea88833c7a832"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/inscripcion.c92ed4c841fd0ec336f7.js",
    "revision": "a82a905f37b473371a36beb0e53fe6c7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/asesoramiento.b87eaa9ea08f456d3052.js",
    "revision": "8195d3d41045ac4b2a9551d07d5e0524"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/elaborar.49060362ad1fa3982db9.js",
    "revision": "b7ada44b58f5fd6db8b4402c369e56ab"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/index.03ac2c59accdf85f369d.js",
    "revision": "47c406d774cc28dc607eb2448003bf05"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/recursos.6f4985488a33d69b408e.js",
    "revision": "acbe7df8a9cea697a8c8220e1e4a8820"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/repositorio.caed799f603ccc06186d.js",
    "revision": "bbce05f1bd2a0d8c11bf561eeccac6ba"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/index.7d06e4ed60694b625337.js",
    "revision": "c99376a9714512739e4971f5a2ada439"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores.3ad9ec03966f5245db96.js",
    "revision": "8ee32bfc7a03b746b2ac993ceff34b8f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/_id.9e7715c8bab2e5807f55.js",
    "revision": "6a41425ea58eb4d47981996b93429592"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/index.dc6e001b1cd456879e6e.js",
    "revision": "a8b7cb77b6bab42232676e5aa9420122"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/_id.fe684a96a4cbbabef04f.js",
    "revision": "91278d2ab133419d6a12a6ebc3c49eae"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos-especificos.039efcd8405f64547aa2.js",
    "revision": "301295b02970ddc30f32f2a865fac0c4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos.0452e86fb1d74b73a878.js",
    "revision": "b31cf80a6a10276285a8f8a00db23a2e"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/index.1d9db399fe7ba520c04b.js",
    "revision": "b154152a0003660c9b2a2d19676afd6a"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/potencia-informacion.fad8b058c2041ea165be.js",
    "revision": "1d8284c647c26edaba8880042c840bf7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/index.52b6b1f4d27c2c361c79.js",
    "revision": "4fc5722af789c7ad7db6a03b80095de0"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/ayudante-catedra/index.5822b613c31c4fe56c95.js",
    "revision": "7c9e30f9af5f50a3087ee8f38cace17a"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index.866b9ff56091165826f0.js",
    "revision": "3494716f03f4485c85c5d191bf418f36"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/_id.96da4a1c864289ef5b32.js",
    "revision": "1cacf8adb80cabe818bda3346c581288"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/index.519d936d5691cb411864.js",
    "revision": "f29629fec8323142ecbecc1122ca414c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/convocatorias/index.d498245639b8c82779fb.js",
    "revision": "b0cf65af2204b99878a4d984919f8545"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyecto-mentores/index.8ed5ddb2c263c0c4c848.js",
    "revision": "4b202e8b8129f9396f69204b20b33e16"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-actuales/index.2da7bc35c3b0c1e6f889.js",
    "revision": "b080c2df2ff380e8c7a5305ee2f5a48f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/_id.79e12c15a232c30f9f38.js",
    "revision": "38592d7182966905b726cc160a667d4f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/index.958884a1c871b578e70d.js",
    "revision": "82b01cb6b1a7d2c50a557db0e65d6246"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/index.f30ad6b24dd84fa1fa12.js",
    "revision": "acef5e6ee1e275c6cfaa1cc15f784796"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/tips.cd72859c1d8e0768dd4f.js",
    "revision": "3d4f0a85d00ca65f83511e4454b42c7a"
  },
  {
    "url": "/innovaciondocente/_nuxt/vendor.de9b8c3a4bfc5c4e924f.js",
    "revision": "94b1350bb25d0f8f8e65da2593e07d2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/innovaciondocente/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/innovaciondocente/.*'), workboxSW.strategies.networkFirst({}), 'GET')

