document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.catalogo-btn-filtro');
    const tarjetasJuego = document.querySelectorAll('.catalogo-card');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            
            // 1. Quitar la clase activa de todos y ponérsela al que se hizo clic
            botonesFiltro.forEach(btn => btn.classList.remove('is-active'));
            boton.classList.add('is-active');

            // 2. Obtener qué filtro eligió el usuario (accion, rpg, deportes, todos)
            const filtroSeleccionado = boton.getAttribute('data-filter');

            // 3. Evaluar y filtrar cada tarjeta
            tarjetasJuego.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-category');

                if (filtroSeleccionado === 'todos' || filtroSeleccionado === categoriaTarjeta) {
                    // Muestra la tarjeta y mantiene su estructura Flexbox interna
                    tarjeta.style.display = 'flex';
                } else {
                    // Oculta la tarjeta de la cuadrícula
                    tarjeta.style.display = 'none';
                }
            });
        });
    });
});