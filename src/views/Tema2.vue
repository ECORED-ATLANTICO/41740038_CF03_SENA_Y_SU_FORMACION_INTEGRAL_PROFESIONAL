<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evaluación de resultados y autocontrol

   
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") El seguimiento proporciona información sobre las actuaciones realizadas y sus resultados; sin embargo, disponer de datos, evidencias o reportes no es suficiente para comprender el desempeño de la atención institucional. Es necesario interpretarlos, relacionarlos con los propósitos de la gestión y utilizarlos para valorar si las respuestas proporcionadas cumplen con los criterios y lineamientos establecidos.

    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center
        .col-lg-2.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in").mx-auto
        .col-lg-10.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 En este contexto, la evaluación de resultados permite analizar la información obtenida durante el seguimiento para reconocer logros, dificultades y aspectos que requieren atención. El autocontrol, por su parte, promueve la revisión consciente de las propias actuaciones y resultados, de manera que cada persona pueda reconocer oportunamente situaciones que afectan su gestión y contribuir a su mejoramiento.
          .container
            .row.align-items-center.bg-fondo-09.p-lg-4.p-3.mb-3
              .col-lg-auto.d-none.d-lg-block
                img(src="@/assets/curso/tema2/img04.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Evaluar y ejercer autocontrol son, por tanto, acciones complementarias. La primera permite valorar resultados a partir de información y evidencias; el segundo incorpora una responsabilidad permanente frente a la manera como se desarrolla el trabajo y a los resultados que se generan.

      p.mb-4.text-center La tabla que se presenta a continuación, presenta una comparación entre la evaluación y el autocontrol en la gestión institucional.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 2.
            span Evaluación y autocontrol en la gestión institucional
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th(style="width: 50%") Evaluación de resultados
                  th(style="width: 50%") Autocontrol
              tbody
                tr
                  td Analiza información y resultados obtenidos.
                  td Implica revisar las propias actuaciones y resultados.
                tr
                  td Permite establecer qué ocurrió y qué resultados se alcanzaron.
                  td Permite reconocer oportunamente aspectos que requieren ajuste.
                tr
                  td Se sustenta en evidencias, datos e indicadores.
                  td Se apoya en la responsabilidad frente al desarrollo de la gestión.
                tr
                  td Contribuye a identificar oportunidades de mejora.
                  td Favorece acciones oportunas para fortalecer el desempeño.

      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-02.p-4
            p.mb-0 La evaluación aporta información para valorar los resultados y el autocontrol favorece una actuación consciente frente a ellos. Ambos contribuyen al mejoramiento de la gestión.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Evaluación institucional y autocontrol

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-00.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La evaluación institucional permite analizar los resultados de la gestión a partir de información verificable. Su finalidad no se limita a establecer si una actividad se realizó, sino que busca comprender qué resultados se obtuvieron y qué aspectos pueden fortalecerse.

    p.mb-4 Aplicada a la atención institucional, esta evaluación permite revisar las respuestas proporcionadas y determinar, de acuerdo con los lineamientos y procedimientos establecidos, si atendieron adecuadamente las necesidades que dieron origen a la gestión.

    
    .container
      .row.align-items-center.bg-fondo-04.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img06.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-2 El autocontrol complementa este proceso al incorporar la revisión permanente de la propia gestión. Esto implica comprobar las actuaciones realizadas, reconocer posibles inconsistencias y utilizar la información disponible para ajustar oportunamente aquello que se encuentra dentro del ámbito de responsabilidad de cada persona.

    p.mb-4 El siguiente componente, responde las preguntas que orientan el autocontrol:

  
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="¿Qué debía realizarse?").align-content-center
            p.mb-0 Permite reconocer el propósito, procedimiento, actividad o resultado esperado, así como los criterios que orientan la gestión y permiten establecer qué se debía cumplir.
          .tarjeta.color-acento-botones--borde.p-4(titulo="¿Qué se realizó?").align-content-center
            p.mb-0 Identifica las actuaciones efectivamente desarrolladas, las actividades ejecutadas y los avances alcanzados frente a lo inicialmente previsto.
          .tarjeta.color-acento-botones--borde.p-4(titulo="¿Qué evidencias lo sustentan?").align-content-center
            p.mb-0 Relaciona las actuaciones con registros, documentos, datos o información verificable que permiten demostrar y respaldar lo realizado.
          .tarjeta.color-acento-botones--borde.p-4(titulo="¿Qué resultado se obtuvo?").align-content-center
            p.mb-0 Permite establecer el producto, efecto o avance generado a partir de las actuaciones realizadas y determinar su correspondencia con lo esperado.
          .tarjeta.color-acento-botones--borde.p-4(titulo="¿Qué requiere atención?").align-content-center
            p.mb-0 Ayuda a reconocer diferencias, dificultades, desviaciones, riesgos o aspectos susceptibles de fortalecimiento, facilitando la definición de acciones de mejora y seguimiento. 


    .row.justify-content-center.align-items-center.mb-4.mb-lg-0
      .col-lg-10
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08.mb-0.p-0
            .col-lg-9.p-4.mb-0
              h4.mb-2 Clave estratégica
              p.mb-0 El autocontrol no debe entenderse únicamente como una revisión al finalizar una actividad. Puede ejercerse durante la gestión para reconocer oportunamente situaciones que requieren ajuste.
            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto


    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Indicadores de seguimiento
      
    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema2/img08.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los indicadores permiten sintetizar información relevante sobre determinados aspectos de la gestión y facilitan el seguimiento de su comportamiento. Pueden expresar cantidades, proporciones, tiempos, niveles de cumplimiento u otras relaciones que permitan valorar un resultado de acuerdo con el propósito para el cual fueron definidos.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        p.mb-0 En este componente no se pretende que el aprendiz diseñe un sistema institucional de indicadores. El propósito es que pueda interpretar información expresada mediante indicadores de seguimiento y relacionarla con evidencias y resultados de la atención.
      .col-lg-7
        .container
          .row.align-items-center.bg-fondo-09.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img09.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-2 Para interpretar un indicador es necesario comprender, como mínimo, qué mide, qué información utiliza, cuál es su resultado y frente a qué referencia debe analizarse.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Qué mide
            p.text-center.mb-0 Identifica el aspecto de la gestión que representa el indicador. Comprenderlo permite establecer qué fenómeno, resultado o comportamiento se está analizando.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img12.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Fuente de información
            p.text-center.mb-0 Permite reconocer de dónde provienen los datos utilizados para calcular o establecer el resultado y verificar su relación con el aspecto evaluado.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img14.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Resultado
            p.text-center.mb-0 Expresa el valor obtenido durante el periodo o situación analizada. Constituye el dato que será objeto de interpretación.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img15.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Referencia
            p.text-center.mb-0 Proporciona un punto de comparación, cuando este haya sido definido. Permite contrastar el resultado obtenido con una meta, criterio, periodo u otro referente pertinente.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img16.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Interpretación
            p.text-center.mb-0 Explica qué significa el resultado dentro del contexto analizado. Requiere relacionar el indicador con la referencia disponible y con otras evidencias antes de formular conclusiones.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4
          p.mb-0 Interpretar un indicador no consiste únicamente en leer su valor. Es necesario comprender qué mide, reconocer el origen de los datos, analizar el resultado frente a un referente y relacionarlo con otras evidencias para establecer qué información aporta sobre la gestión.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado


    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Suponga que durante un periodo se gestionaron 100 requerimientos institucionales y 85 fueron atendidos dentro del criterio de oportunidad establecido para el proceso analizado.
        
        .container
          .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-3
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El dato 85 por sí solo proporciona información limitada. Cuando se relaciona con el total de requerimientos, puede expresarse un resultado del 85 %. Sin embargo, todavía es necesario conocer el criterio de referencia y analizar las condiciones de la gestión antes de concluir si el resultado es satisfactorio.

        p.mb-0 Por ejemplo, si el referente establecido para ese seguimiento fuera del 90 %, existiría una diferencia de cinco puntos porcentuales que requeriría análisis. Esa diferencia no explica por sí misma la causa ni permite atribuir responsabilidades; indica que existe un resultado que debe examinarse mediante otras evidencias.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-03.p-4.mb-3
          p.mb-0 Un indicador muestra una señal sobre el comportamiento de la gestión; no necesariamente explica las causas que originaron el resultado.

        p.mb-0 Esta distinción es fundamental para evitar interpretaciones apresuradas.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Interpretación y relación de resultados


    .container
      .row.align-items-center.bg-fondo-02.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img19.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Interpretar resultados significa dar sentido a los datos obtenidos mediante el seguimiento. Para ello, es necesario relacionar diferentes fuentes de información y considerar el contexto en el que se produjo el resultado.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        p.mb-3 Esto supone avanzar más allá de la lectura independiente de cifras, reportes o evidencias y buscar relaciones que permitan comprender mejor la gestión.
        
        p.mb-0 La siguiente ruta o línea de tiempo evidencia la transición de los datos a la interpretación:

      .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
        .bg-fondo-07.px-5.py-4.mb-0
          SlyderF(columnas="col-lg-12 p-1 p-lg-3").bg-white.br-15
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Identificar el resultado
              p.mb-0 Reconocer qué información proporciona el dato o indicador.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Verificar la fuente
              p.mb-0 Comprobar de dónde proviene la información y si corresponde al periodo analizado.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Comparar
              p.mb-0 Contrastar el resultado con el referente disponible, cuando corresponda.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Relacionar evidencias
              p.mb-0 Consultar registros, reportes u otras fuentes que ayuden a comprender el resultado.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Analizar el contexto
              p.mb-0 Reconocer circunstancias que puedan estar relacionadas con el comportamiento observado.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.mb-2 Formular una interpretación
              p.mb-0 Explicar qué permite establecer la información disponible, evitando conclusiones que las evidencias no sustentan.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un reporte muestra un aumento en el tiempo empleado para atender determinados requerimientos. Una lectura apresurada podría concluir que disminuyó la eficiencia de la atención.


    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema1/img19.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-0 Sin embargo, al relacionar el indicador con las evidencias del periodo se identifica que una proporción de los requerimientos necesitó información adicional antes de poder gestionarse. Este dato aporta un elemento relevante para interpretar el resultado.

    p.mb-3 El análisis adecuado no consiste en justificar automáticamente el comportamiento observado, sino en relacionar la información disponible antes de formular conclusiones.
    p.mb-4 Podemos representar esta lógica de la siguiente manera

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-04.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img05.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Dato aislado → información limitada
      .col-lg-7
        .container
          .row.align-items-center.bg-color-02.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Dato + evidencia + contexto → interpretación fundamentada


    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10.order-lg-2.order-2
          .row.bg-fondo-11.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
              figure
                img(src="@/assets/curso/tema5/img19.png", data-aos="fade-right").w-md-75.mx-auto
            .col-lg-8.order-1.order-md-1.order-lg-2.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 Para ampliar: consulte el pódcast 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="De la evidencia al resultado: cómo interpretar el seguimiento institucional"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )
              p.mb-0 En el que encontrará una situación aplicada para comprender cómo relacionar evidencias e indicadores antes de evaluar una respuesta institucional.


    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Efectividad y calidad de las respuestas institucionales

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img22.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Una vez interpretados los resultados, es posible avanzar hacia la valoración de la efectividad y calidad de las respuestas institucionales.
        .container
          .row.align-items-center.bg-fondo-09.p-lg-4.p-3.mb-3
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este contexto, la efectividad se relaciona con la capacidad de la respuesta para atender el propósito o necesidad que dio origen al requerimiento. La calidad, por su parte, considera las condiciones bajo las cuales se proporcionó esa respuesta, de acuerdo con los lineamientos y procedimientos aplicables.
        p.mb-0 No basta, por tanto, con comprobar que una respuesta fue emitida. Es necesario analizar si atendió lo solicitado y si la gestión se desarrolló de manera coherente con los criterios institucionales correspondientes.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img24.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img25.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Pertinencia
            p.text-center.mb-0 La respuesta guarda relación con la necesidad, solicitud o requerimiento identificado, atendiendo los aspectos que dieron origen a la gestión y orientándose hacia la solución correspondiente.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img26.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Fundamentación
            p.text-center.mb-0 La actuación se sustenta en información verificable, lineamientos, criterios técnicos y procedimientos aplicables, de acuerdo con el contexto y las competencias institucionales.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img27.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Claridad
            p.text-center.mb-0 La información comunicada se presenta de manera comprensible, precisa y organizada, utilizando un lenguaje adecuado para la persona destinataria y evitando ambigüedades o interpretaciones innecesarias.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img28.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Oportunidad
            p.text-center.mb-0 La gestión se desarrolla dentro de los tiempos y condiciones aplicables, permitiendo atender el requerimiento de manera adecuada y realizar el seguimiento correspondiente cuando sea necesario.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img29.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Integralidad
            p.text-center.mb-0 La respuesta aborda los aspectos relevantes y necesarios del requerimiento, proporcionando información suficiente dentro del alcance y las competencias de la institución.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img30.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Trazabilidad
            p.text-center.mb-0 Existen registros, documentos o evidencias que permiten identificar, verificar y reconstruir las actuaciones desarrolladas, facilitando el seguimiento y la consulta posterior de la gestión.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4.mb-0
          p.mb-0 Responder no equivale automáticamente a resolver. Una respuesta puede haberse emitido y estar registrada, pero su efectividad debe valorarse en relación con el requerimiento que la originó y con los resultados obtenidos.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Herramientas de control y atención al ciudadano

    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img31.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Las herramientas de control y atención al ciudadano son fundamentales dentro de los enfoques de evaluación institucional. Estas herramientas permiten obtener información sobre el funcionamiento de la atención y aportar evidencias para analizar resultados.

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img32.png", data-aos="zoom-in").mx-auto
      .col-lg-10.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Su valor no reside únicamente en recopilar información. Los registros de atención, reportes, resultados de evaluación, observaciones, solicitudes, quejas, reclamos, sugerencias u otros mecanismos institucionalmente establecidos pueden proporcionar señales sobre situaciones recurrentes, necesidades de los usuarios y aspectos susceptibles de fortalecimiento.
        .container
          .row.align-items-center.bg-fondo-09.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img33.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para efectos formativos, es conveniente comprender estas herramientas según la información que aportan, en lugar de memorizar listados de aplicativos o formatos que pueden modificarse con el tiempo.

    p.mb-4 Las fuentes que aportan información para evaluar la atención son las siguientes:

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img34.png", data-aos="zoom-in").mx-auto.w-md-75

      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Registros de atención")
            p.mb-0 Permiten consultar actuaciones y resultados asociados con la gestión de requerimientos.
          .tarjeta(titulo="Reportes de seguimiento")
            p.mb-0 Organizan información sobre el comportamiento de determinados aspectos de la gestión.
          .tarjeta(titulo="Informes de gestión")
            p.mb-0 Integran resultados y avances que permiten analizar la gestión durante un periodo.
          .tarjeta(titulo="Retroalimentación ciudadana")
            p.mb-0 Aporta información sobre necesidades, dificultades o percepciones relacionadas con la atención recibida.
          .tarjeta(titulo="Resultados de evaluación")
            p.mb-0 Permiten reconocer hallazgos y aspectos que requieren análisis o fortalecimiento.
            
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0.text-center Ninguna fuente proporciona necesariamente, por sí sola, una explicación completa. La evaluación adquiere mayor solidez cuando la información pertinente se contrasta y relaciona.




    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo integrador

    h5.text-bold.mb-3 Considere la siguiente situación:


    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema2/img35.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-0 Durante el seguimiento de la atención institucional se identifica que un indicador presenta un resultado inferior al referente definido. Los registros muestran que las respuestas fueron emitidas, pero la retroalimentación recibida evidencia que varias personas solicitaron posteriormente aclaraciones sobre la orientación proporcionada.


    h5.text-bold.mb-4 ¿Qué debería hacerse con esta información?
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img36.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La actuación adecuada no consiste en concluir inmediatamente que las respuestas fueron incorrectas ni en atribuir el resultado a una causa determinada. Primero es necesario relacionar el indicador con las evidencias disponibles, revisar las características de las respuestas y analizar si existe un comportamiento recurrente.


    p.mb-2 Si el análisis muestra que las solicitudes de aclaración se relacionan con dificultades de comprensión, se contará entonces con evidencia para reconocer un aspecto susceptible de mejora.
    p.mb-4 La situación permite integrar el recorrido desarrollado durante el capítulo:

    .container
      .row.align-items-center.bg-color-02.p-4.mb-5.br-15.max-cont-md
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img21.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0.text-bold Indicador → evidencia → comparación → relación de resultados → interpretación → valoración.


    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema2/img37.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La evaluación de resultados permite transformar los datos obtenidos durante el seguimiento en información útil para valorar la gestión. Para ello, es necesario interpretar los indicadores, contrastarlos con evidencias, relacionar diferentes resultados y considerar el contexto antes de formular conclusiones.


    p.mb-4 El autocontrol complementa esta evaluación al promover la revisión consciente de las propias actuaciones y resultados. En conjunto, evaluación y autocontrol permiten corroborar la efectividad y calidad de las respuestas institucionales e identificar aspectos que requieren fortalecimiento. De esta manera, los resultados dejan de ser únicamente información sobre lo ocurrido y se convierten en insumos para orientar el mejoramiento continuo.

    
    .row.justify-content-center.align-items-center
      .col-lg-10.mb-0
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08.mb-0.p-0
            .col-lg-8.p-4.mb-0
              p.mb-0 <b>Frase para reflexionar:</b> los datos muestran lo que ocurre; su análisis permite comprenderlo y convertirlo en una oportunidad para mejorar.

            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
