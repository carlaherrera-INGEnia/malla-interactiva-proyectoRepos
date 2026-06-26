// Definición de todos los cursos con sus prerrequisitos
const courses = {
    // SEMESTRE 1
    's1_precalculo': {
        id: 's1_precalculo',
        name: 'Precálculo',
        credits: 6,
        semester: 1,
        prerequisites: [],
        category: 'Plan común'
    },
    's1_intro_mates': {
        id: 's1_intro_mates',
        name: 'Introducción a las Matemáticas Discretas',
        credits: 6,
        semester: 1,
        prerequisites: [],
        category: 'Plan común'
    },
    's1_quimica': {
        id: 's1_quimica',
        name: 'Química',
        credits: 6,
        semester: 1,
        prerequisites: [],
        category: 'Plan común'
    },
    's1_herramientas': {
        id: 's1_herramientas',
        name: 'Herramientas Computacionales',
        credits: 3,
        semester: 1,
        prerequisites: [],
        category: 'Plan común'
    },
    's1_intro_ingenieria': {
        id: 's1_intro_ingenieria',
        name: 'Introducción a la Ingeniería',
        credits: 6,
        semester: 1,
        prerequisites: [],
        category: 'Plan común'
    },
    's1_fisica1': {
        id: 's1_fisica1',
        name: 'Física 1',
        credits: 6,
        semester: 1,
        prerequisites: [],
        category: 'Plan común'
    },

    // SEMESTRE 2
    's2_calculo': {
        id: 's2_calculo',
        name: 'Cálculo Diferencial e Integral',
        credits: 6,
        semester: 2,
        prerequisites: ['s1_precalculo'],
        category: 'Plan común'
    },
    's2_algebra': {
        id: 's2_algebra',
        name: 'Álgebra Lineal',
        credits: 6,
        semester: 2,
        prerequisites: ['s1_intro_mates'],
        category: 'Plan común'
    },
    's2_fisica2': {
        id: 's2_fisica2',
        name: 'Física 2',
        credits: 6,
        semester: 2,
        prerequisites: ['s1_fisica1', 's1_intro_mates'],
        category: 'Plan común'
    },
    's2_programacion': {
        id: 's2_programacion',
        name: 'Programación',
        credits: 6,
        semester: 2,
        prerequisites: ['s1_herramientas'],
        category: 'Plan común'
    },
    's2_geociencias': {
        id: 's2_geociencias',
        name: 'Introducción a las Geociencias',
        credits: 6,
        semester: 2,
        prerequisites: ['s1_quimica'],
        category: 'Plan común'
    },
    's2_ingles1': {
        id: 's2_ingles1',
        name: 'Inglés 1 / CFG',
        credits: 3,
        semester: 2,
        prerequisites: [],
        category: 'Idioma/F.G'
    },

    // SEMESTRE 3
    's3_calculo_avanzado': {
        id: 's3_calculo_avanzado',
        name: 'Cálculo Avanzado',
        credits: 6,
        semester: 3,
        prerequisites: ['s2_calculo', 's2_algebra'],
        category: 'Plan común'
    },
    's3_ecuaciones': {
        id: 's3_ecuaciones',
        name: 'Ecuaciones Diferenciales',
        credits: 6,
        semester: 3,
        prerequisites: ['s2_calculo', 's2_algebra'],
        category: 'Plan común'
    },
    's3_comunicacion': {
        id: 's3_comunicacion',
        name: 'Comunicación Oral y Escrita',
        credits: 3,
        semester: 3,
        prerequisites: [],
        category: 'Plan común'
    },
    's3_algoritmos': {
        id: 's3_algoritmos',
        name: 'Algoritmos y Estructuras de Datos',
        credits: 5,
        semester: 3,
        prerequisites: ['s2_programacion'],
        category: 'Especialidad'
    },
    's3_mates_discretas': {
        id: 's3_mates_discretas',
        name: 'Matemáticas Discretas',
        credits: 4,
        semester: 3,
        prerequisites: ['s1_intro_mates'],
        category: 'Especialidad'
    },
    's3_ingles2': {
        id: 's3_ingles2',
        name: 'Inglés 2 / CFG',
        credits: 3,
        semester: 3,
        prerequisites: ['s2_ingles1'],
        category: 'Idioma/F.G'
    },

    // SEMESTRE 4
    's4_etica': {
        id: 's4_etica',
        name: 'Ética y Responsabilidad Social en Ingeniería',
        credits: 3,
        semester: 5,
        prerequisites: ['s3_comunicacion', 's1_intro_ingenieria'],
        category: 'Plan común'
    },
    's4_metodos': {
        id: 's4_metodos',
        name: 'Métodos Numéricos',
        credits: 6,
        semester: 4,
        prerequisites: ['s3_ecuaciones', 's2_programacion'],
        category: 'Plan común'
    },
    's4_probabilidad': {
        id: 's4_probabilidad',
        name: 'Probabilidad y Estadística',
        credits: 6,
        semester: 4,
        prerequisites: ['s2_calculo'],
        category: 'Plan común'
    },
    's4_electivo_fisica': {
        id: 's4_electivo_fisica',
        name: 'Electivo de Física',
        credits: 6,
        semester: 4,
        prerequisites: ['s3_calculo_avanzado', 's3_ecuaciones'],
        category: 'Especialidad'
    },
    's4_programacion_sistemas': {
        id: 's4_programacion_sistemas',
        name: 'Programación de Software de Sistemas',
        credits: 6,
        semester: 4,
        prerequisites: ['s3_algoritmos'],
        category: 'Especialidad'
    },
    's4_ingles3': {
        id: 's4_ingles3',
        name: 'Inglés 3 / CFG / Proyecto',
        credits: 3,
        semester: 4,
        prerequisites: ['s3_ingles2'],
        category: 'Idioma/F.G'
    },
    's4_bioingenieria': {
        id: 's4_bioingenieria',
        name: 'Introducción a la Bioingeniería',
        credits: 6,
        semester: 4,
        prerequisites: ['s2_programacion'],
        category: 'Plan común'
    },

    // SEMESTRE 5
    's5_computacion_grafica': {
        id: 's5_computacion_grafica',
        name: 'Computación Gráfica y Aplicaciones',
        credits: 6,
        semester: 5,
        prerequisites: ['s2_programacion', 's3_calculo_avanzado'],
        category: 'Plan común'
    },
    's5_bases_datos': {
        id: 's5_bases_datos',
        name: 'Base de Datos',
        credits: 6,
        semester: 5,
        prerequisites: ['s3_mates_discretas'],
        category: 'Especialidad'
    },
    's5_analisis_diseno': {
        id: 's5_analisis_diseno',
        name: 'Análisis y Diseño de Software',
        credits: 6,
        semester: 5,
        prerequisites: ['s3_algoritmos'],
        category: 'Especialidad'
    },
    's5_lenguajes': {
        id: 's5_lenguajes',
        name: 'Lenguajes de Programación',
        credits: 6,
        semester: 5,
        prerequisites: ['s4_programacion_sistemas'],
        category: 'Especialidad'
    },
    's5_legislacion': {
        id: 's5_legislacion',
        name: 'Legislación en Ingeniería y Medioambiente',
        credits: 3,
        semester: 6,
        prerequisites: ['s2_geociencias', 's4_bioingenieria', 's3_comunicacion'],
        category: 'Plan común'
    },
    's5_ingles4': {
        id: 's5_ingles4',
        name: 'Inglés 4',
        credits: 3,
        semester: 5,
        prerequisites: ['s4_ingles3'],
        category: 'Idioma/F.G'
    },

    // SEMESTRE 6
    's6_economia': {
        id: 's6_economia',
        name: 'Economía y Gestión',
        credits: 6,
        semester: 6,
        prerequisites: ['s3_calculo_avanzado'],
        category: 'Plan común'
    },
    's6_arquitectura': {
        id: 's6_arquitectura',
        name: 'Arquitectura de Computadores',
        credits: 6,
        semester: 6,
        prerequisites: ['s4_programacion_sistemas'],
        category: 'Especialidad'
    },
    's6_interaccion': {
        id: 's6_interaccion',
        name: 'Interacción Humano-Computador',
        credits: 6,
        semester: 6,
        prerequisites: ['s5_analisis_diseno'],
        category: 'Especialidad'
    },
    's6_teoria': {
        id: 's6_teoria',
        name: 'Teoría de la Computación',
        credits: 6,
        semester: 6,
        prerequisites: ['s3_mates_discretas'],
        category: 'Especialidad'
    },
    's6_ingles5': {
        id: 's6_ingles5',
        name: 'Inglés 5',
        credits: 3,
        semester: 6,
        prerequisites: ['s5_ingles4'],
        category: 'Idioma/F.G'
    },

    // SEMESTRE 7
    's7_formulacion': {
        id: 's7_formulacion',
        name: 'Formulación y Evaluación de Proyectos',
        credits: 6,
        semester: 7,
        prerequisites: ['s6_economia', 's4_etica'],
        category: 'Plan común'
    },
    's7_sistemas_operativos': {
        id: 's7_sistemas_operativos',
        name: 'Sistemas Operativos',
        credits: 6,
        semester: 7,
        prerequisites: ['s6_arquitectura'],
        category: 'Especialidad'
    },
    's7_ingenieria_software': {
        id: 's7_ingenieria_software',
        name: 'Ingeniería de Software',
        credits: 6,
        semester: 7,
        prerequisites: ['s5_bases_datos', 's6_interaccion'],
        category: 'Especialidad'
    },
    's7_diseno_algoritmos': {
        id: 's7_diseno_algoritmos',
        name: 'Diseño y Análisis de Algoritmos',
        credits: 6,
        semester: 7,
        prerequisites: ['s6_teoria'],
        category: 'Especialidad'
    },
    's7_mineria': {
        id: 's7_mineria',
        name: 'Minería de Datos',
        credits: 6,
        semester: 7,
        prerequisites: ['s4_probabilidad', 's2_programacion'],
        category: 'Especialidad'
    },

    // SEMESTRE 8
    's8_electivo_minor': {
        id: 's8_electivo_minor',
        name: 'Electivo/Minor',
        credits: 12,
        semester: 8,
        prerequisites: [],
        category: 'Electivo/Minor'
    },
    's8_practica': {
        id: 's8_practica',
        name: 'Práctica Profesional',
        credits: 12,
        semester: 11,
        prerequisites: ['s4_etica'],
        requiresMinCredits: 150,
        category: 'Plan común',
        specialInfo: 'Requiere 150 créditos aprobados, Ética aprobada. Duración: 320 horas'
    },
    's8_ciencia_computacional': {
        id: 's8_ciencia_computacional',
        name: 'Ciencia e Ingeniería Computacional',
        credits: 6,
        semester: 8,
        prerequisites: ['s5_computacion_grafica', 's4_metodos', 's7_sistemas_operativos'],
        category: 'Especialidad'
    },
    's8_proyecto_software': {
        id: 's8_proyecto_software',
        name: 'Proyecto de Software',
        credits: 6,
        semester: 8,
        prerequisites: ['s7_ingenieria_software', 's7_formulacion', 's5_lenguajes'],
        category: 'Especialidad'
    },
    's8_redes': {
        id: 's8_redes',
        name: 'Redes',
        credits: 6,
        semester: 8,
        prerequisites: [],
        category: 'Especialidad'
    },
    's8_procesamiento': {
        id: 's8_procesamiento',
        name: 'Procesamiento Masivo de Datos',
        credits: 6,
        semester: 8,
        prerequisites: ['s3_algoritmos'],
        category: 'Especialidad'
    },

    // SEMESTRE 9
    's9_electivo1': {
        id: 's9_electivo1',
        name: 'Electivo/Minor',
        credits: 6,
        semester: 9,
        prerequisites: [],
        category: 'Electivo/Minor'
    },
    's9_electivo2': {
        id: 's9_electivo2',
        name: 'Electivo/Minor',
        credits: 6,
        semester: 9,
        prerequisites: [],
        category: 'Electivo/Minor'
    },
    's9_electivo_carrera': {
        id: 's9_electivo_carrera',
        name: 'Electivo',
        credits: 6,
        semester: 9,
        prerequisites: [],
        category: 'Especialidad'
    },
    's9_taller': {
        id: 's9_taller',
        name: 'Taller de Proyectos',
        credits: 12,
        semester: 9,
        prerequisites: ['s7_formulacion', 's8_proyecto_software', 's5_legislacion'],
        category: 'Plan común'
    },

    // SEMESTRE 10
    's10_titulo': {
        id: 's10_titulo',
        name: 'Trabajo de Título',
        credits: 30,
        semester: 10,
        prerequisites: [], // Se verificará que todos los ramos estén aprobados
        requiresAllCourses: true,
        category: 'Plan común'
    }
};

// Estado de la aplicación
let approvedCourses = new Set();
let totalCredits = 0;

// Calcular créditos totales
Object.values(courses).forEach(course => {
    totalCredits += course.credits;
});
