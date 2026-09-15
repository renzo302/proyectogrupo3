# Laboratorio Semana 6: LESS Architecture

## Alumno
- **Nombre/Usuario:** alexisferrel541-ai
- **Correo:** alexisferrel541@gmail.com

## Respuestas de Metacognición
- Antes pensaba que un preprocesador servía principalmente para escribir menos código o resumir selectores CSS.
- Ahora distingo entre una variable Less y una custom property CSS porque la primera se resuelve en el proceso de compilación (build time) y la segunda permanece y hereda en la cascada en tiempo de ejecución (runtime).
- La decisión de arquitectura que más mejoró la mantenibilidad fue separar en módulos claros (tokens, mixins, base, layout, components) conectados desde un único punto de entrada (`main.less`).
- El error más útil que diagnostiqué durante el laboratorio fue la comprobación del build fallido cuando falta un punto de entrada o una sintaxis de cierre, lo cual nos redirige a editar los archivos fuentes de `src/less/` y no la salida compilada en `dist/css/`.