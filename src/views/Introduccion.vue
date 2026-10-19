<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La atención institucional no finaliza cuando se emite una respuesta. Para determinar si la gestión realizada fue pertinente, oportuna y acorde con los lineamientos establecidos, es necesario hacer seguimiento a las actuaciones desarrolladas, consultar la información disponible y analizar las evidencias que permitan reconstruir el proceso de atención.

  
    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") En este contexto, el seguimiento, la trazabilidad y el autocontrol permiten valorar la gestión de las respuestas institucionales y reconocer resultados que aportan información para la toma de decisiones. Los registros, las evidencias, los reportes de evaluación, los informes de gestión y los indicadores constituyen insumos que, interpretados de manera articulada, contribuyen a identificar fortalezas, dificultades y oportunidades de mejora.
        
        .container
          .row.align-items-center.bg-fondo-02.p-lg-4.p-3.mb-3
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/intro/img03.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este componente formativo desarrolla fundamentos y herramientas para realizar el seguimiento de la atención institucional mediante el análisis de evidencias e indicadores. Asimismo, aborda la evaluación de resultados, el autocontrol y la mejora continua como prácticas que favorecen una gestión pública orientada a resultados y al fortalecimiento de la calidad del servicio.

        p.mb-0 A lo largo del componente, el aprendiz fortalecerá su capacidad para consultar información de seguimiento, seleccionar evidencias pertinentes, interpretar indicadores, relacionar resultados y reconocer acciones de mejora derivadas de la evaluación de la gestión institucional. De esta manera, podrá comprender el seguimiento no solo como una actividad de verificación, sino como una fuente de información para aprender de los resultados y contribuir al mejoramiento continuo.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
