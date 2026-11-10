export default {
  global: {
    Name: 'Seguimiento, autocontrol y mejora de la atención institucional',
    Description:
      'Este componente formativo aborda los mecanismos de seguimiento, trazabilidad, autocontrol y mejora continua aplicados a la atención institucional. A partir del análisis de evidencias, indicadores y resultados, el aprendiz fortalece su capacidad para evaluar la efectividad y calidad de las respuestas institucionales, identificar oportunidades de mejora y relacionar los resultados del seguimiento con la toma de decisiones. Asimismo, integra fundamentos de evaluación institucional y gestión pública orientada a resultados, de acuerdo con la normativa vigente y los lineamientos institucionales del SENA.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Seguimiento y trazabilidad de la atención institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Seguimiento institucional y su propósito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Información y evidencias para el seguimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazabilidad de la atención institucional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Reportes de evaluación e informes de gestión',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Socialización y uso de resultados',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación de resultados y autocontrol',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Evaluación institucional y autocontrol',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de seguimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Interpretación y relación de resultados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Efectividad y calidad de las respuestas institucionales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Herramientas de control y atención al ciudadano',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mejora continua y gestión orientada a resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mejoramiento continuo en la gestión institucional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Hallazgos y oportunidades de mejora',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Acciones de mejoramiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Toma de decisiones basada en datos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gestión pública orientada a resultados',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41740038_CF03_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'Actuación definida a partir de un hallazgo u oportunidad de mejora, orientada a fortalecer la gestión y cuyos resultados pueden ser objeto de seguimiento.',
    },
    {
      termino: 'Autocontrol',
      significado:
        'Práctica mediante la cual una persona revisa sus actuaciones y resultados para reconocer oportunamente aspectos que requieren ajuste o fortalecimiento.',
    },
    {
      termino: 'Calidad de la respuesta',
      significado:
        'Conjunto de condiciones que permiten valorar una respuesta institucional considerando aspectos como pertinencia, claridad, fundamentación, oportunidad, integralidad y trazabilidad.',
    },
    {
      termino: 'Dato',
      significado:
        'Representación de un hecho, valor o resultado que, al ser relacionado con otras fuentes y con su contexto, aporta información para el análisis de la gestión.',
    },
    {
      termino: 'Efectividad',
      significado:
        'Capacidad de una respuesta o actuación institucional para atender el propósito o la necesidad que dio origen al requerimiento.',
    },
    {
      termino: 'Evaluación de resultados',
      significado:
        'Análisis de información y evidencias orientado a valorar los resultados obtenidos e identificar aspectos que pueden fortalecerse.',
    },
    {
      termino: 'Evidencia',
      significado:
        'Registro, documento, dato o soporte que permite comprobar una actuación o resultado y sustentar el análisis de la gestión.',
    },
    {
      termino: 'Gestión orientada a resultados',
      significado:
        'Enfoque que relaciona las actuaciones desarrolladas con los resultados obtenidos y utiliza esa información para orientar decisiones y fortalecer la gestión.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'Situación relevante identificada mediante el análisis de información y sustentada en evidencias.',
    },
    {
      termino: 'Indicador de seguimiento',
      significado:
        'Medida que sintetiza información sobre un aspecto de la gestión y permite analizar su comportamiento o resultado durante un periodo o situación determinada.',
    },
    {
      termino: 'Informe de gestión',
      significado:
        'Documento que integra información sobre actividades, avances y resultados de la gestión durante un periodo determinado, de acuerdo con su propósito y alcance.',
    },
    {
      termino: 'Interpretación de resultados',
      significado:
        'Proceso de dar significado a los resultados mediante su relación con evidencias, referentes y condiciones del contexto analizado.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso sistemático de revisión de resultados, identificación de oportunidades e implementación y seguimiento de acciones orientadas a fortalecer la gestión.',
    },
    {
      termino: 'Oportunidad de mejora',
      significado:
        'Aspecto de la gestión susceptible de fortalecimiento, identificado a partir del análisis de resultados, hallazgos y evidencias.',
    },
    {
      termino: 'Referencia',
      significado:
        'Criterio, meta, periodo u otro parámetro pertinente utilizado para comparar e interpretar un resultado cuando ha sido previamente definido.',
    },
    {
      termino: 'Reporte de evaluación',
      significado:
        'Mecanismo que presenta información derivada de un proceso de evaluación y facilita el reconocimiento de resultados o situaciones que requieren análisis.',
    },
    {
      termino: 'Resultado',
      significado:
        'Efecto, producto o condición obtenida como consecuencia de las actuaciones desarrolladas y que puede ser objeto de seguimiento y evaluación.',
    },
    {
      termino: 'Seguimiento institucional',
      significado:
        'Consulta y revisión sistemática de información para conocer el estado de una gestión, verificar las actuaciones desarrolladas y obtener elementos para evaluar sus resultados.',
    },
    {
      termino: 'Toma de decisiones basada en datos',
      significado:
        'Uso de información verificable, interpretada en su contexto y relacionada con evidencias, para fundamentar la selección de actuaciones.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de reconstruir de manera ordenada el recorrido de una atención institucional mediante los registros y evidencias generados durante su gestión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2018). Guía para la construcción y análisis de indicadores de gestión (Versión 4).',
      link: 'https://www.funcionpublica.gov.co/documents/d/guest/guia-para-la-construccion-y-analisis-de-indicadores-de-gestion-version-4-mayo-2018-pdf?download=true',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2020). Guía para la gestión por procesos en el marco del Modelo Integrado de Planeación y Gestión (MIPG) (Versión 1).',
      link: 'https://www1.funcionpublica.gov.co/documents/418548/34150781/Guía+para+la+gestión+por+procesos+en+el+marco+del+modelo+integrado+de+planeación+y+gestión+(Mipg)+-+Versión+1+-+Julio+de+2020.pdf/3167cf5b-6134-e4e3-8862-a81b3962479b',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2026). Manual operativo del Modelo Integrado de Planeación y Gestión (MIPG) (Versión 6.1).',
      link: 'https://www1.funcionpublica.gov.co/documents/28587410/57410531/2026-02-10_Documento_manual_operativo_mdi_v6.1.pdf/d2da8a29-de05-ebfb-7894-fb9bdc936bb0',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2024). Resolución 3415 de 2024, por medio de la cual se modifica la Resolución 2472 de 2021, “Por la cual articula el Sistema Integrado de Gestión y Autocontrol (SIGA) al Modelo Integrado de Planeación y Gestión (MIPG), en el Servicio Nacional de Aprendizaje SENA”.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2025). Acuerdo 0006 de 2025, por medio del cual se adopta el Modelo Integrado de Planeación y Gestión (MIPG) en el Servicio Nacional de Aprendizaje (SENA), se derogan los Acuerdos números 004 de 2021 y 006 de 2024, y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2026). Estrategia Política Servicio al Ciudadano 2026.',
      link: 'https://www.sena.edu.co/es-co/transparencia/Documents/ERC/ANEXO%202-%20PROGRAMACI%C3%93N%20ESTRATEGIA%20POL%C3%8DTICA%20SERVICIO%20AL%20CIUDADANO-2026.PDF%2001-MAIL-Anexos%20Respuestas%20In.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). Protocolo de Atención de Servicio al Ciudadano y Carta de Trato Digno.',
      link: 'https://historico.sena.edu.co/es-co/ciudadano/Paginas/carta-trato-digno.aspx',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). Sistema Integrado de Gestión y Autocontrol (SIGA).',
      link: 'https://historico.sena.edu.co/es-co/sena/Paginas/sig.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
