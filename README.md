# Malla Interactiva Ingeniería Civil en Computación UOH
Aplicación web funcional para el seguimiento de avance curricular con prerrequisitos y conteo de créditos SCT.

# Dependencias
Este proyecto es una aplicación web estática, por lo que no requiere instalación de dependencias.

## Ejecución
### Opción 1: Navegador
Solo abre el archivo index.html haciendo doble clic, y se ejecutará automáticamente en el navegador.
### Opción 2: Usar Live Server
* Instalar la extensión Live Server
* Abrir el proyecto en VSCode
* Hacer clic derecho en index.html
* Seleccionar "Open with Live Server"

## Uso de la malla
* Se puede hacer clic en los ramos para marcarlos como aprobados.
* Los ramos aprobados se visualizan con un cambio de color y un indicador de estado.
* El sistema calcula automáticamente los créditos aprobados y el porcentaje de avance.
* Es posible limpiar los ramos aprobados para reiniciar el progreso.

### Mejoras Recientes
* Se corrigió la asignación de semestres para asegurar que la malla oficial se renderice correctamente sin desfasar ramos (Ética y Práctica Profesional).
* Se agregó una validación interna de límites (1 al 10) para evitar que los cursos se dibujen en columnas inexistentes.
* Se refactorizó la función de cálculo de créditos aprobados para mantener una sintaxis limpia y consistente.

## Sobre utilización de herramientas de inteligencia artificial, plagio y reutilización antigua
Este proyecto fue desarrollado originalmente en 2024 como un experimento personal para explorar conceptos básicos de diseño y desarrollo web. Durante su desarrollo se utilizaron materiales de estudio (ppts de ramos cursados en ese momento), foros de programación y herramientas de inteligencia artificial como apoyo. Para este proyecto se retomó lo que se hizo en 2024 al agregarle la función de limpiar los ramos o uso de colores para marcarlos, el objetivo principal de reutilizarlo fue comprender buenas prácticas de organización de código, uso de Git y desarrollo incremental. De igual manera, se declara el uso de herramientas de inteligencia artificial en la etapa de realización del informe para corregir la redacción, adecuar las ideas de los párrafos y estructurar el análisis del historial. 

