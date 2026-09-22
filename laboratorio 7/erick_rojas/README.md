# FrontLab — Laboratorio Semana 7: SASS modular

Proyecto del laboratorio de la asignatura **Hojas de Estilo en Cascada Avanzado**, construido con **Dart Sass 1.104.1** y una arquitectura modular basada en `@use`, `@forward`, mixins, funciones y módulos incorporados (`sass:map`, `sass:color`).

---

## 1. Source maps

Verificación de trazabilidad realizada desde DevTools hasta el parcial SCSS de origen.

- **Regla inspeccionada:** `.card` → `padding` (o `border` / `box-shadow`).
- **Archivo fuente alcanzado:** `src/scss/components/_card.scss`.
- **Línea aproximada:** 7–12.

> Al seleccionar una tarjeta `.card` en DevTools → Elements, hacer clic sobre el enlace de archivo en la regla de `padding` conduce directamente a `_card.scss`, no a `main.css`. Esto confirma que el source map generado por Dart Sass permite rastrear cualquier regla del CSS compilado hasta su parcial de origen.

*(Pega aquí una captura de DevTools mostrando el enlace al parcial SCSS.)*

---

## 2. Errores controlados

### Error 1 — Clave inexistente en `$spaces`

- **Síntoma:** al compilar, Sass lanza:
  ```
  Error: Paso de espacio no válido: 99.
  ```
- **Causa:** se llamó `a.space(99)` desde una regla, pero la clave `99` no existe en el mapa `$spaces` definido en `_tokens.scss`. La función `space()` valida con `@if $value == null` y lanza el `@error` personalizado.
- **Corrección:** usar un paso existente en el mapa (por ejemplo `a.space(4)`) y eliminar la regla de prueba. Recompilar con `npm run build:css`.

### Error 2 — Paréntesis desbalanceado en `_tokens.scss`

- **Síntoma:** al compilar, Sass reporta un error de sintaxis indicando el archivo `_tokens.scss` y la línea donde falta el paréntesis de cierre.
- **Causa:** se eliminó temporalmente un paréntesis de cierre en la definición del mapa `$spaces`, dejando la estructura abierta.
- **Corrección:** restaurar el paréntesis faltante, guardar y recompilar. El build vuelve a ejecutarse sin errores.

> **Objetivo de la prueba:** aprender a confiar en el compilador como herramienta de diagnóstico. Un error temprano y explícito es preferible a un CSS silenciosamente inconsistente.

---

## 3. Matriz de pruebas de calidad y accesibilidad

| Prueba | Procedimiento | Criterio de aceptación | Resultado |
|---|---|---|---|
| 320 px | Modo responsivo a 320 CSS px | No existe scroll horizontal; acciones y tarjetas refluyen | ☑ Cumple |
| 768 px | Cruzar el breakpoint `md` | Hero pasa a dos columnas sin alterar el orden del DOM | ☑ Cumple |
| 1440 px | Ampliar el viewport | El contenedor conserva un ancho máximo legible | ☑ Cumple |
| Zoom 200 % | Aumentar zoom del navegador | Contenido y acciones permanecen disponibles y legibles | ☑ Cumple |
| Teclado | `Tab`, `Shift+Tab` y `Enter` | Foco visible y secuencia lógica; skip-link utilizable | ☑ Cumple |
| Texto largo | Duplicar el texto de una tarjeta y usar una cadena extensa | No se rompe la rejilla ni aparece desbordamiento horizontal | ☑ Cumple |
| Movimiento reducido | Simular `prefers-reduced-motion: reduce` | Transiciones no esenciales dejan de distraer | ☑ Cumple |
| Source map | Seguir una regla desde DevTools | El navegador conduce al parcial SCSS correcto | ☑ Cumple |
| Build limpio | Eliminar `dist/css` y ejecutar `npm run build:css` | CSS y mapa se regeneran sin edición manual | ☑ Cumple |

**Simulación de `prefers-reduced-motion`:** DevTools → `Ctrl + Shift + P` → "Show Rendering" → "Emulate CSS media feature prefers-reduced-motion" → seleccionar `reduce`.

---

## 4. Reto de extensión: `.card--featured`

Se implementó una variante destacada de tarjeta reutilizando la API pública existente.

### Implementación

```scss
// src/scss/components/_card.scss

.card {
  // ... estilos base existentes ...

  &--featured {
    border-block-start: 4px solid a.$color-primary;
    background: a.$color-surface-soft;
  }
}
```

```html
<!-- index.html -->
<article class="card card--featured">
  <span class="card__tag">Arquitectura</span>
  <h3>Módulos Sass</h3>
  <p>Organiza dependencias con @use y @forward.</p>
  <a class="card__link" href="#">Explorar</a>
</article>
```

### Cumplimiento de requisitos

| Requisito | Cumplimiento |
|---|---|
| R1 – Variante visual | Borde superior con `$color-primary` y fondo `$color-surface-soft`, contraste conservado sobre texto oscuro. |
| R2 – Reutilización | Se reutiliza el mixin `surface-card` (incluido en `.card`) y el token `$color-primary`; no se duplica la sombra ni el radio. |
| R3 – Responsive | No se añade ningún breakpoint; `auto-fit`/`minmax` ya resuelve el comportamiento del grid. |
| R4 – Accesibilidad | El enlace conserva `:focus-visible` con `focus-ring`; la jerarquía semántica (`article`, `h3`, `p`, `a`) no cambia. |
| R5 – Trazabilidad | DevTools conduce a `src/scss/components/_card.scss` mediante el source map. |
| R6 – Documentación | Este apartado explica la abstracción reutilizada y su justificación. |

**Justificación:** la variante se apoya en el mixin `surface-card` y en el token `$color-primary` definidos en `abstracts/`. No se duplican sombra ni radio, y el nesting se mantiene en un solo nivel (`&--featured`), respetando el límite de tres niveles. El cambio nace íntegramente en `src/scss` y pasa por el build; no se editó `dist/css/main.css`.

---

## 5. Metacognición y cierre

1. **¿Qué mejora aporta `@use` frente a un espacio global de variables y mixins?**
   `@use` carga cada módulo una sola vez, expone los miembros mediante namespaces explícitos (por ejemplo `a.$color-primary`) y evita colisiones de nombres. El antiguo `@import` contaminaba el espacio global y podía ejecutar la misma hoja más de una vez, generando CSS duplicado y dependencias implícitas difíciles de rastrear.

2. **¿Qué valor debería permanecer como custom property CSS en lugar de convertirse en una variable Sass?**
   Aquellos valores que deben existir en runtime: temas conmutables, colores que cambian por `media query`, o valores que JavaScript necesita leer o modificar. Ejemplo: `--color-primary` en `:root`, que se mantiene disponible en el navegador aunque su valor inicial provenga de `$color-primary` en compilación.

3. **¿En qué caso elegirías un mixin y en qué caso una función?**
   Un **mixin** cuando se necesita emitir un bloque de declaraciones reutilizables (por ejemplo `surface-card` o `respond-min` con `@content`). Una **función** cuando se transforma un valor y se devuelve un resultado, sin generar declaraciones (por ejemplo `space($step)` que consulta el mapa `$spaces` y valida la clave).

4. **¿Qué dependencia de tu proyecto sería difícil de localizar si eliminaras los namespaces?**
   `surface-card` y `focus-ring`, porque provienen de `abstracts/_mixins.scss` y son reutilizados por varios parciales. Sin el prefijo `a.` no sabrías desde qué módulo se exponen ni si son locales o compartidos. De igual forma, `space()` y los tokens de color perderían su origen visible.

5. **¿Qué parte del CSS generado revisarías para detectar una abstracción Sass excesiva?**
   Revisaría los selectores del CSS final buscando anidamientos profundos, clases generadas innecesariamente o mixins que emiten más declaraciones de las que el componente realmente necesita. Si una abstracción no reduce repetición real o produce CSS difícil de rastrear en DevTools, no aporta valor. También verificaría que las utilidades generadas con `@each` no inflen el archivo con variantes que nadie usa.

6. **Después de comparar Less y Sass, ¿qué criterios técnicos usarías para elegir una herramienta en un proyecto real?**
   - **Arquitectura:** Sass ofrece un sistema modular moderno (`@use` y `@forward`) con namespaces; Less carece de un equivalente.
   - **Ecosistema:** Sass tiene mayor adopción, módulos incorporados (`sass:map`, `sass:color`) y un migrator oficial.
   - **Legibilidad:** SCSS mantiene una sintaxis cercana a CSS, lo que facilita la transición.
   - **Interoperabilidad:** Sass compila a CSS estándar y funciona con la mayoría de bundlers.
   - **Mantenimiento:** la deprecación de `@import` en Dart Sass empuja a migrar hacia `@use`, lo que favorece a Sass para proyectos a largo plazo.

---

## 6. Checklist de entrega

- [x] Proyecto compila con `npm run build:css`.
- [x] `dist/css/main.css` y `dist/css/main.css.map` generados.
- [x] CSS sin variables Sass ni `@use`/`@forward`.
- [x] Source maps verificados en DevTools.
- [x] Matriz de 9 pruebas completada.
- [x] Reto `.card--featured` implementado sin editar `dist/`.
- [x] README con source maps, errores, matriz, reto y metacognición.
- [x] `.gitignore` incluye `node_modules/`.
- [x] `package-lock.json` incluido (no se entrega `node_modules`).