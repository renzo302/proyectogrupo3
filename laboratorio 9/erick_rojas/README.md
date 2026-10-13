# MotionLab Talleres — Semana 9

## Descripción
Catálogo responsivo con animaciones CSS controlables sin JavaScript.
Usa @keyframes, animation-* y prefers-reduced-motion.

## Estructura
- `index.html` — HTML semántico
- `css/styles.css` — estilos y animaciones
- `evidencias/` — capturas y resultados de pruebas

## Cómo abrir
1. Abre la carpeta `motionalb` en VS Code
2. Clic derecho en `index.html` → **Open with Live Server**
3. Abre DevTools (F12)

## Cómo probar los controles
1. Ambas casillas desmarcadas → vista estática
2. Marca **Activar movimiento** → las 3 tarjetas entran escalonadas (0, 120, 240 ms) y el punto se mueve
3. Marca **Pausar** → todo se congela en su posición actual
4. Desmarca **Pausar** → continúa desde donde estaba
5. Desmarca **Activar** → se retira la animación y vuelve la base

## Cómo probar movimiento reducido
- En DevTools: `Ctrl+Shift+P` → "Emulate CSS prefers-reduced-motion: reduce"
- Marca **Activar movimiento** → no debe animarse nada
- Todo el contenido y los enlaces deben seguir visibles

## Decisiones de diseño
- La animación se activa **manualmente**, no al cargar, para respetar al usuario (WCAG 2.2.2).
- `transform` + `opacity` se usan porque no disparan recálculo de layout.
- El indicador es puramente decorativo (`aria-hidden="true"`).

## Pendiente
- Capturas en `evidencias/`
- Matriz de pruebas (página 17 de la guía)
- Reto de extensión (4ª tarjeta con retraso 360 ms)