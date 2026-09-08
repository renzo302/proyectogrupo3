# PC1 - UTP TechHub

## Autor
- Apellidos y nombres: Rojas Ricaldi Erick Andrew
- Código: U24233407
- Sección: 31553

---

## Decisiones de diseño

### 1. Base mobile-first
Se partió de una composición de una sola columna que funciona a 320px. La tipografía utiliza `clamp()` para fluir sin breakpoints innecesarios. Los contenedores tienen `max-inline-size` y `padding-inline` para evitar desbordes.

### 2. Uso de Flexbox
Se aplicó Flexbox en:
- **Cabecera** (`site-header__inner`) - distribuye marca y navegación con `justify-content: space-between`
- **Navegación** (`nav-list`) - con `flex-wrap` para reflujo en pantallas pequeñas
- **Botones** (`button-group`) - con `flex-wrap` y `gap` para evitar solapamiento
- **Etiquetas** (`tag-list`) - con `flex-wrap` para múltiples líneas
- **Metadatos** (`workshop-card__meta`) - distribución horizontal de información
- **Agenda** (`schedule__details div`) - pares término/valor con separación flexible
- **Registro** (`registration__inner`) - contenido y acción alineados
- **Pie** (`site-footer__inner`) - distribución en dos líneas

### 3. Uso de Grid
Se aplicó CSS Grid en:
- **Hero** (`hero__layout`) - composición de texto e imagen en una columna (base)
- **Content shell** (`content-shell`) - separación de talleres y agenda (base una columna)
- **Workshop grid** (`workshop-grid`) - con `repeat(auto-fit, minmax())` para tarjetas intrínsecas

### 4. Breakpoint 1 (48rem) y evidencia del problema que resuelve
**Problema:** En pantallas de tamaño medio, el hero tiene demasiado espacio vacío vertical y la agenda queda muy larga debajo de los talleres.

**Solución:** 
- Hero pasa a dos columnas (texto | imagen) para mejor aprovechamiento horizontal
- `content-shell` se convierte en Grid de 2 columnas (2fr | 1fr) para que la agenda comparta fila con los talleres

### 5. Breakpoint 2 (72rem) y evidencia del problema que resuelve
**Problema:** En pantallas muy amplias, las tarjetas se estiran demasiado y el contenido queda muy disperso.

**Solución:**
- Tarjetas pasan a 3 columnas fijas para mejor legibilidad
- Se incrementa el padding del contenedor para mejor aprovechamiento del espacio
- Aumento de `--card-min` a 280px para tarjetas más amplias

### 6. Tratamiento de imagen y tipografía responsiva
- **Imagen:** `max-inline-size: 100%`, `aspect-ratio: 1280/720` y `object-fit: cover`
- **Tipografía:** `clamp()` en todos los encabezados y en `--font-size-base` para fluidez

---

## Matriz de pruebas

| Prueba | Resultado | Observación o corrección |
|--------|-----------|---------------------------|
| 320 px | ✅ OK | Todo el contenido visible en una columna, sin scroll horizontal |
| 768 px | ✅ OK | Hero en dos columnas, talleres y agenda en grid de 2 columnas |
| 1024 px | ✅ OK | Tarjetas en 3 columnas automáticas, buena distribución |
| 1440 px | ✅ OK | Composición amplia, contenido centrado, márgenes adecuados |
| Zoom 200 % | ✅ OK | Reflujo correcto, sin pérdida de contenido ni scroll horizontal |
| Solo teclado | ✅ OK | Orden de tabulación lógico, foco visible en todos los elementos |
| Cadena de 80 caracteres | ✅ OK | Tarjetas crecen sin desbordar, `overflow-wrap` aplicado |

---

## Validación

- **HTML:** [Pendiente - verificar con Nu HTML Checker]
- **CSS:** [Pendiente - verificar con W3C CSS Validation Service]
- **Advertencias justificadas:** 
  - [Describe aquí cualquier advertencia y por qué no afecta la funcionalidad]

---

## Autoevaluación

- **Criterio mejor logrado:** Composición responsiva con Grid y Flexbox, cumpliendo todos los requisitos de la PC1.

- **Mejora pendiente:** [Indica aspectos que podrías mejorar si tuvieras más tiempo]

- **Declaración de autoría y recursos consultados:**
  - Este trabajo ha sido desarrollado de forma individual.
  - Recursos consultados: 
    - Documentación de MDN Web Docs
    - Guía de laboratorio UTP - Semana 4
    - W3C CSS Flexible Box Layout Module Level 1
    - W3C CSS Grid Layout Module Level 1

---

## Evidencias

Las capturas de pantalla se encuentran en la carpeta `evidencias/`:
- `320.png` - Vista a 320px
- `768.png` - Vista a 768px
- `1024.png` - Vista a 1024px
- `1440.png` - Vista a 1440px
- `zoom-200.png` - Zoom al 200%