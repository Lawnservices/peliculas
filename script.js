document.addEventListener('DOMContentLoaded', () => {

    let fecha = new Date();
    let nombre = 'Bienvenído a la película..';
    document.getElementById('piepagina').textContent = fecha.getFullYear() + ' ' + nombre;

    
});