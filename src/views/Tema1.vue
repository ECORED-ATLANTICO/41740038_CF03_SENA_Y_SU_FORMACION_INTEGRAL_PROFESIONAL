<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Seguimiento y trazabilidad de la atención institucional


    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Proporcionar una respuesta institucional implica desarrollar diferentes actuaciones: recibir y analizar el requerimiento, consultar información, determinar la ruta correspondiente, gestionar la solicitud, comunicar la respuesta y conservar los registros que correspondan. Sin embargo, para conocer qué ocurrió durante este proceso y valorar posteriormente sus resultados, es necesario disponer de información que permita hacer seguimiento a las actuaciones realizadas.

    .bg-full-width.bg-fondo-1
      p.mb-5 El seguimiento institucional comprende la consulta y revisión sistemática de información relacionada con una gestión, con el propósito de conocer su estado, verificar las actuaciones desarrolladas y obtener elementos para evaluar sus resultados. La trazabilidad, por su parte, permite reconstruir el recorrido de la atención mediante los registros y evidencias generados durante el proceso.

      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
          .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
            p.mb-0(data-aos="fade-right") Ambos conceptos están estrechamente relacionados, pero cumplen funciones diferentes: el seguimiento permite conocer y analizar el desarrollo de una gestión, mientras que la trazabilidad proporciona las evidencias necesarias para identificar qué ocurrió, cuándo ocurrió y qué actuaciones se realizaron.


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 1.
            span Seguimiento y trazabilidad: conceptos relacionados, pero diferentes
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th(style="width: 50%") Seguimiento
                  th(style="width: 50%") Trazabilidad
              tbody
                tr
                  td Permite conocer el estado y evolución de una gestión.
                  td Permite reconstruir el recorrido de la atención.
                tr
                  td Se apoya en la consulta y análisis de información.
                  td Se sustenta en registros y evidencias.
                tr
                  td Facilita verificar las actuaciones y los resultados obtenidos.
                  td Permite identificar las actuaciones desarrolladas durante el proceso.
                tr
                  td Aporta información para evaluar la gestión.
                  td Aporta evidencia para verificar cómo se desarrolló la gestión.


      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-02.p-4
            p.mb-0 El seguimiento necesita información confiable y la trazabilidad permite disponer de evidencias sobre las actuaciones realizadas. En conjunto, ambos favorecen el análisis de la gestión institucional.

      separador
      
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Seguimiento institucional y su propósito


      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
        .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3(data-aos="fade-right") El seguimiento institucional permite conocer cómo se desarrolla una actuación y disponer de información para analizar posteriormente sus resultados. No consiste únicamente en comprobar si una actividad se realizó; implica consultar información, contrastar registros y reconocer situaciones que puedan incidir en el cumplimiento de los procedimientos y en la calidad de la atención.
          
          .container
            .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-0
              .col-lg-auto.d-none.d-lg-block
                img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En el contexto de las respuestas institucionales, el seguimiento puede contribuir a establecer si el requerimiento fue gestionado, qué actuaciones se desarrollaron, qué información se utilizó y cuál fue el resultado obtenido. Esta revisión permite contar con elementos objetivos para valorar la gestión y sustentar decisiones posteriores.
    
    p.mb-5 La infografía a continuación, responde la pregunta de para qué realizar el seguimiento a la atención institucional: 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Conocer el estado
            p.text-center.mb-0 Permite identificar en qué momento se encuentra una gestión y reconocer las actuaciones realizadas.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Verificar actuaciones
            p.text-center.mb-0 Facilita contrastar lo realizado con los procedimientos y lineamientos establecidos.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Identificar resultados
            p.text-center.mb-0 Permite reconocer los resultados obtenidos a partir de las actuaciones desarrolladas.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img12.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Detectar situaciones relevantes
            p.text-center.mb-0 Ayuda a identificar dificultades, desviaciones, recurrencias u otros aspectos que requieren análisis.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img13.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Generar información para decidir
            p.text-center.mb-0 Proporciona insumos para evaluar la gestión y orientar acciones posteriores.


    .row.justify-content-center.align-items-center
      .col-lg-10.mb-4.mb-lg-0
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08.mb-0.p-0
            .col-lg-9.p-4.mb-0
              h4.mb-2 Clave estratégica
              p.mb-0 El seguimiento adquiere valor cuando la información obtenida se utiliza para comprender lo ocurrido y sustentar decisiones.
            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Información y evidencias para el seguimiento


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para realizar un seguimiento objetivo no basta con recordar lo sucedido o basarse en apreciaciones personales. Es necesario consultar información y seleccionar evidencias que permitan sustentar las actuaciones realizadas durante el proceso de atención. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1
        p.mb-2 Una evidencia es un registro, documento, dato o soporte que permite comprobar una actuación o resultado. Su utilidad depende de que guarde relación con aquello que se pretende verificar. Por esta razón, acumular información no garantiza un seguimiento adecuado: es necesario seleccionar aquella que resulte pertinente.
        p.mb-0 Éstas son las características de una evidencia útil para el seguimiento: 
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
        .bg-fondo-07.px-5.py-4.mb-0
          SlyderF(columnas="col-lg-12 p-1 p-lg-3").bg-white.br-15
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Pertinente
              p.mb-0 Guarda relación directa con la actuación o resultado que se desea verificar.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Verificable
              p.mb-0 Permite comprobar la información que contiene y reconocer su procedencia.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Suficiente
              p.mb-0 Aporta los elementos necesarios para sustentar el aspecto que se está analizando.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Oportuna
              p.mb-0 Corresponde al periodo o momento de la gestión que se pretende evaluar.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Trazable
              p.mb-0 Puede relacionarse con las actuaciones desarrolladas durante el proceso de atención.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Caso aplicado


    .container
      .row.align-items-center.bg-fondo-02.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img16.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-2 Una persona solicita información institucional. El requerimiento es recibido, direccionado y posteriormente respondido. Para hacer seguimiento no sería suficiente afirmar que “la solicitud fue atendida”. Es necesario identificar evidencias que permitan establecer, según corresponda, cuándo se recibió, cómo fue gestionada, qué actuaciones se realizaron y qué respuesta se proporcionó.
          p.mb-0 El ejemplo permite comprender una diferencia fundamental:


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-04.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img05.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Información disponible ≠ evidencia pertinente. 
      .col-lg-7
        p.mb-0 Una organización puede disponer de numerosos datos y documentos, pero para efectuar el seguimiento debe seleccionar aquellos que realmente permitan comprobar las actuaciones y resultados analizados.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Trazabilidad de la atención institucional


    p.mb-4 La trazabilidad permite reconstruir de manera ordenada el recorrido seguido por una atención institucional. Para ello se apoya en registros y evidencias generados en los diferentes momentos de la gestión.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        .row.align-items-center
          .col-lg-12.d-none.d-lg-block.mb-3
            img(src="@/assets/curso/tema1/img17.svg", style="max-width: 90px")
          .col-lg
            p.mb-3 En el componente formativo previo, Respuesta institucional y rutas de atención, se abordó la trazabilidad como parte de la gestión de una respuesta. En este componente se avanza hacia su utilización como insumo para el seguimiento y la evaluación. Por ello, el interés ya no se concentra únicamente en registrar las actuaciones, sino en utilizar esos registros para analizar cómo se desarrolló la atención y qué resultados produjo.

            p.mb-0 A continuación, se describe la reconstrucción de la trazabilidad de una ruta de atención:

      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificar el requerimiento").align-content-center
            p.mb-0 Reconocer la solicitud o necesidad que dio origen a la atención.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Localizar las evidencias").align-content-center
            p.mb-0 Consultar los registros y soportes relacionados con la gestión.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ordenar las actuaciones").align-content-center
            p.mb-0 Establecer la secuencia en que se desarrollaron las acciones.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Relacionar evidencias y actuaciones").align-content-center
            p.mb-0 Determinar qué evidencia permite sustentar cada momento relevante.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificar el resultado").align-content-center
            p.mb-0 Reconocer cuál fue la respuesta o resultado obtenido.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Analizar la información").align-content-center
            p.mb-0 Utilizar la trazabilidad reconstruida como insumo para evaluar la gestión.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Reportes de evaluación e informes de gestión


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento de una actuación particular genera información que puede adquirir mayor valor cuando se integra con los resultados de otras gestiones. Los reportes de evaluación y los informes de gestión permiten organizar y comunicar información relacionada con el desempeño, los resultados y las situaciones identificadas durante un periodo determinado.



    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema1/img19.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-0 Por tal motivo, el propósito formativo en este componente no será enseñar al aprendiz a elaborar un formato institucional específico, sino comprender cómo estos mecanismos reúnen información que puede utilizarse para analizar la gestión.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in").mx-auto.w-md-75

      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Reportes de evaluación")
            p.mb-0 Presentan información derivada de procesos de evaluación y permiten reconocer resultados, comportamientos, avances y situaciones que requieren análisis o acciones de mejora. Facilitan la identificación de hallazgos y la toma de decisiones.
          .tarjeta(titulo="Informes de gestión")
            p.mb-0 Integran información sobre actividades realizadas, resultados obtenidos, avances, cumplimiento de objetivos y aspectos relevantes de la gestión durante un periodo determinado, de acuerdo con el propósito y alcance del informe.
          .tarjeta(titulo="Evidencias de atención")
            p.mb-0 Sustentan actuaciones particulares y permiten documentar, verificar y reconstruir el recorrido de una gestión, desde la solicitud o situación inicial hasta las acciones realizadas y su resultado.
          .tarjeta(titulo="Indicadores")
            p.mb-0 Sintetizan información cuantitativa o cualitativa que permite realizar seguimiento al comportamiento de determinados aspectos de la gestión. Facilitan la medición de avances, cumplimiento, tendencias y oportunidades de mejora.




    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4
          p.mb-0 Un reporte, un informe o un indicador no debe analizarse de manera aislada cuando se requiere comprender una situación. Relacionar diferentes fuentes de información permite obtener una lectura más completa de la gestión.


    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Socialización y uso de resultados


    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img21.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-2(data-aos="fade-right") El seguimiento cumple plenamente su propósito cuando los resultados obtenidos pueden utilizarse para orientar la gestión. 
        p.mb-0 Socializar resultados no significa únicamente presentar cifras o distribuir un informe. Implica comunicar información relevante de manera comprensible para que pueda ser interpretada por quienes participan en la gestión y servir como insumo para reconocer logros, identificar situaciones que requieren atención y orientar decisiones.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 1.
          span Del seguimiento al uso de los resultados
        img.mb-0(data-aos="zoom-in", src="@/assets/curso/tema1/img22.svg", alt="La figura 1 enuncia la ruta o secuencia que permite, a partir de las evidencias, hacer un seguimiento y a partir del mismo obtener resultados; los ccuales a travé de su socialización, apoyen el análisis y la toma de decisiones.")

    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema1/img23.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las evidencias proporcionan información sobre las actuaciones realizadas. El seguimiento permite organizar y analizar esa información para obtener resultados que, al ser comunicados y comprendidos, pueden apoyar el análisis y la toma de decisiones.

    p.mb-lg-5.mb-4 En este punto es importante evitar una conclusión automática: un dato no constituye por sí solo una decisión. Antes de actuar es necesario interpretarlo, relacionarlo con otras evidencias y comprender el contexto en el que se produjo. 

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img25.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        
        .container
          .row.align-items-center.bg-fondo-05.p-lg-4.p-3.mb-3
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El seguimiento y la trazabilidad convierten los registros generados durante la atención institucional en información útil para evaluar la gestión. Seleccionar evidencias pertinentes, reconstruir las actuaciones, consultar reportes e informes y comunicar los resultados permite pasar de la simple constatación de que una respuesta fue emitida a una comprensión más completa de cómo se desarrolló la atención y qué resultados produjo.
        
        p.mb-0(data-aos="fade-right") Este proceso constituye la base para interpretar indicadores y valorar la efectividad y calidad de las respuestas institucionales, aspectos que se desarrollarán en el siguiente capítulo.


    .row.justify-content-center.align-items-center
      .col-lg-10.mb-0
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08
            .col-lg-9.p-lg-4.p-4
              p.mb-0 <b>Frase para reflexionar:</b>  Hacer seguimiento no consiste solamente en comprobar lo realizado; implica utilizar las evidencias para comprender los resultados y aprender de ellos.
            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
