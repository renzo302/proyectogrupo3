# PC1 UTP TechHub

## Autor
- **Apellidos y nombres:** Ferrel, Alexys
- **Usuario/Código:** alexisferrel541-ai
- **Correo:** alexisferrel541@gmail.com
- **Sección:** Avanzado

## Decisiones de diseño
1. **Base mobile-first:** Se estableció el diseño inicial para 320px en una sola columna sin anchos fijos, permitiendo fluidez total.
2. **Uso de Flexbox:** Aplicado en componentes unidimensionales como header, botones, tags, meta-información y alineación del enlace inferior de las tarjetas.
3. **Uso de Grid:** Aplicado para la composición bidimensional general (`hero__layout`, `content-shell`) y la cuadrícula adaptativa de tarjetas.
4. **Breakpoint 1 (48rem):** Separa el hero en 2 columnas y posiciona la agenda como barra lateral.
5. **Breakpoint 2 (72rem):** Ajusta las proporciones y los anchos de pista para pantallas de escritorio.
6. **Tratamiento de imagen y tipografía responsiva:** `clamp()` para tipografías fluidas y `aspect-ratio` / `max-width` en imágenes.

## Matriz de pruebas
| Prueba | Resultado | Observación o corrección |
| --- | --- | --- |
| 320 px | Correcto | Flujo continuo en una columna y lectura clara |
| 768 px | Correcto | Se activan 2 columnas en hero y sidebar en agenda |
| 1024 px | Correcto | Distribución equilibrada en 3 columnas de talleres |
| 1440 px | Correcto | Límite máximo contenedor respetado con margen auto |
| Zoom 200 % | Correcto | Reflujo adaptado sin scroll horizontal |
| Solo teclado | Correcto | Indicadores de foco visibles y salto directo activo |
| Cadena de 80 caracteres | Correcto | `overflow-wrap: anywhere` evita ruptura de diseño |

## Validación
- **HTML:** Validado sin errores de sintaxis.
- **CSS:** Validado según la especificación CSS3.

## Autoevaluación
- **Criterio mejor logrado:** Combinación limpia de CSS Grid intrínseco y Flexbox dentro de componentes.
- **Mejora pendiente:** Ampliar pruebas de contraste en temas oscuros.
- **Declaración de autoría:** Trabajo realizado personalmente con base en la guía oficial de la PC1.