# Laboratorio 7: SASS Modular - Alexis Ferrel

## Respuestas de Metacognición

* **¿Qué mejora aporta `@use` frente a un espacio global de variables y mixins?**
  Evita colisiones de nombres al encapsular mediante namespaces explícitos y garantiza que los módulos se carguen una sola vez.

* **¿Qué valor debería permanecer como custom property CSS en lugar de convertirse en una variable Sass?**
  Los valores que cambian dinámicamente en tiempo de ejecución (runtime), como temas de color o propiedades redefinibles mediante JavaScript o media queries.

* **¿En qué caso elegirías un mixin y en qué caso una función?**
  Se elige un **mixin** cuando se requiere inyectar un bloque de declaraciones CSS. Se elige una **función** cuando se necesita realizar un cálculo o transformación y retornar un valor único.

* **¿Qué dependencia de tu proyecto sería difícil de localizar si eliminaras los namespaces?**
  Las variables de diseño (tokens) e inyecciones de interfaz compartidas a través de `_index.scss`.

* **¿Qué parte del CSS generado revisarías para detectar una abstracción Sass excesiva?**
  La profundidad del anidamiento (nesting), la presencia de selectores excesivamente largos o repetidos y el tamaño total del CSS resultante.

* **Criterios técnicos para elegir entre Less y Sass en un proyecto real:**
  Sass ofrece un sistema modular moderno (`@use`/`@forward`), soporte oficial activo vía Dart Sass, mejor integración con la comunidad y funciones de manipulación avanzadas.
