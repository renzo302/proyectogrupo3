# MotionLab 10 — Semana 10

## Descripción
Catálogo responsivo con transiciones y transformaciones CSS.
Sin JavaScript, sin preprocesadores, sin dependencias.

## Estructura
- `index.html` — catálogo + experimento
- `css/styles.css` — estilos base, estados, escena y movimiento
- `evidencias/` — capturas y registros

## Cómo abrir
1. Abre la carpeta `motionalb10` en VS Code
2. Clic derecho en `index.html` → **Open with Live Server**

## Cómo probar
1. **Sin casillas**: catálogo estático, cajas A y B sin transformar
2. **Tab** por los enlaces: la tarjeta se eleva y la flecha se desplaza
3. **Marca "Aplicar transformaciones"**: A y B se transforman con distinto orden
4. **Marca "Usar origen superior izquierdo"**: cambia el punto de rotación
5. **Emula `prefers-reduced-motion: reduce`** en DevTools: sin movimientos, pero colores y foco siguen funcionando

## Decisiones
- **Transition en la base, transform en el estado**: así la animación suaviza tanto la entrada como el retorno.
- **Movimiento como mejora progresiva**: con `reduce`, se retiran `transform` y `transition`, pero se conservan `background`, `border-color` y `:focus-visible`.
- **`transform` + `border-color` + `background-color`** se listan explícitamente en `transition` en lugar de usar `all`.

## Pendiente
- Capturas en `evidencias/`
- Matriz de pruebas (página 18 de la guía)
- Reto de extensión: 4ª tarjeta + escala + traslación