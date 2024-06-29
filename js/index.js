const planetas = [
    {
        nombre: 'Mercurio',
        descripcion: 'El planeta más cercano al Sol. Tiene una superficie rocosa y sin atmósfera significativa.',
        imagen: 'img/mercurio.jpeg'
    },
    {
        nombre: 'Venus',
        descripcion: 'El planeta brillante conocido como la "Estrella de la Mañana". Tiene una densa atmósfera de dióxido de carbono.',
        imagen: 'img/venus.jpeg'
    },
    {
        nombre: 'Tierra',
        descripcion: 'Nuestro hogar. El único planeta conocido con vida. Posee agua líquida y una atmósfera rica en oxígeno.',
        imagen: 'img/tierra.jpeg'
    },
    {
        nombre: 'Marte',
        descripcion: 'El planeta rojo con una delgada atmósfera. Se han realizado misiones de exploración en su superficie.',
        imagen: 'img/marte.jpeg'
    },
    {
        nombre: 'Júpiter',
        descripcion: 'El gigante gaseoso con una gran mancha roja y numerosas lunas. Es el más masivo del sistema solar.',
        imagen: 'img/jupiter.jpeg'
    },
    {
        nombre: 'Saturno',
        descripcion: 'Famoso por sus impresionantes anillos. Está compuesto principalmente de hidrógeno y helio.',
        imagen: 'img/saturno.jpeg'
    },
    {
        nombre: 'Urano',
        descripcion: 'El planeta inclinado con un color azul verdoso. Tiene anillos y está compuesto por hielo y gas.',
        imagen: 'img/urano.jpeg'
    },
    {
        nombre: 'Neptuno',
        descripcion: 'El último planeta del sistema solar. Tiene una atmósfera turbulenta y es similar a Urano en composición.',
        imagen: 'img/neptuno.jpeg'
    }
];

let indiceActual = 0;

function mostrarPlaneta() {
    const planetInfo = document.getElementById('planet-info');
    const planetaActual = planetas[indiceActual];
    planetInfo.innerHTML = `
        <h2>${planetaActual.nombre}</h2>
        <p>${planetaActual.descripcion}</p>
        <img src="${planetaActual.imagen}" alt="${planetaActual.nombre}">
    `;
}

function buscarPlaneta(nombre) {
    const planetaEncontrado = planetas.find(planeta => planeta.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (planetaEncontrado) {
        indiceActual = planetas.indexOf(planetaEncontrado);
        mostrarPlaneta();
    } else {
        const planetInfo = document.getElementById('planet-info');
        planetInfo.innerHTML = '<p>Planeta no encontrado. Inténtalo de nuevo.</p>';
    }
}

document.getElementById('next-planet').addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % planetas.length;
    mostrarPlaneta();
});

document.getElementById('search-planet').addEventListener('input', (event) => {
    buscarPlaneta(event.target.value);
});

const contenedorImagenes = document.getElementById('images');
for (const planeta of planetas) {
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = planeta.imagen;
    nuevaImagen.alt = planeta.nombre;
    contenedorImagenes.appendChild(nuevaImagen);
}


mostrarPlaneta();