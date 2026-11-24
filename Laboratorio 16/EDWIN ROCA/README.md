# FrameworkLab — Semana 16
Node.js 22 o 24 recomendado. Ejecutar `npm install`, `npm run dev` y abrir la URL indicada. Para producción: `npm run build`, luego `npm run preview`.
El cuarto taller participa en búsqueda, diálogo e inscripción. Las inscripciones se guardan en un Set en memoria y se pierden al recargar; no hay backend ni autenticación.
## Tokens
`--md-sys-color-primary`: color de acción; `--md-sys-color-on-primary`: texto sobre la acción; ambos cambian con el tema para mantener contraste. `--md-filled-button-container-shape`: radio de 12px para distinguir acciones principales con una forma consistente.
## Comparación
| Aspecto | CSS nativo | Bootstrap | Tailwind | Material 3 + Web |
|---|---|---|---|---|
| Estilo | Reglas propias | Componentes | Utilidades | Tokens y componentes |
| Responsive | Grid/Flex | Rejilla | Variantes | Grid propio |
| Riesgo | Mantenimiento manual | Sobrescrituras | Densidad de clases | Biblioteca en mantenimiento |
Para muchas pantallas con identidad común elegiría tokens semánticos; para producción evaluaría soporte de Material Web antes de adoptarlo. La accesibilidad y las pruebas siguen siendo responsabilidad del equipo.
## Matriz de pruebas (NC = no comprobado)
| ID | Prueba | Estado |
|---|---|---|
| T01 | 320–390 px | NC |
| T02 | 768 px | NC |
| T03 | 1024 px o más | NC |
| T04 | Buscar responsivo | NC |
| T05 | Buscar zzz | NC |
| T06 | Ver detalles | NC |
| T07 | Escape y retorno del foco | NC |
| T08 | Inscripción sin duplicados | NC |
| T09 | Tema claro/oscuro | NC |
| T10 | Teclado | NC |
| T11 | Movimiento reducido | NC |
| T12 | npm run build | NC |
Capturas pendientes: móvil, escritorio, foco, tema oscuro, diálogo y compilación.

La instalación y compilación no pudieron verificarse en el entorno de generación por falta de acceso al registro npm. `npm install` generará package-lock.json.
