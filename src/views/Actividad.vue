<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Seguimiento, autocontrol y mejora de la atención institucional',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conocimientos sobre seguimiento y trazabilidad, evaluación de resultados, autocontrol y mejora continua, mediante el análisis de situaciones que requieren seleccionar evidencias, interpretar indicadores y orientar acciones de mejoramiento institucional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Felicitaciones! Usted alcanzó al menos el 70 % de respuestas correctas (14 a 20 aciertos). Demuestra comprensión del seguimiento, la evaluación, el autocontrol y la mejora de la atención institucional. Revise las retroalimentaciones y repita la actividad si desea afianzar sus aprendizajes.',
      mensaje_reprobado:
        'Usted obtuvo entre 0 y 13 aciertos. Revise las retroalimentaciones y retome los apartados sobre evidencias, evaluación o mejora que necesita fortalecer. Recuerde que esta actividad es opcional, no calificable y puede repetirla cuantas veces desee.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una solicitud figura como cerrada, pero le piden verificar cómo fue atendida. ¿Qué revisión permite sustentar el seguimiento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tomar el estado cerrado como prueba suficiente de toda la gestión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar el total de solicitudes cerradas para explicar este caso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contrastar el requerimiento, las actuaciones registradas y la respuesta emitida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Confirmar verbalmente el cierre sin consultar los soportes disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted contrasta registros del caso para comprobar qué se hizo y qué resultado se obtuvo; el estado cerrado no demuestra por sí solo la gestión.',
          mensaje_incorrecto:
            'Revise el apartado 1.1. Para verificar este caso, usted necesita relacionar el requerimiento, las actuaciones y la respuesta; una etiqueta de cierre o un total no basta.',
        },
        {
          id: 2,
          texto:
            'Debe comprobar cuándo se comunicó una respuesta específica. ¿Qué evidencia selecciona para sustentar esa actuación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El registro de comunicación vinculado al requerimiento, con fecha y procedencia verificables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El borrador de la respuesta, aunque no registre su comunicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El informe mensual con el número total de respuestas elaboradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El recuerdo de quien preparó la respuesta durante ese periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted selecciona una evidencia pertinente y verificable que vincula la comunicación con el requerimiento y el momento analizado.',
          mensaje_incorrecto:
            'Repase el apartado 1.2. Usted debe comprobar la comunicación de esa respuesta: el borrador acredita preparación, el total no identifica el caso y el recuerdo no sustituye el soporte.',
        },
        {
          id: 3,
          texto:
            'Encuentra la solicitud inicial, una remisión y la respuesta final archivadas sin orden. ¿Cómo reconstruye la trazabilidad de la atención?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ordena los documentos por extensión y conserva el más completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Resume la respuesta final y considera innecesarias las actuaciones previas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Agrupa los documentos por dependencia sin relacionarlos con sus fechas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verifica su vínculo con el caso, ordena las actuaciones y relaciona cada una con su soporte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted reconstruye el recorrido del caso al relacionar las evidencias con la secuencia de actuaciones y el resultado obtenido.',
          mensaje_incorrecto:
            'Revise el apartado 1.3. Usted necesita establecer qué ocurrió y en qué secuencia; ordenar por extensión, omitir antecedentes o separar dependencias no reconstruye el recorrido.',
        },
        {
          id: 4,
          texto:
            'Evalúa la atención de septiembre y recibe muchos soportes, incluidos casos de otros meses. ¿Cómo selecciona las evidencias que utilizará?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incluye todos los soportes para que el análisis tenga mayor volumen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verifica periodo, procedencia y relación con las actuaciones que debe analizar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Escoge únicamente los documentos con más anexos y firmas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usa los casos más recientes, aunque correspondan a otro periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted selecciona evidencias relacionadas con el objeto y el periodo del seguimiento, cuya procedencia puede comprobar y cuyo contenido sustenta el análisis.',
          mensaje_incorrecto:
            'Repase el apartado 1.2. Usted debe priorizar pertinencia, verificabilidad y correspondencia temporal; la cantidad de documentos o su extensión no garantiza evidencia útil.',
        },
        {
          id: 5,
          texto:
            'Un informe mensual presenta avances generales, pero necesita comprender una demora en un caso concreto. ¿Qué uso de las fuentes resulta adecuado?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Relacionar el informe con los registros y soportes de las actuaciones de ese caso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicar al caso la conclusión general del informe sin revisar sus antecedentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir el informe por una opinión personal sobre la demora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consultar solo el total mensual de atenciones para establecer qué ocurrió.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted usa el informe para situar la gestión y las evidencias particulares para reconstruir el caso; al relacionarlos obtiene una lectura más completa.',
          mensaje_incorrecto:
            'Revise el apartado 1.4. Usted necesita contrastar fuentes: el informe integra resultados del periodo, pero sus datos generales no explican por sí solos una demora particular.',
        },
        {
          id: 6,
          texto:
            'Debe socializar resultados de seguimiento con el equipo de atención. ¿Qué presentación favorece que la información se utilice en la gestión?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una lista de cifras sin indicar qué periodo o actuaciones representan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El archivo completo de registros, sin explicar qué resultados son relevantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una explicación de resultados, evidencias y aspectos que requieren análisis conjunto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una conclusión sobre responsables antes de revisar las evidencias del periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted comunica resultados comprensibles y sustentados para que el equipo reconozca situaciones relevantes y utilice la información en el análisis y las decisiones.',
          mensaje_incorrecto:
            'Repase el apartado 1.5. Usted debe facilitar la comprensión de los resultados y sus evidencias; distribuir datos sin contexto o atribuir responsabilidades sin análisis no cumple ese propósito.',
        },
        {
          id: 7,
          texto:
            'Al reconstruir un caso, encuentra la recepción y la respuesta, pero no el soporte de una actuación intermedia. ¿Cómo procede en el seguimiento?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supone que la actuación ocurrió porque existe una respuesta final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Busca el soporte relacionado y señala la limitación si no logra verificar la actuación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Completa la secuencia con lo ocurrido en otro requerimiento parecido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Excluye el caso del análisis para evitar registrar la falta de evidencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted busca sustento verificable y reconoce el alcance de la información disponible, sin presentar una actuación no comprobada como un hecho.',
          mensaje_incorrecto:
            'Revise los apartados 1.2 y 1.3. Usted debe relacionar cada actuación con su evidencia; la respuesta final o un caso parecido no permiten llenar un vacío de trazabilidad.',
        },
        {
          id: 8,
          texto:
            'Un indicador de oportunidad alcanza 85 % frente a un referente de 90 %. ¿Qué interpretación puede sustentar con esa información?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El resultado demuestra que las respuestas emitidas carecen de calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La diferencia prueba que una dependencia es responsable del incumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El porcentaje permite identificar la causa sin consultar otros registros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Existe una brecha de cinco puntos porcentuales que debe analizar con otras evidencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted identifica la diferencia frente al referente y reconoce que el indicador señala un resultado, pero no explica por sí solo sus causas.',
          mensaje_incorrecto:
            'Repase el apartado 2.2. Usted puede establecer una brecha de cinco puntos porcentuales; para explicar causas o valorar otros aspectos necesita evidencias adicionales.',
        },
        {
          id: 9,
          texto:
            'Aumentó el tiempo de atención y los registros muestran solicitudes que requirieron información adicional. ¿Cómo evalúa el resultado?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Atribuye el aumento a menor compromiso del equipo, sin más revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Da por justificada cualquier demora porque hubo solicitudes incompletas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Relaciona tiempos, registros y contexto antes de formular una conclusión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elimina esos casos del reporte para recuperar el resultado anterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted integra el indicador con evidencias y contexto para interpretar el aumento, sin atribuir causas ni justificar demoras automáticamente.',
          mensaje_incorrecto:
            'Revise el apartado 2.3. Usted debe contrastar los tiempos con las actuaciones registradas; solicitar información adicional aporta contexto, pero no explica ni justifica todos los casos.',
        },
        {
          id: 10,
          texto:
            'Mientras revisa su propia gestión, detecta una inconsistencia entre un registro y su soporte. ¿Qué actuación refleja el autocontrol?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Espera la evaluación final para que otra persona identifique la diferencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contrasta la información y gestiona el ajuste dentro de su responsabilidad y los lineamientos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mantiene el registro porque el reporte ya muestra un resultado favorable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modifica el soporte para que coincida con el dato reportado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted revisa su actuación durante la gestión y atiende oportunamente la inconsistencia dentro de su ámbito de responsabilidad.',
          mensaje_incorrecto:
            'Repase el apartado 2.1. Usted ejerce autocontrol cuando comprueba su gestión y promueve ajustes sustentados; esperar una revisión o alterar el soporte no resuelve la inconsistencia.',
        },
        {
          id: 11,
          texto:
            'Una respuesta fue emitida a tiempo, pero dejó sin atender un aspecto del requerimiento que era de competencia institucional. ¿Qué valoración corresponde?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Considerarla efectiva porque cumplió el criterio de oportunidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Considerarla integral porque existe constancia de su envío.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Valorar solo su redacción, sin relacionarla con el requerimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reconocer su oportunidad y revisar su integralidad y efectividad frente a lo solicitado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted distingue la oportunidad de la integralidad y la efectividad; una respuesta emitida a tiempo puede no atender toda la necesidad que la originó.',
          mensaje_incorrecto:
            'Revise el apartado 2.4. Usted debe contrastar la respuesta con lo solicitado: la fecha de envío no demuestra que se hayan atendido los aspectos necesarios del requerimiento.',
        },
        {
          id: 12,
          texto:
            'El reporte registra respuestas oportunas, pero varias personas piden aclaraciones. ¿Qué revisión permite evaluar mejor su calidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contrastar las solicitudes de aclaración con las respuestas y analizar su comprensión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Concluir que la calidad es satisfactoria porque se cumplió el tiempo establecido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asumir que todas las respuestas fueron incorrectas por existir aclaraciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Valorar únicamente cuántas respuestas se enviaron durante el periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted relaciona el reporte con las respuestas y la retroalimentación para examinar la claridad, sin confundir oportunidad con calidad global.',
          mensaje_incorrecto:
            'Repase los apartados 2.4 y 2.5. Usted necesita analizar qué motivó las aclaraciones; ni el cumplimiento del tiempo ni su sola existencia permiten concluir sobre toda la calidad.',
        },
        {
          id: 13,
          texto:
            'Recibe un reporte con un resultado de 92 %, sin descripción del indicador. Antes de calificar el desempeño, ¿qué debe verificar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Si el porcentaje es mayor que el de cualquier otra dependencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Si puede redondear el resultado para simplificar su presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Qué mide, su fuente, el periodo y el referente disponible para interpretarlo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Si el valor supera la mitad, para declararlo satisfactorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted verifica el significado y el origen del indicador y lo sitúa en su periodo y referencia antes de valorar el resultado.',
          mensaje_incorrecto:
            'Revise el apartado 2.2. Usted no puede calificar un porcentaje aislado: primero necesita conocer qué mide, de dónde proviene y con qué referencia pertinente puede compararlo.',
        },
        {
          id: 14,
          texto:
            'Varias observaciones ciudadanas mencionan la misma dificultad, mientras el informe general es favorable. ¿Cómo integra esta información en la evaluación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contrasta las observaciones con los registros para establecer su alcance y posible recurrencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Descarta las observaciones porque contradicen la conclusión general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye toda la evaluación por la observación más reciente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuenta las observaciones sin revisar a qué actuaciones corresponden.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted trata la retroalimentación como una fuente para contrastar y analizar; así puede reconocer situaciones que el resultado general no muestra.',
          mensaje_incorrecto:
            'Repase el apartado 2.5. Usted debe relacionar las observaciones con otras fuentes; descartarlas, generalizar una sola o contarlas sin contexto limita la evaluación.',
        },
        {
          id: 15,
          texto:
            'Los registros muestran aclaraciones recurrentes sobre instrucciones técnicas de varias respuestas. ¿Qué oportunidad de mejora se relaciona con ese hallazgo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el número de respuestas emitidas, sin revisar su contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la claridad de las instrucciones que reciben las personas usuarias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ampliar los anexos técnicos en todas las comunicaciones del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Priorizar la reducción de tiempos sin analizar las aclaraciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted transforma el hallazgo sobre dificultades de comprensión en una oportunidad concreta: fortalecer la claridad de la información comunicada.',
          mensaje_incorrecto:
            'Revise el apartado 3.2. Usted debe vincular la oportunidad con la situación evidenciada; aumentar respuestas, anexos o rapidez no atiende directamente la dificultad de comprensión.',
        },
        {
          id: 16,
          texto:
            'La evaluación confirma que ciertas instrucciones resultan confusas. ¿Qué acción de mejora responde de manera directa y verificable al hallazgo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Enviar un recordatorio general sobre la importancia de prestar buen servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cambiar la presentación visual del informe de gestión mensual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Repetir las instrucciones actuales en más comunicaciones institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ajustar esas instrucciones según los lineamientos y verificar después las aclaraciones asociadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted plantea una acción pertinente y definida, vinculada al hallazgo, y prevé evidencias posteriores para comprobar sus resultados.',
          mensaje_incorrecto:
            'Repase el apartado 3.3. Usted necesita intervenir las instrucciones identificadas y comprobar qué ocurre después; un recordatorio general o mayor difusión no resuelve su falta de claridad.',
        },
        {
          id: 17,
          texto:
            'El equipo propone una acción pertinente, pero su ejecución requiere recursos y competencias que no tiene. ¿Qué debe revisar antes de implementarla?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su viabilidad y ajuste a competencias, condiciones, recursos y lineamientos aplicables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo su relación con el hallazgo, porque eso garantiza que puede ejecutarse.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo la rapidez con que puede anunciarse a las personas usuarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La posibilidad de omitir los lineamientos para lograr el resultado esperado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted reconoce que una acción fundamentada también debe ser viable y coherente con las posibilidades y lineamientos institucionales.',
          mensaje_incorrecto:
            'Revise el apartado 3.3. Usted debe comprobar la viabilidad de la acción: su pertinencia no reemplaza la revisión de recursos, competencias y condiciones de ejecución.',
        },
        {
          id: 18,
          texto:
            'Después de ajustar unas respuestas, el equipo informa que la acción ya se ejecutó. ¿Qué paso mantiene activo el mejoramiento continuo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cerrar el proceso porque la implementación acredita por sí sola la mejora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar únicamente cuántas respuestas fueron modificadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consultar nuevas evidencias y evaluar si mejoró el aspecto que motivó el ajuste.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aplicar el mismo cambio a todas las respuestas sin revisar sus resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted vuelve al seguimiento para verificar los resultados de la acción; ejecutar un cambio no demuestra por sí solo que haya mejorado la atención.',
          mensaje_incorrecto:
            'Repase el apartado 3.1. Usted necesita información posterior que permita valorar el efecto del ajuste; registrar su ejecución es solo una parte del ciclo de mejora.',
        },
        {
          id: 19,
          texto:
            'Debe elegir entre dos propuestas de mejora. Una se apoya en una percepción y otra en un hallazgo verificado del periodo. ¿Cómo sustenta la decisión?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elige la propuesta más difundida, aunque no se relacione con la situación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Decide por la cifra más alta sin revisar qué mide ni su contexto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Escoge la opción más rápida sin comprobar su relación con las evidencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analiza el hallazgo, el contexto y los lineamientos para elegir la actuación pertinente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted utiliza información verificada y contextualizada para sustentar una actuación coherente con la necesidad y los lineamientos institucionales.',
          mensaje_incorrecto:
            'Revise el apartado 3.4. Usted debe interpretar y relacionar evidencias antes de decidir; la popularidad, la rapidez o una cifra aislada no sustituyen ese análisis.',
        },
        {
          id: 20,
          texto:
            'Una dependencia reporta que revisó 50 respuestas para mejorar su claridad. ¿Qué información adicional permite valorar la gestión orientada a resultados?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El número de reuniones realizadas para organizar la revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evidencias posteriores que permitan establecer si mejoró la comprensión de esas respuestas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La cantidad de personas que participaron en la edición de los textos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El número de páginas del informe que describe la actividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted busca establecer qué produjo la revisión en la atención; distinguir actividades y resultados permite valorar si el cambio fortaleció la comprensión.',
          mensaje_incorrecto:
            'Repase el apartado 3.5. Usted necesita evidencias del resultado obtenido, como las aclaraciones asociadas con las respuestas revisadas; contar reuniones o participantes solo describe actividades.',
        },
      ],
    },
  }),
}
</script>
