# Semana 5 CSS Build Lab

## Autor
- **Apellidos y nombres:** Ferrel, Alexys
- **Código:** alexisferrel541-ai
- **Sección:** Avanzado

## Entorno reproducible
- **Sistema operativo:** Windows
- **node --version:** v24.20.0
- **npm --version:** 10.x.x
- **npm run check:tools:** Sass 1.104.0 / Less 4.9.1

## Flujo de compilación
- **Fuente Sass:** `src/scss/main.scss`
- **Salida Sass:** `dist/css/main-sass.css`
- **Fuente Less:** `src/less/main.less`
- **Salida Less:** `dist/css/main-less.css`
- **Comando completo:** `npm run build`

## Verificación
| Prueba | Resultado | Evidencia u observación |
| --- | --- | --- |
| Instalación local | Correcto | Se instalaron dependencias con versiones exactas |
| Compilación Sass | Correcto | `main-sass.css` generado sin errores |
| Compilación Less | Correcto | `main-less.css` generado correctamente |
| Carga de CSS | Correcto | Estilos aplicados en `index.html` |

## Comparación razonada
- **Coincidencias:** Ambas herramientas compilan CSS estándar equivalente.
- **Diferencias:** Sass usa `$` y `@include`; Less utiliza `@` e invoca mixins con `.mixin-name()`.
- **Elección:** Sass por su ecosistema y sintaxis moderna.