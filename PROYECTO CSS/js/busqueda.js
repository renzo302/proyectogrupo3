const juegos = [
    { titulo: "Cyberpunk 2077", url: "pages/detalles/detalle-cyberpunk.html" },
    { titulo: "Apex Legends", url: "pages/detalles/detalle-apex.html" },
    { titulo: "FIFA 24", url: "pages/detalles/detalle-fifa.html" },
    { titulo: "Fortnite", url: "pages/detalles/detalle-fortnite.html" },
    { titulo: "GTA V", url: "pages/detalles/detalle-gta.html" },
    { titulo: "Minecraft", url: "pages/detalles/detalle-minecraft.html" },
    { titulo: "Resident Evil 4", url: "pages/detalles/detalle-resident.html" },
    { titulo: "The Witcher 3", url: "pages/detalles/detalle-witcher.html" }
];

const inputBuscador = document.getElementById('buscador-global');
const contenedorResultados = document.getElementById('resultados-busqueda');

if (inputBuscador && contenedorResultados) {
    inputBuscador.addEventListener('keyup', () => {
        const textoEscrito = inputBuscador.value.toLowerCase();
        contenedorResultados.replaceChildren();

        if (!textoEscrito) {
            contenedorResultados.classList.remove('active');
            return;
        }

        const juegosFiltrados = juegos.filter(juego =>
            juego.titulo.toLowerCase().includes(textoEscrito)
        );

        if (!juegosFiltrados.length) {
            contenedorResultados.classList.remove('active');
            return;
        }

        contenedorResultados.classList.add('active');
        const prefijoRuta = window.location.pathname.includes('/pages/detalles/')
            ? '../../'
            : window.location.pathname.includes('/pages/') ? '../' : './';

        juegosFiltrados.forEach(juego => {
            const enlace = document.createElement('a');
            enlace.href = prefijoRuta + juego.url;
            enlace.textContent = juego.titulo;
            enlace.classList.add('result-item');
            contenedorResultados.append(enlace);
        });
    });

    document.addEventListener('click', evento => {
        if (!evento.target.closest('.search-container')) {
            contenedorResultados.classList.remove('active');
        }
    });
}