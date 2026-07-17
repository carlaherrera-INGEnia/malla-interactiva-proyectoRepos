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
        semester: 4,
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
        semester: 8,
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

// Inicializar la malla
function initMalla() {
    try {
        loadFromLocalStorage();
        normalizeApprovedCourses();
    } catch (error) {
        console.warn('No se pudo cargar el estado guardado:', error);
    }
    renderCourses();
    updateCreditsInfo();
}

// Renderizar los cursos 

function renderCourses() {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(10, minmax(0, 1fr))';
    container.style.gap = '6px';
    container.style.alignItems = 'start';

    const practiceCourse = courses['s8_practica'];
    const coursesBySemester = {};

    Object.values(courses).forEach(course => {
        if (course.id === 's8_practica') {
            return;
        }

        // Validación para asegurar que el semestre esté entre 1 y 10
        let validSemester = course.semester;
        if (validSemester < 1) {
            console.warn(`Alerta: el curso ${course.id} tiene un semestre menor a 1. Se ajustará a 1 al renderizar.`);
            validSemester = 1;
        }
        if (validSemester > 10) {
            console.warn(`Alerta: el curso ${course.id} tiene un semestre mayor a 10. Se ajustará a 10 al renderizar.`);
            validSemester = 10;
        }
        
        if (!coursesBySemester[validSemester]) {
            coursesBySemester[validSemester] = [];
        }
        coursesBySemester[validSemester].push(course);
    });

    for (let i = 1; i <= 10; i++) {
        const column = document.createElement('div');
        column.className = 'semester-column';
        column.style.display = 'flex';
        column.style.flexDirection = 'column';
        column.style.gap = '6px';
        column.style.minWidth = '0';
        column.style.width = '100%';

        if (coursesBySemester[i]) {
            coursesBySemester[i].forEach(course => {
                const courseElement = createCourseElement(course);
                column.appendChild(courseElement);
            });
        }

        container.appendChild(column);
    }

    renderPracticeSection(practiceCourse);
}


function renderPracticeSection(practiceCourse) {
    const container = document.getElementById('practiceCourses');
    if (!container) {
        return;
    }

    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.paddingTop = '10px';

    if (!practiceCourse) {
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'practice-course-wrapper';
    wrapper.style.width = 'min(280px, 100%)';
    wrapper.appendChild(createCourseElement(practiceCourse));
    container.appendChild(wrapper);
}

// Crear elemento de curso
function createCourseElement(course) {
    const div = document.createElement('div');
    div.className = 'course';
    div.id = course.id;
    div.dataset.courseId = course.id;
    div.dataset.category = course.category || 'Plan común';
    div.style.background = 'rgba(255, 255, 255, 0.98)';
    div.style.color = '#18212f';
    div.style.padding = '0';
    div.style.borderRadius = '10px';
    div.style.cursor = 'pointer';
    div.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    div.style.minHeight = '108px';
    div.style.height = '108px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.position = 'relative';
    div.style.boxShadow = '0 10px 24px rgba(0,0,0,0.22)';
    div.style.border = '1px solid rgba(24, 33, 47, 0.12)';
    div.style.overflow = 'hidden';

    // Determinar el estado del curso
    const status = getCourseStatus(course);
    div.classList.add(status);
    
    // Agregar clase especial si tiene información especial
    if (course.specialInfo) {
        div.classList.add('special-course');
        div.setAttribute('title', course.specialInfo);
    }

    div.innerHTML = `
        <div class="course-category" style="background:${getCategoryColor(course.category)};color:#000;padding:5px 8px;font-size:8px;font-weight:700;text-transform:uppercase;text-align:left;">${course.category || 'Plan común'}</div>
        <div class="course-name" style="font-weight:700;font-size:10px;line-height:1.2;word-wrap:break-word;text-align:center;flex:1;display:flex;align-items:center;justify-content:center;padding:8px 6px;color:${getCourseNameColor(status)};text-transform:uppercase;">${course.name}${course.specialInfo ? ' ★' : ''}</div>
        <div class="course-credits" style="font-size:8px;font-weight:700;padding:5px 8px;text-align:left;background:#666;color:white;">${course.credits} SCT</div>
    `;
    if (status === 'locked') {
        div.style.opacity = '0.92';
        div.style.filter = 'grayscale(0.15)';
    }
    if (status === 'approved') {
        div.style.boxShadow = '0 10px 24px rgba(76, 175, 80, 0.45)';
    }

    // Agregar evento de clic solo si no está bloqueado
    if (status !== 'locked') {
        div.addEventListener('click', () => toggleCourse(course.id));
    }

    return div;
}

// Obtener el estado de un curso
function getCourseStatus(course) {
    if (approvedCourses.has(course.id)) {
        return 'approved';
    }

    // Verificar prerrequisitos
    const prerequisitesMet = course.prerequisites.every(prereq => 
        approvedCourses.has(prereq)
    );

    // Verificar créditos mínimos si es necesario
    if (course.requiresMinCredits) {
        const currentCredits = calculateApprovedCredits();
        if (currentCredits < course.requiresMinCredits) {
            return 'locked';
        }
    }

    // Verificar si requiere todos los cursos aprobados
    if (course.requiresAllCourses) {
        const allOtherCourses = Object.keys(courses).filter(id => id !== course.id);
        const allApproved = allOtherCourses.every(id => approvedCourses.has(id));
        if (!allApproved) {
            return 'locked';
        }
    }

    if (prerequisitesMet) {
        return 'available';
    }

    return 'locked';
}

// Alternar el estado de un curso
function toggleCourse(courseId) {
    if (approvedCourses.has(courseId)) {
        removeCourseAndDependents(courseId);
    } else {
        approvedCourses.add(courseId);
    }

    normalizeApprovedCourses();
    saveToLocalStorage();
    renderCourses();
    updateCreditsInfo();
}

function removeCourseAndDependents(courseId, visited) {
    const seen = visited || new Set();
    if (seen.has(courseId)) {
        return;
    }

    seen.add(courseId);
    approvedCourses.delete(courseId);

    Object.values(courses).forEach(course => {
        if (course.prerequisites && course.prerequisites.includes(courseId) && approvedCourses.has(course.id)) {
            removeCourseAndDependents(course.id, seen);
        }
    });
}

function normalizeApprovedCourses() {
    let changed = true;

    while (changed) {
        changed = false;

        Object.values(courses).forEach(course => {
            if (!approvedCourses.has(course.id)) {
                return;
            }

            const prerequisitesMet = course.prerequisites.every(prereq => {
                return approvedCourses.has(prereq);
            });
            const creditsOk = !course.requiresMinCredits || calculateApprovedCreditsExcluding(course.id) >= course.requiresMinCredits;
            const allCoursesOk = !course.requiresAllCourses || Object.keys(courses).every(id => {
                return id === course.id || approvedCourses.has(id);
            });

            if (!prerequisitesMet || !creditsOk || !allCoursesOk) {
                approvedCourses.delete(course.id);
                changed = true;
            }
        });
    }
}

function calculateApprovedCreditsExcluding(courseId) {
    let credits = 0;
    approvedCourses.forEach(id => {
        if (id !== courseId && courses[id]) {
            credits += courses[id].credits;
        }
    });
    return credits;
}

// Calcular créditos aprobados
function calculateApprovedCredits() {
    let credits = 0;
    approvedCourses.forEach(courseId => {
        if (courses[courseId]) {
            credits += courses[courseId].credits;
        }
    });
    return credits;
}

// Actualizar información de créditos
function updateCreditsInfo() {
    const approvedCredits = calculateApprovedCredits();
    const percentage = ((approvedCredits / totalCredits) * 100).toFixed(1);

    document.getElementById('approvedCredits').textContent = approvedCredits;
    document.getElementById('percentage').textContent = percentage;
}

// Reiniciar cursos
function resetCourses() {
    openResetModal();
}

function openResetModal() {
    openDialog(
        'Limpiar ramos aprobados',
        '¿Estás seguro de que quieres limpiar todos los ramos aprobados?',
        [
            { label: 'Cancelar', className: 'btn-secondary', onClick: function () {} },
            { label: 'Limpiar', className: 'btn-danger', onClick: function () {
                approvedCourses.clear();
                saveToLocalStorage();
                renderCourses();
                updateCreditsInfo();
            } }
        ]
    );
}

// Guardar en localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem(
            'mallaApprovedCourses',
            JSON.stringify([...approvedCourses])
        );
    } catch (error) {
        console.warn('No se pudo guardar el estado:', error);
    }
}

function getCategoryColor(category) {
    if (category === 'Especialidad') {
        return '#41e175';
    }
    if (category === 'Plan común') {
        return '#ffeb3b';
    }
    if (category === 'Idioma/F.G') {
        return 'white';
    }
    if (category === 'Electivo/Minor') {
        return '#dcb494';
    }
    return '#666';
}

function getCourseNameColor(status) {
    if (status === 'approved') {
        return 'white';
    }
    if (status === 'available') {
        return '#18212f';
    }
    return '#18212f';
}

// Cargar desde localStorage
function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('mallaApprovedCourses');

        if (saved) {
            approvedCourses = new Set(JSON.parse(saved));
        }
    } catch (error) {
        approvedCourses = new Set();
    }
}

function openExportModal() {
    downloadMalla();
}

function openDialog(title, message, actions) {
    const modal = document.getElementById('dialogModal');
    const titleEl = document.getElementById('dialogTitle');
    const messageEl = document.getElementById('dialogMessage');
    const actionsEl = document.getElementById('dialogActions');

    if (!modal || !titleEl || !messageEl || !actionsEl) {
        return;
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    actionsEl.innerHTML = '';

    actions.forEach(action => {
        const button = document.createElement('button');
        button.className = 'btn ' + action.className;
        button.textContent = action.label;
        button.addEventListener('click', function () {
            closeDialog();
            if (action.onClick) {
                action.onClick();
            }
        });
        actionsEl.appendChild(button);
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeDialog() {
    const modal = document.getElementById('dialogModal');
    if (!modal) {
        return;
    }

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
}

async function downloadMalla() {
    try {
        const canvas = await captureExportArea();
        const date = new Date().toISOString().split('T')[0];
        const filename = 'mi_malla_' + date + '.png';
        const pngBlob = await canvasToBlob(canvas, 'image/png');
        triggerDownload(pngBlob, filename);

        openDialog(
            'Exportación exitosa',
            'Se descargó ' + filename + ' correctamente.',
            [
                { label: 'Aceptar', className: 'btn-primary', onClick: function () {} }
            ]
        );
    } catch (err) {
        openDialog('Error al exportar', 'No se pudo generar la descarga: ' + err.message, [
            { label: 'Cerrar', className: 'btn-secondary', onClick: function () {} }
        ]);
    }
}

function canvasToBlob(canvas, type) {
    return new Promise(function (resolve, reject) {
        if (!canvas.toBlob) {
            reject(new Error('El navegador no soporta exportación de imagen'));
            return;
        }

        canvas.toBlob(function (blob) {
            if (!blob) {
                reject(new Error('No se pudo crear la imagen'));
                return;
            }
            resolve(blob);
        }, type);
    });
}

function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () {
        URL.revokeObjectURL(url);
    }, 1000);
}

async function captureExportArea() {
    if (typeof html2canvas !== 'function') {
        throw new Error('html2canvas no está disponible');
    }

    const baseContainer = document.querySelector('.malla-container');
    const containerWidth = baseContainer ? baseContainer.offsetWidth : 1200;
    const sourceNodes = [
        document.querySelector('.header'),
        document.querySelector('.malla-container'),
        document.querySelector('.legend'),
        document.querySelector('.credits-info')
    ].filter(Boolean);

    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '0';
    wrapper.style.top = '0';
    wrapper.style.padding = '20px';
    wrapper.style.background = '#ffffff';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '20px';
    wrapper.style.width = containerWidth + 'px';

    sourceNodes.forEach(function (node) {
        const clone = node.cloneNode(true);
        if (clone.classList.contains('malla-container')) {
            clone.style.overflow = 'visible';
            clone.style.width = '100%';
        }
        const buttons = clone.querySelector('.buttons');
        if (buttons) {
            buttons.remove();
        }
        wrapper.appendChild(clone);
    });

    document.body.appendChild(wrapper);

    try {
        return await html2canvas(wrapper, {
            backgroundColor: '#ffffff',
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: false,
            foreignObjectRendering: false,
            scrollX: 0,
            scrollY: 0,
            windowWidth: wrapper.offsetWidth,
            windowHeight: wrapper.scrollHeight,
            onclone: function (clonedDoc) {
                const style = clonedDoc.createElement('style');
                style.textContent = `
                    body, html {
                        background: #ffffff !important;
                    }
                    body::before,
                    .header::before,
                    .malla-container::before,
                    .legend::before,
                    .credits-info::before,
                    .practice-section::before {
                        display: none !important;
                        content: none !important;
                    }
                    * {
                        -webkit-backdrop-filter: none !important;
                        backdrop-filter: none !important;
                    }
                `;
                clonedDoc.head.appendChild(style);
                clonedDoc.querySelectorAll('.course.approved').forEach(function (course) {
                    const strike = clonedDoc.createElement('div');
                    strike.style.position = 'absolute';
                    strike.style.left = '8px';
                    strike.style.right = '8px';
                    strike.style.top = '50%';
                    strike.style.height = '2px';
                    strike.style.background = '#111111';
                    strike.style.transform = 'translateY(-50%) rotate(-8deg)';
                    strike.style.zIndex = '5';
                    course.style.position = 'relative';
                    course.appendChild(strike);
                });
            }
        });
    } finally {
        if (document.body.contains(wrapper)) {
            document.body.removeChild(wrapper);
        }
    }
}

// Cargar malla (importar)
function loadMalla() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);

                approvedCourses = new Set(data.approvedCourses);

                normalizeApprovedCourses();
                saveToLocalStorage();
                renderCourses();
                updateCreditsInfo();

                alert('Malla cargada exitosamente');
            } catch (error) {
                alert('Error al cargar el archivo');
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', initMalla);