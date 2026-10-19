<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El componente formativo Seguimiento, autocontrol y mejora de la atención institucional aborda los mecanismos que permiten evaluar la gestión de las respuestas institucionales a partir de información verificable. Integra la selección de evidencias, el seguimiento y la trazabilidad de la atención, la interpretación de indicadores y resultados, y la valoración de la efectividad y calidad de las respuestas. 
        
        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/intro/img05.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Asimismo, fortalece el autocontrol, la identificación de hallazgos y oportunidades de mejora, la implementación de acciones y la toma de decisiones basada en datos. Estos elementos contribuyen al mejoramiento continuo y a una gestión institucional orientada a resultados, de acuerdo con los lineamientos del SENA.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente Seguimiento, autocontrol y mejora de la atención institucional explica cómo seleccionar evidencias, interpretar indicadores y evaluar respuestas. Promueve el seguimiento, la trazabilidad y la revisión de la propia gestión para identificar mejoras, aplicar acciones basadas en datos y verificar sus resultados conforme a los lineamientos institucionales del SENA.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
