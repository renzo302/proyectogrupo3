// 1. Nuestra "Base de Datos" simulada (Array de objetos)
const juegos = [
    { titulo: "Cyberpunk 2077", url: "pages/detalles/detalle-cyberpunk.html" },
    { titulo: "Apex Legends", url: "pages/detalles/detalle-apex.html" },
    { titulo: "FIFA 24", url: "pages/detalles/detalle-fifa.html" },
    { titulo: "Fortnite", url: "pages/detalles/detalle-fortnite.html" },
    { titulo: "GTA V", url: "pages/detalles/detalle-gta.html" },
    { titulo: "Minecraft", url: "pages/detalles/minecraft.html" },
    { titulo: "Resident Evil 4", url: "pages/detalles/detalle-resident.html" },
    { titulo: "The Witcher 3", url: "pages/detalles/detalle-witcher.html" }
];

// 2. Capturamos los elementos del HTML
const inputBuscador = document.getElementById('buscador-global');
const contenedorResultados = document.getElementById('resultados-busqueda');

// 3. Evento: Cada vez que el usuario suelta una tecla al escribir
inputBuscador.addEventListener('keyup', () => {
    // Obtenemos lo que escribió y lo pasamos a minúsculas
    let textoEscrito = inputBuscador.value.toLowerCase(); 
    
    // Limpiamos los resultados anteriores
    contenedorResultados.innerHTML = ''; 

    // Si el input está vacío, ocultamos la caja y salimos
    if (textoEscrito === '') {
        contenedorResultados.classList.remove('active');
        return;
    }

    // Filtramos nuestro arreglo de juegos
    let juegosFiltrados = juegos.filter(juego => 
        juego.titulo.toLowerCase().includes(textoEscrito)
    );

    // Si encontramos coincidencias
    if (juegosFiltrados.length > 0) {
        contenedorResultados.classList.add('active'); // Mostramos la caja
        
        // Calculamos dinámicamente la ruta hacia la carpeta principal (raíz)
        let prefijoRuta = "./"; 
        if (window.location.pathname.includes("/pages/detalles/")) {
            prefijoRuta = "../../"; // Retrocede 2 carpetas si estamos en un juego
        } else if (window.location.pathname.includes("/pages/")) {
            prefijoRuta = "../";    // Retrocede 1 carpeta si estamos en catálogo u ofertas
        }

        // Creamos los enlaces combinando el prefijo con la URL del arreglo
        juegosFiltrados.forEach(juego => {
            let enlace = document.createElement('a');
            enlace.href = prefijoRuta + juego.url; // Ruta a prueba de fallos
            enlace.textContent = juego.titulo;
            enlace.classList.add('result-item');
            
            // Lo inyectamos en el HTML
            contenedorResultados.appendChild(enlace);
        });
    } else {
        // Si no hay coincidencias, lo ocultamos
        contenedorResultados.classList.remove('active');
    }
});

// Extra: Ocultar los resultados si haces clic fuera del buscador
document.addEventListener('click', (evento) => {
    if (!evento.target.closest('.search-container')) {
        contenedorResultados.classList.remove('active');
    }
});