<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mejora continua y gestión orientada a resultados

    p.mb-4 El seguimiento y la evaluación adquieren mayor sentido cuando la información obtenida se utiliza para fortalecer la gestión. Identificar un resultado, interpretar un indicador o reconocer una dificultad constituye un punto de partida; el propósito es utilizar esas evidencias para determinar qué puede mejorarse y orientar acciones coherentes con las situaciones encontradas.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-00.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La mejora continua supone revisar sistemáticamente los resultados de la gestión, reconocer aspectos susceptibles de fortalecimiento y desarrollar acciones que contribuyan a obtener mejores resultados. Este enfoque requiere trabajar con información verificable y evitar que las decisiones se fundamenten exclusivamente en percepciones o supuestos.


    .row.align-items-center.mb-4.mb-lg-4
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema3/img02.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-0 En la atención institucional, mejorar implica aprender de la experiencia acumulada. Una respuesta que requirió aclaraciones posteriores, una situación recurrente identificada mediante los registros o un resultado que se aparta del referente establecido pueden convertirse en oportunidades para analizar la gestión y determinar si es necesario realizar ajustes.

    .bg-full-width.bg-fondo-1

      p.mb-4 De esta manera, el seguimiento deja de cumplir una función exclusivamente informativa y se integra en un ciclo en el que los resultados permiten aprender, decidir y mejorar.
      
      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Mejoramiento continuo en la gestión institucional

      p.mb-3 El mejoramiento continuo parte del reconocimiento de que los procesos y resultados pueden ser revisados para identificar posibilidades de fortalecimiento. No se limita a intervenir cuando aparece un problema; también permite consolidar prácticas que generan resultados favorables y prevenir la repetición de situaciones que pueden afectar la atención.
      

      .container
        .row.align-items-center.bg-fondo-04.p-4.mb-4.br-15
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema3/img03.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Es por eso que es clave incorporar procesos de mejoramiento continuo dentro de la normativa aplicable al resultado de aprendizaje y establecer los mismos como uno de los enfoques de evaluación institucional.

      p.mb-4 En consecuencia, el mejoramiento debe comprenderse como un proceso articulado con el seguimiento y la evaluación:

      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto
        .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Obtener información").align-content-center
              p.mb-0 Consultar datos, registros, documentos y evidencias relacionados con la gestión, procurando que la información sea suficiente, pertinente y verificable para el análisis.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Analizar resultados").align-content-center
              p.mb-0 Interpretar la información recopilada, relacionar los datos y contrastarlos con los resultados esperados, identificando comportamientos, avances, diferencias o situaciones relevantes.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Identificar hallazgos").align-content-center
              p.mb-0 Reconocer situaciones, fortalezas, desviaciones o aspectos relevantes que puedan ser sustentados mediante las evidencias disponibles y que requieran atención o seguimiento.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Establecer oportunidades de mejora").align-content-center
              p.mb-0 Determinar qué aspectos de la gestión pueden fortalecerse, ajustarse u optimizarse, considerando los hallazgos identificados y las necesidades evidenciadas.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Implementar acciones").align-content-center
              p.mb-0 Desarrollar acciones concretas y coherentes con la situación identificada, los resultados del análisis y los lineamientos institucionales, definiendo responsables y condiciones cuando corresponda.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Realizar seguimiento").align-content-center
              p.mb-0 Verificar posteriormente el cumplimiento y los resultados de las acciones implementadas, identificando avances, dificultades y nuevos aspectos que puedan requerir atención.

      .row.align-items-center.mb-4.mb-lg-4
        .col-lg-auto.d-none.d-lg-block.order-1
          img(src="@/assets/curso/tema3/img05.svg", style="max-width: 90px").mx-auto
        .col-lg.order-2
          p.mb-0 La mejora continua no constituye una actividad aislada al final de la gestión. Los resultados de las acciones implementadas generan nueva información que debe ser objeto de seguimiento, manteniendo activo el proceso de aprendizaje y mejoramiento.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Hallazgos y oportunidades de mejora

    p.mb-2 El análisis de evidencias e indicadores puede revelar situaciones que requieren atención. Un hallazgo, para efectos de este componente, corresponde a una situación relevante identificada a partir del análisis de información y sustentada mediante evidencias.

    p.mb-4 Un hallazgo no debe formularse a partir de una impresión personal. Debe existir información suficiente que permita explicar qué se identificó y cuál es su relación con la gestión analizada.


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") A partir de los hallazgos pueden reconocerse oportunidades de mejora, entendidas como aspectos de la gestión susceptibles de fortalecimiento. Esta distinción es importante porque el hallazgo describe una situación sustentada en información, mientras que la oportunidad de mejora orienta la atención hacia aquello que podría fortalecerse.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Resultado
            p.text-center.mb-0 Expresa el comportamiento o condición identificada mediante el seguimiento.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Evidencia
            p.text-center.mb-0 Proporciona información verificable que permite sustentar y comprender el resultado.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Hallazgo
            p.text-center.mb-0 Describe una situación relevante identificada mediante el análisis de las evidencias.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Oportunidad de mejora
            p.text-center.mb-0 Define el aspecto de la gestión que puede fortalecerse a partir del hallazgo identificado.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Acción de mejora
            p.text-center.mb-0 Establece una actuación orientada a intervenir el aspecto susceptible de fortalecimiento.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-04.p-4
          p.mb-0 Pasar de un resultado a una acción requiere análisis. La evidencia sustenta el hallazgo; el hallazgo permite reconocer una oportunidad y esta orienta la definición de una acción de mejora.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado

    p.mb-4 Durante el seguimiento se identifica que varias personas solicitaron aclaraciones después de recibir una respuesta institucional.

    .row.align-items-center.mb-4.mb-lg-4
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema3/img12.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-1 Los registros permiten comprobar que las respuestas fueron emitidas oportunamente, pero el análisis evidencia que algunas orientaciones contenían información técnica que podía dificultar su comprensión.
        p.mb-0 En este caso, no sería suficiente afirmar que “la atención debe mejorar”. Es necesario precisar la relación entre los elementos analizados:


    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img13.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Resultado
              p.mb-0 Se presentan solicitudes posteriores de aclaración, ampliación o precisión frente a respuestas previamente emitidas, lo que puede evidenciar que algunos aspectos requieren mayor explicación.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img14.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Evidencia
              p.mb-0 Se cuenta con registros de atención, comunicaciones y nuevas solicitudes relacionadas con respuestas previamente emitidas, que permiten identificar y analizar los casos recurrentes.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img15.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Hallazgo
              p.mb-0 Se identifica recurrencia de solicitudes de aclaración asociadas con determinados contenidos, conceptos o aspectos de las respuestas, evidenciando posibles oportunidades para mejorar la forma en que se comunica la información.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img16.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Oportunidad de mejora
              p.mb-0 Fortalecer la claridad, precisión, estructura y suficiencia de la información comunicada, procurando anticipar posibles dudas y facilitar la comprensión de las respuestas por parte de sus destinatarios.

   
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4
          p.mb-0 Esta secuencia permite evitar propuestas generales que no guardan relación directa con los resultados encontrados.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Acciones de mejoramiento

    p.mb-4 Una vez identificada la oportunidad de mejora, corresponde determinar qué actuación puede contribuir a fortalecer la gestión. 

    .bloque-texto-g.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ello, una acción de mejora debe guardar relación directa con el hallazgo que la origina. No se trata de formular actividades genéricas, sino de establecer actuaciones que respondan a una necesidad identificada mediante el análisis.

    p.mb-4 A continuación, se presentan las características de una acción de mejora:
    
    .bg-full-width.bg-fondo-07.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img18.png", style="").mx-auto
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
            SlyderF(columnas="col-lg-12 p-1 p-lg-3").bg-white.br-15
              .tarjeta.bg-white.p-4.h-100.br-15
                h4.mb-2 Fundamentada
                p.mb-0 Surge de un hallazgo respaldado por información y evidencias. Esto permite evitar acciones basadas únicamente en apreciaciones o supuestos.
              .tarjeta.bg-white.p-4.h-100.br-15
                h4.mb-2 Pertinente
                p.mb-0 Guarda relación directa con la oportunidad de mejora identificada y responde al aspecto que requiere fortalecimiento.
              .tarjeta.bg-white.p-4.h-100.br-15
                h4.mb-2 Viable
                p.mb-0 Puede desarrollarse considerando las competencias, condiciones, recursos y lineamientos aplicables.
              .tarjeta.bg-white.p-4.h-100.br-15
                h4.mb-2 Definida
                p.mb-0 Expresa con claridad qué actuación se realizará y facilita reconocer posteriormente si fue implementada.
              .tarjeta.bg-white.p-4.h-100.br-15
                h4.mb-2 Verificable
                p.mb-0 Permite obtener información o evidencias posteriores para establecer qué ocurrió después de su implementación.


    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema3/img19.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-2 Retomando el ejemplo anterior, si el hallazgo se relaciona con dificultades de comprensión de determinadas respuestas, una acción coherente podría orientarse a revisar y ajustar la forma en que se comunica esa información, de acuerdo con los lineamientos institucionales aplicables.
        p.mb-0 Una acción que no tenga relación con la situación encontrada, aunque resulte positiva en términos generales, difícilmente podrá considerarse una respuesta adecuada al hallazgo.


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-10
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08.mb-0.p-0
            .col-lg-8.p-4.mb-0
              h4.mb-2 Clave estratégica
              p.mb-0 Una acción de mejora debe poder relacionarse con una evidencia, un hallazgo y un resultado esperado.
            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img20.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Retomando el ejemplo anterior, si el hallazgo se relaciona con dificultades de comprensión de determinadas respuestas, una acción coherente podría orientarse a revisar y ajustar la forma en que se comunica esa información, de acuerdo con los lineamientos institucionales aplicables.
        .container
          .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-0
            .col-lg
              p.mb-0 Una acción que no tenga relación con la situación encontrada, aunque resulte positiva en términos generales, difícilmente podrá considerarse una respuesta adecuada al hallazgo.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.mb-0
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08.mb-0.p-0
            .col-lg-8.p-4.mb-0
              p.mb-0 <b>Frase para reflexionar:</b> una acción de mejora de poder relacionarse con una evidencia como un hallazgo y un resultado esperado.
            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Toma de decisiones basada en datos



    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema3/img21.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Tomar decisiones basadas en datos significa utilizar información verificable como fundamento para seleccionar o sustentar actuaciones. Esto no implica decidir exclusivamente a partir de una cifra. Los datos requieren interpretación y deben analizarse junto con evidencias, contexto y lineamientos aplicables.


    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema3/img22.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-2 Por lo anterior, la toma de decisiones basada en datos es crucial y se encuentra entre los mecanismos institucionales de seguimiento.
        p.mb-0 Esta perspectiva permite conectar todo el recorrido desarrollado en el componente: consultar información, seleccionar evidencias, interpretar indicadores, relacionar resultados y utilizar lo aprendido para orientar decisiones.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img23.png", data-aos="zoom-in").mx-auto.w-md-75

      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Verifique la información")
            p.mb-0 Compruebe que los datos, documentos y evidencias utilizados correspondan con la situación, el periodo y el contexto analizado. Verifique además que la información sea suficiente, pertinente y confiable.
          .tarjeta(titulo="Interprete el resultado")
            p.mb-0 Determine qué permite establecer realmente la información disponible, diferenciando los hechos de las interpretaciones y evitando conclusiones que excedan aquello que las evidencias permiten sustentar.
          .tarjeta(titulo="Relacione las evidencias")
            p.mb-0 Contraste diferentes fuentes, registros o documentos cuando sea necesario para comprender mejor la situación, identificar coincidencias o diferencias y obtener una visión más completa.
          .tarjeta(titulo="Identifique la oportunidad")
            p.mb-0 Determine qué aspecto de la gestión puede fortalecerse, ajustarse u optimizarse a partir de los resultados obtenidos y de las situaciones identificadas durante el análisis.
          .tarjeta(titulo="Oriente la decisión")
            p.mb-0 Seleccione una actuación coherente con la evidencia disponible, considerando las competencias institucionales, los procedimientos y los lineamientos aplicables. La decisión debe responder a la situación identificada y estar debidamente sustentada.
          .tarjeta(titulo="Haga seguimiento")
            p.mb-0 Verifique posteriormente qué efectos produjo la actuación implementada, si se alcanzó el resultado esperado y si persisten aspectos que requieran nuevas acciones o ajustes.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        .cajon.bg-color-02.p-4
          p.mb-0 Una decisión fundamentada no surge de un dato aislado. Requiere interpretar la información disponible, reconocer sus alcances y utilizarla de manera coherente con la situación que se pretende atender.

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10.order-lg-2.order-2
          .row.bg-fondo-11.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2
              figure
                img(src="@/assets/curso/tema5/img19.png", data-aos="fade-right").w-md-75.mx-auto
            .col-lg-8.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Para ampliar: consulte el pódcast 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Del hallazgo a la mejora: decisiones sustentadas en evidencias"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )
              p.mb-0 Y reconozca cómo los resultados del seguimiento pueden convertirse en oportunidades y acciones concretas de mejoramiento.


    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Gestión pública orientada a resultados


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img24.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La gestión pública orientada a resultados centra la atención no solamente en las actividades realizadas, sino también en los resultados que estas generan. Desde esta perspectiva, cumplir una tarea constituye una parte de la gestión; también es necesario analizar qué se obtuvo, qué información proporciona ese resultado y cómo puede utilizarse para fortalecer la atención.
        
        .container
          .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este enfoque permite integrar seguimiento, autocontrol, evaluación y mejora continua. La atención institucional adquiere así una lógica de aprendizaje: las actuaciones producen resultados; los resultados generan información; la información se analiza y las conclusiones obtenidas permiten orientar nuevas actuaciones.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 2.
          span Ciclo de seguimiento y mejora de la atención institucional
        img.mb-0(data-aos="zoom-in", src="@/assets/curso/tema3/img25.svg", alt="La figura 2 ilustra como la gestión orientada a resultados articula las actuaciones con sus efectos. Atención → Evidencias → Seguimiento → Indicadores y resultados → Evaluación → Hallazgos → Acciones de mejora → Seguimiento. Las evidencias permiten realizar seguimiento; los resultados se interpretan y evalúan; los hallazgos orientan acciones de mejora, y estas requieren nuevamente seguimiento para establecer sus resultados.")


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Caso integrador


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema3/img26.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Una dependencia analiza la información relacionada con la atención de requerimientos durante un periodo. Los indicadores muestran que la mayoría de las respuestas se emitieron oportunamente; sin embargo, los registros de atención evidencian solicitudes recurrentes de aclaración. 

    p.mb-4 El equipo relaciona ambas fuentes y revisa una muestra de las respuestas. El análisis permite identificar que determinadas orientaciones utilizan expresiones técnicas que pueden dificultar su comprensión.

    
    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema3/img27.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-2 A partir de esta evidencia se reconoce una oportunidad para fortalecer la claridad de las respuestas. Se implementa una acción orientada a revisar la forma de comunicar esta información y, posteriormente, se realiza seguimiento para establecer si disminuyen las solicitudes de aclaración relacionadas con este aspecto.
        p.mb-0 El caso permite reconocer que un resultado favorable en un indicador no significa que todos los aspectos de la gestión sean satisfactorios. La evaluación requiere relacionar información y utilizar las evidencias para obtener una comprensión más completa.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La mejora continua convierte los resultados del seguimiento y la evaluación en oportunidades para fortalecer la gestión institucional. Para ello, los hallazgos deben sustentarse en evidencias y las acciones implementadas deben guardar relación con las situaciones identificadas y con los lineamientos correspondientes.


    p.mb-4 La toma de decisiones basada en datos y la gestión orientada a resultados permiten integrar este proceso en una dinámica permanente de aprendizaje institucional. De esta manera, el seguimiento no termina cuando se identifica un resultado: continúa mediante las acciones desarrolladas y la evaluación posterior de sus efectos.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.mb-0
        .container
          .row.align-items-center.justify-content-center.bg-fondo-08.mb-0.p-0
            .col-lg-8.p-4.mb-0
              p.mb-0 <b>Frase para reflexionar:</b> mejorar no consiste solamente en cambiar lo que se hace, sino en utilizar la evidencia para comprender qué necesita fortalecerse y comprobar los resultados del cambio.
            .col-lg-auto.p-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img28.svg", data-aos="zoom-in").mx-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
